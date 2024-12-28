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

  &:disabled {
    cursor: not-allowed;
    background-color: inherit;
  }

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

  svg {
    opacity: 0.6 !important; // override opacity when button is disabled
  }

  &:disabled {
    cursor: not-allowed;
    
    svg {
      color: var(--color-default);
    }
  }
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
        onClick={onMinusClick}
        disabled={value === ''}
        aria-label="Decrease quantity"
      >
        <Minus size={15} />
      </Button>
      <Input
        name="quantity"
        type="number"
        disabled={!onChange}
        onChange={onChange}
        value={value}
      />
      <Button
        $roundRight={true}
        onClick={onPlusClick}
        disabled={value === 99}
        aria-label="Increase quantity"
      >
        <Plus size={15} />
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
