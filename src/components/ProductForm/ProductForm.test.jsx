import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { useOutletContext } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { TestWrapper } from '../../tests/testUtils'
import ProductForm from './ProductForm'
import mockProduct from '../../__mocks__/mockProduct'

vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    useOutletContext: vi.fn(),
  }
})

describe('ProductForm', () => {
  it('should call addProduct when form is submited', async () => {
    const addProductMock = vi.fn()

    useOutletContext.mockReturnValue({
      addProduct: addProductMock,
    })

    const user = userEvent.setup()

    render(
      <TestWrapper>
        <ProductForm product={mockProduct} />
      </TestWrapper>,
    )

    const addProductButton = screen.getByRole('button', {
      name: 'Add product to cart',
    })

    expect(addProductMock).not.toHaveBeenCalled()
    await user.click(addProductButton)
    expect(addProductMock).toHaveBeenCalled()
  })
})
