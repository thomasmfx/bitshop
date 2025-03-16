import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
import { TestWrapper, LocationDisplay } from '../../tests/testUtils'
import Header from './Header'

describe('Header', () => {
  const testNavigation = async (ariaLabel, expectedRoute) => {
    const user = userEvent.setup()

    render(
      <TestWrapper>
        <Header itemsCount={0} />
        <LocationDisplay />
      </TestWrapper>,
    )

    const routerLink = screen.getByRole('link', { name: ariaLabel })
    await user.click(routerLink)

    expect(routerLink).toHaveAttribute('aria-label', ariaLabel)
    expect(screen.getByTestId('location-display')).toHaveTextContent(
      expectedRoute,
    )
  }

  describe('Navigation', () => {
    it('should navigate to the home page when the logo is clicked', async () => {
      await testNavigation('bitShop Logo', '/')
    })

    it("should navigate to the home page when the 'Home' link is clicked", async () => {
      await testNavigation('Home', '/')
    })

    it("should navigate to the about us page when the 'About Us' link is clicked", async () => {
      await testNavigation('About Us', '/about-us')
    })

    it("should navigate to the shop page when the 'Shop' link is clicked", async () => {
      await testNavigation('Shop', '/shop')
    })

    it("should navigate to the cart page when the 'Cart' link is clicked", async () => {
      await testNavigation('Cart', '/cart')
    })
  })

  describe('Cart Items Count', () => {
    it('should display 0 items when cart is empty', () => {
      render(
        <TestWrapper>
          <Header itemsCount={0} />
        </TestWrapper>,
      )

      const cartButton = screen.getByRole('link', { name: 'Cart' })
      expect(cartButton).toHaveTextContent('0')
    })

    it('should display 7 items when cart has some items', () => {
      render(
        <TestWrapper>
          <Header itemsCount={7} />
        </TestWrapper>,
      )

      const cartButton = screen.getByRole('link', { name: 'Cart' })
      expect(cartButton).toHaveTextContent('7')
    })

    it('should display 99 items when cart is full', () => {
      render(
        <TestWrapper>
          <Header itemsCount={99} />
        </TestWrapper>,
      )

      const cartButton = screen.getByRole('link', { name: 'Cart' })
      expect(cartButton).toHaveTextContent('99')
    })
  })
})
