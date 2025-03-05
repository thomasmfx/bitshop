import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { ShoppingCart } from 'react-feather'
import QuantityControl from '../QuantityControl/QuantityControl'
import Button from '../Button/Button'

const mediaStyledForm = css`
  @media (max-width: ${({ theme }) => theme.device.laptop}) and (min-width: ${({
      theme,
    }) => theme.device.mobileL}) {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  @media (max-width: ${({ theme }) => theme.device.mobileL}) {
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    width: 100%;
    justify-content: space-between;
  }

  @media (max-width: ${({ theme }) => theme.device.mobileM}) {
    display: flex;
  }
`

const mediaStyledButton = css`
  @media (max-width: ${({ theme }) => theme.device.mobileM}) {
    width: 120px;
  }
`

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: ${(props) =>
    props.size === 'L' ? 'min-content min-content' : '1fr 1fr'};
  grid-template-rows: 1fr;
  gap: ${(props) => (props.size === 'L' ? '3em' : '2em')};
  ${(props) => props.size && mediaStyledForm};
`

const StyledButton = styled(Button)`
  width: ${(props) => (props.size === 'L' ? '150px' : '100%')};
  height: ${(props) => (props.size === 'L' ? '45px' : '')};
  align-items: center;
  ${(props) => props.size && mediaStyledButton};
`

const Text = styled.p`
  height: ${(props) => (props.size === 'L' ? '' : '22px')};
  font-size: ${(props) => (props.size === 'L' ? '1rem' : '')};
`

function ProductForm({ product, onAddProduct, defaultQuantity, size }) {
  const [quantity, setQuantity] = useState(defaultQuantity || '')

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
    setQuantity(defaultQuantity || '')
  }

  return (
    <StyledForm size={size}>
      <QuantityControl
        onMinusClick={handleDecreaseQuantity}
        onPlusClick={handleIncreaseQuantity}
        onChange={handleInputChange}
        minusDisabledValue={defaultQuantity}
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

ProductForm.propTypes = {
  defaultQuantity: PropTypes.number,
  size: PropTypes.string,
}

export default ProductForm
