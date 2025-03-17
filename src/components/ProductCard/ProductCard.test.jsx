import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { useOutletContext } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { TestWrapper, LocationDisplay } from '../../tests/testUtils'
import ProductCard from './ProductCard'
import mockProduct from '../../__mocks__/mockProduct'

vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    useOutletContext: vi.fn(),
  }
})

describe('ProductCard', () => {
  describe('should render', () => {
    useOutletContext.mockReturnValue({
      addProduct: vi.fn(),
    })

    it('product title', () => {
      render(
        <TestWrapper>
          <ProductCard product={mockProduct} />
        </TestWrapper>,
      )

      expect(screen.getByText(mockProduct.title)).toBeInTheDocument()
    })
    it('product image', () => {
      render(
        <TestWrapper>
          <ProductCard product={mockProduct} />
        </TestWrapper>,
      )

      expect(screen.getByAltText(mockProduct.title)).toBeInTheDocument()
    })
    it('product price', () => {
      render(
        <TestWrapper>
          <ProductCard product={mockProduct} />
        </TestWrapper>,
      )

      expect(screen.getByText(mockProduct.price)).toBeInTheDocument()
    })
    it('product rating', () => {
      render(
        <TestWrapper>
          <ProductCard product={mockProduct} />
        </TestWrapper>,
      )

      expect(screen.getByTestId('Rating')).toBeInTheDocument()
    })
  })

  it('should redirect to product page on user click', async () => {
    const user = userEvent.setup()
    const expectedRoute = `/shop/${mockProduct.id}`
    const ariaLabel = 'Product page'

    render(
      <TestWrapper>
        <ProductCard product={mockProduct} />
        <LocationDisplay />
      </TestWrapper>,
    )

    const routerLink = screen.getByRole('link', { name: ariaLabel })
    await user.click(routerLink)

    expect(routerLink).toHaveAttribute('aria-label', ariaLabel)
    expect(screen.getByTestId('location-display')).toHaveTextContent(
      expectedRoute,
    )
  })

  it('should render product form', () => {
    render(
      <TestWrapper>
        <ProductCard product={mockProduct} />
        <LocationDisplay />
      </TestWrapper>,
    )

    expect(
      screen.getByRole('form', { name: 'Product form' }),
    ).toBeInTheDocument()
  })
})
