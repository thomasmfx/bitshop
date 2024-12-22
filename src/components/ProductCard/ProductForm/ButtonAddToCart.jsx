import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Star, ShoppingCart, Minus, Plus } from 'react-feather'
import { useState } from 'react'

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .4em;
  padding: .3em .5em;
  width: 100%;

  background-color: var(--color-primary);
  border: none;
  border-radius: 5px;
  color: white;
  font-size: .9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all .15s ease-in-out;

  &:hover {
    background-color: var(--color-quaternary);
  }
`

function ButtonAddToCart({onAddProductToCart}) {
  return (
    <StyledButton type='submit' onClick={(e) => onAddProductToCart(e)}>
      <ShoppingCart size={20}/>
      Add
    </StyledButton>
  )
}

export default ButtonAddToCart