import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { TestWrapper, LocationDisplay } from '../../tests/testUtils';
import CartProductCard from './CartProductCard';
import mockProduct from '../../__mocks__/mockProduct';
import { useOutletContext } from 'react-router-dom';

const mockProductCopy = { ...mockProduct, quantity: 2 }; // give value to child QuantityControl

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useOutletContext: vi.fn(),
  };
});

describe('CartProductCard', () => {
  it('should navigate to the product page when clicked', async () => {
    const user = userEvent.setup();

    useOutletContext.mockReturnValue({
      removeProduct: vi.fn(),
      addProduct: vi.fn(),
      decreaseProductQuantity: vi.fn(),
    });

    render(
      <TestWrapper>
        <CartProductCard product={mockProductCopy} />
        <LocationDisplay />
      </TestWrapper>,
    );

    const productLink = screen.getByRole('link');
    await user.click(productLink);

    expect(screen.getByTestId('location-display')).toHaveTextContent(
      `/shop/${mockProductCopy.id}`,
    );
  });
  it('should call removeProduct when the remove button is clicked', async () => {
    const user = userEvent.setup();
    const mockRemoveProduct = vi.fn();

    useOutletContext.mockReturnValue({
      removeProduct: mockRemoveProduct,
      addProduct: vi.fn(),
      decreaseProductQuantity: vi.fn(),
    });

    render(
      <TestWrapper>
        <CartProductCard product={mockProductCopy} />
      </TestWrapper>,
    );

    const removeButton = screen.getByRole('button', {
      name: /remove product/i,
    });
    await user.click(removeButton);

    expect(mockRemoveProduct).toHaveBeenCalledWith(mockProductCopy);
  });

  it('should call decreaseProductQuantity when decreasing quantity', async () => {
    const user = userEvent.setup();
    const mockDecreaseProductQuantity = vi.fn();

    useOutletContext.mockReturnValue({
      removeProduct: vi.fn(),
      addProduct: vi.fn(),
      decreaseProductQuantity: mockDecreaseProductQuantity,
    });

    render(
      <TestWrapper>
        <CartProductCard product={mockProductCopy} />
      </TestWrapper>,
    );

    const decreaseButton = screen.getByRole('button', {
      name: /decrease quantity/i,
    });
    await user.click(decreaseButton);

    expect(mockDecreaseProductQuantity).toHaveBeenCalledWith(
      mockProductCopy,
      1,
    );
  });

  it('should call addProduct when increasing quantity', async () => {
    const user = userEvent.setup();
    const mockAddProduct = vi.fn();

    useOutletContext.mockReturnValue({
      removeProduct: vi.fn(),
      addProduct: mockAddProduct,
      decreaseProductQuantity: vi.fn(),
    });

    render(
      <TestWrapper>
        <CartProductCard product={mockProductCopy} />
      </TestWrapper>,
    );

    const increaseButton = screen.getByRole('button', {
      name: /increase quantity/i,
    });
    await user.click(increaseButton);

    expect(mockAddProduct).toHaveBeenCalledWith(mockProductCopy, 1);
  });
});
