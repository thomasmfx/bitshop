import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useOutletContext } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { TestWrapper, LocationDisplay } from '../../tests/testUtils';
import CartProducts from './CartProducts';
import mockProduct from '../../__mocks__/mockProduct';

vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useOutletContext: vi.fn(),
  };
});

describe('CartProducts', () => {
  useOutletContext.mockReturnValue({
    addProduct: vi.fn(),
  });

  it('should render list of products in cart', () => {
    const product = { ...mockProduct, quantity: 1 }; // give required quantity to 'value' prop of QuantityControl
    const products = [product, { ...product, id: 70 }]; // prevent duplicated key

    render(
      <TestWrapper>
        <CartProducts products={products} />
      </TestWrapper>,
    );

    expect(screen.getAllByText(mockProduct.title)).toHaveLength(2);
  });

  it('should display button that redirects to shop when cart is empty', async () => {
    const user = userEvent.setup();
    const expectedRoute = '/shop';

    render(
      <TestWrapper>
        <CartProducts products={[]} />
        <LocationDisplay />
      </TestWrapper>,
    );

    const button = screen.getByRole('link', { name: 'Continue shopping' });
    await user.click(button);

    expect(screen.getByTestId('location-display')).toHaveTextContent(
      expectedRoute,
    );
  });
});
