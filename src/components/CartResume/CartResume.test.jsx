import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { useOutletContext } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { TestWrapper, LocationDisplay } from '../../tests/testUtils'
import CartResume from './CartResume'
import mockProduct from '../../__mocks__/mockProduct'

vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    useOutletContext: vi.fn(),
  }
})

describe('CartResume', () => {
  useOutletContext.mockReturnValue({
    clearCart: vi.fn(),
    cartProducts: [],
    notifyEmptyCart: vi.fn(),
  })

  describe('discount coupon', () => {
    it('should allow user to apply discount coupon', async () => {
      const user = userEvent.setup()

      render(
        <TestWrapper>
          <CartResume />
        </TestWrapper>,
      )

      const discount = screen.getByTestId('coupon-discount')
      const couponInput = screen.getByPlaceholderText('Enter coupon code')
      const button = screen.getByRole('button', { name: 'Apply' })

      expect(discount).toHaveTextContent('0')

      await user.type(couponInput, '15OFF')
      await user.click(button)

      expect(discount).toHaveTextContent('15')
    })
    it('should give feedback on invalid coupon', async () => {
      const user = userEvent.setup()

      render(
        <TestWrapper>
          <CartResume />
        </TestWrapper>,
      )

      const discount = screen.getByTestId('coupon-discount')
      const couponInput = screen.getByPlaceholderText('Enter coupon code')
      const button = screen.getByRole('button', { name: 'Apply' })

      expect(discount).toHaveTextContent('0')
      expect(screen.queryByText('Invalid coupon')).not.toBeInTheDocument()

      await user.type(couponInput, 'invalid coupon')
      await user.click(button)

      expect(discount).toHaveTextContent('0')
      expect(screen.queryByText('Invalid coupon')).toBeInTheDocument()
    })
    it('should give feedback on valid coupon', async () => {
      const user = userEvent.setup()

      render(
        <TestWrapper>
          <CartResume />
        </TestWrapper>,
      )

      const discount = screen.getByTestId('coupon-discount')
      const couponInput = screen.getByPlaceholderText('Enter coupon code')
      const button = screen.getByRole('button', { name: 'Apply' })

      expect(discount).toHaveTextContent('0')
      expect(
        screen.queryByText('Coupon applied succesfully'),
      ).not.toBeInTheDocument()

      await user.type(couponInput, '15OFF')
      await user.click(button)

      expect(discount).toHaveTextContent('15')
      expect(
        screen.queryByText('Coupon applied succesfully'),
      ).toBeInTheDocument()
    })
  })

  describe('on checkout', () => {
    it('should not redirect to checkout page if cart is empty', async () => {
      const user = userEvent.setup()
      const expectedRoute = '/'

      render(
        <TestWrapper>
          <CartResume />
          <LocationDisplay />
        </TestWrapper>,
      )

      const button = screen.getByRole('button', { name: 'Checkout' })
      await user.click(button)

      expect(screen.getByTestId('location-display')).toHaveTextContent(
        expectedRoute,
      )
    })

    it('should redirect to checkout page if cart has products', async () => {
      useOutletContext.mockReturnValue({
        cartProducts: [mockProduct],
      })

      const user = userEvent.setup()
      const expectedRoute = '/checkout'

      render(
        <TestWrapper>
          <CartResume />
          <LocationDisplay />
        </TestWrapper>,
      )

      const button = screen.getByRole('button', { name: 'Checkout' })
      await user.click(button)

      expect(screen.getByTestId('location-display')).toHaveTextContent(
        expectedRoute,
      )
    })
  })
})
