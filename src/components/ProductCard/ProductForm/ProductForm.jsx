import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useState } from 'react';

import ProductQuantityInput from "./ProductQuantity";
import ButtonAddToCart from "./ButtonAddToCart";

const StyledForm = styled.form`
  align-self: end;
  display: flex;
  justify-content: space-between;
  gap: 2em;
`

function ProductForm({ product }) {
  const [quantity, setQuantity] = useState('');

  function handleDecreaseQuantity(e) {
    e.preventDefault();
    if (quantity === 1) {
      setQuantity('')
      return;
    };
    if (quantity === '') {
      return;
    };
    setQuantity(parseInt(quantity - 1));
  }

  function handleIncreaseQuantity(e) {
    e.preventDefault();
    if (quantity === '') setQuantity(1);
    setQuantity(parseInt(quantity + 1));
  }

  function handleInputChange(e) {
    e.preventDefault();
    setQuantity(e.target.value)
    console.log(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    setQuantity('')
  }

  return (
    <StyledForm>
      <ProductQuantityInput 
        onDecreaseQuantity={handleDecreaseQuantity}
        onIncreaseQuantity={handleIncreaseQuantity}
        onChange={handleInputChange}
        productQuantity={quantity}
      />
      <ButtonAddToCart 
        onAddProductToCart={handleSubmit}
      />
    </StyledForm> 
  )
}

export default ProductForm