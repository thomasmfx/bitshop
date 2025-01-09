import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { ShoppingCart } from 'react-feather'
import QuantityControl from '../QuantityControl/QuantityControl'
import Button from '../Button/Button'

const StyledForm = styled.form`
  align-self: end;
  display: flex;
  justify-content: space-between;
  gap: 2em;
`

const Text = styled.p``

function ProductForm({ product, onAddProduct }) {
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
    onAddProduct(product, quantity)
    setQuantity('')
  }

  return (
    <StyledForm>
      <QuantityControl
        onMinusClick={handleDecreaseQuantity}
        onPlusClick={handleIncreaseQuantity}
        onChange={handleInputChange}
        value={quantity}
      />
      <Button onClick={handleSubmit} type="submit">
        <ShoppingCart size={20} />
        <Text> Add </Text>
      </Button>
    </StyledForm>
  )
}

ProductForm.propTypes = {
  product: PropTypes.object,
  onAddProduct: PropTypes.func,
}

export default ProductForm
