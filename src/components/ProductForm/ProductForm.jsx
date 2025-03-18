import PropTypes from 'prop-types'
import { useState } from 'react'
import { ShoppingCart } from 'react-feather'
import QuantityControl from '../QuantityControl/QuantityControl'
import { useOutletContext } from 'react-router-dom'
import * as S from './ProductForm.styles'

function ProductForm({ product, defaultQuantity = 1, size }) {
  const [quantity, setQuantity] = useState(defaultQuantity)
  const { addProduct } = useOutletContext()

  function handleDecreaseQuantity(e) {
    e.preventDefault()
    if (quantity === 1) {
      setQuantity(defaultQuantity)
      return
    }
    if (quantity === '') return
    setQuantity(Number(quantity - 1))
  }

  function handleIncreaseQuantity(e) {
    e.preventDefault()
    if (quantity === '') setQuantity(1)
    setQuantity(Number(quantity + 1))
  }

  function handleInputChange(e) {
    e.preventDefault()
    e.target.value === ''
      ? setQuantity(e.target.value)
      : setQuantity(Number(e.target.value))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (quantity === '' || quantity < 1) return
    addProduct(product, quantity)
    setQuantity(defaultQuantity)
  }

  return (
    <S.Form size={size} aria-label="Product form">
      <QuantityControl
        onDecreaseQuantity={handleDecreaseQuantity}
        onIncreaseQuantity={handleIncreaseQuantity}
        onInputQuantityChange={handleInputChange}
        value={quantity}
        size={size}
      />
      <S.StyledButton
        onClick={handleSubmit}
        type="submit"
        size={size}
        aria-label="Add product to cart"
      >
        {!size && <ShoppingCart size={20} />}
        <S.StyledSpan size={size}>
          {' '}
          {size === 'L' ? 'Add to cart' : 'Add'}
        </S.StyledSpan>
      </S.StyledButton>
    </S.Form>
  )
}

ProductForm.propTypes = {
  product: PropTypes.object.isRequired,
  defaultQuantity: PropTypes.number,
  size: PropTypes.string,
}

export default ProductForm
