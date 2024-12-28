import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Minus, Plus } from 'react-feather'

const StyledQuantityControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  min-width: 28px;
  height: 100%;
  border-radius: ${(props) =>
    props.$roundRight ? '0 5px 5px 0' : '5px 0 0 5px'};
  padding: 0.1em 0.3em;
  cursor: pointer;
`

function QuantityControl({
  onMinusClick,
  onPlusClick,
  onChange,
  value,
}) {
  return (
    <StyledQuantityControl>
      <Button
        onClick={(e) => onMinusClick(e)}
        aria-label="Decrease quantity"
      >
        <Minus size={15} style={{ opacity: '0.6' }} />
      </Button>
      <Input
        name="quantity"
        type="number"
        onChange={(e) => onChange(e)}
        value={value}
      />
      <Button
        $roundRight={true}
        onClick={(e) => onPlusClick(e)}
        aria-label="Increase quantity"
      >
        <Plus size={15} style={{ opacity: '0.6' }} />
      </Button>
    </StyledQuantityControl>
  )
}

QuantityControl.propTypes = {
  onMinusClick: PropTypes.func,
  onPlusClick: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default QuantityControl
