import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { ShoppingCart } from 'react-feather'
import QuantityControl from '../QuantityControl/QuantityControl'
import Button from '../Button/Button'

const StyledForm = styled.form`
  align-self: end;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 2em;
`

const StyledButton = styled(Button)`
  width: ${(props) => (props.size === 'L' ? '150px' : '')};
  height: 100%;
  align-items: center;
`

const Text = styled.p`
  height: ${(props) => (props.size === 'L' ? '' : '22px')};
  font-size: ${(props) => (props.size === 'L' ? '1rem' : '')};
`

function ProductForm({ product, onAddProduct, size}) {
  const [quantity, setQuantity] = useState('')

  function handleDecreaseQuantity(e) {
    e.preventDefault()
    if (quantity === 1) {
      setQuantity('')
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
    setQuantity(Number(e.target.value))
  }

  function handleSubmit(e) {
    e.preventDefault()
    quantity !== '' ? onAddProduct(product, quantity) : onAddProduct(product, 1)
    setQuantity('')
  }

  return (
    <StyledForm>
      <QuantityControl
        onMinusClick={handleDecreaseQuantity}
        onPlusClick={handleIncreaseQuantity}
        onChange={handleInputChange}
        value={quantity}
        size={size}
      />
      <StyledButton onClick={handleSubmit} type="submit" size={size}>
        {!size && <ShoppingCart size={20} />}
        <Text size={size}> {size === 'L' ? 'Add to cart' : 'Add'}</Text>
      </StyledButton>
    </StyledForm>
  )
}

ProductForm.propTypes = {
  product: PropTypes.object,
  onAddProduct: PropTypes.func,
}

export default ProductForm
