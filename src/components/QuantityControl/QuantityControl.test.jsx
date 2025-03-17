import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { TestWrapper } from '../../tests/testUtils'
import QuantityControl from './QuantityControl'

describe('QuantityControl', () => {
  it('should call onDecreaseQuantity when decrease button is clicked', async () => {
    const user = userEvent.setup()
    const mockDecreaseQuantity = vi.fn()

    render(
      <TestWrapper>
        <QuantityControl value={2} onDecreaseQuantity={mockDecreaseQuantity} />
      </TestWrapper>,
    )

    const decreaseButton = screen.getByRole('button', {
      name: 'Decrease quantity',
    })

    expect(mockDecreaseQuantity).not.toHaveBeenCalled()
    await user.click(decreaseButton)
    expect(mockDecreaseQuantity).toHaveBeenCalled()
  })
  it('should call onIncreaseQuantity when increase button is clicked', async () => {
    const user = userEvent.setup()
    const mockIncreaseQuantity = vi.fn()

    render(
      <TestWrapper>
        <QuantityControl value={1} onIncreaseQuantity={mockIncreaseQuantity} />
      </TestWrapper>,
    )

    const decreaseButton = screen.getByRole('button', {
      name: 'Increase quantity',
    })

    expect(mockIncreaseQuantity).not.toHaveBeenCalled()
    await user.click(decreaseButton)
    expect(mockIncreaseQuantity).toHaveBeenCalled()
  })
  it('should call onInputQuantityChange when user inserts input value', async () => {
    const user = userEvent.setup()
    const mockInputQuantityChange = vi.fn()

    render(
      <TestWrapper>
        <QuantityControl
          value={1}
          onInputQuantityChange={mockInputQuantityChange}
        />
      </TestWrapper>,
    )

    const input = screen.getByTestId('product-quantity-input')
    await user.type(input, '5')

    expect(mockInputQuantityChange).toHaveBeenCalledTimes(1)
    expect(mockInputQuantityChange).toHaveBeenCalledWith(expect.any(Object))
  })
})
