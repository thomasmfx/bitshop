import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Minus, Plus } from 'react-feather'

const StyledProductQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 32px;
`

const Input = styled.input`
  border: none;
  border-top: 1px solid #ced4da;
  border-bottom: 1px solid #ced4da;
  width: 36px;
  height: 100%;
  outline: none;
  text-align: center;
  font-size: 0.8rem;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: 1px solid #ced4da;
  height: 100%;
  border-radius: ${(props) =>
    props.$roundRight ? '0 5px 5px 0' : '5px 0 0 5px'};
  padding: 0.1em 0.3em;
  cursor: pointer;
`

function ProductQuantity({
  onDecreaseQuantity,
  onIncreaseQuantity,
  onChange,
  productQuantity,
}) {
  return (
    <StyledProductQuantity>
      <Button onClick={(e) => onDecreaseQuantity(e)}>
        <Minus size={15} />
      </Button>
      <Input
        name="quantity"
        type="number"
        onChange={(e) => onChange(e)}
        value={productQuantity}
      />
      <Button $roundRight={true} onClick={(e) => onIncreaseQuantity(e)}>
        <Plus size={15} />
      </Button>
    </StyledProductQuantity>
  )
}

ProductQuantity.propTypes = {
  onDecreaseQuantity: PropTypes.func.isRequired,
  onIncreaseQuantity: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  productQuantity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default ProductQuantity
