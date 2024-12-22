import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ShoppingCart } from 'react-feather'

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4em;
  padding: 0.3em 0.5em;
  width: 100%;

  background-color: var(--color-primary);
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  &:hover {
    background-color: var(--color-quaternary);
  }
`

function ButtonAddToCart({ onAddProductToCart }) {
  return (
    <StyledButton type="submit" onClick={(e) => onAddProductToCart(e)}>
      <ShoppingCart size={20} />
      Add
    </StyledButton>
  )
}

ButtonAddToCart.propTypes = {
  onAddProductToCart: PropTypes.func.isRequired,
}

export default ButtonAddToCart
