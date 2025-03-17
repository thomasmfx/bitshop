import PropTypes from 'prop-types'
import { Minus, Plus } from 'react-feather'
import * as S from './QuantityControl.styles'

function QuantityControl({
  onDecreaseQuantity,
  onIncreaseQuantity,
  onInputQuantityChange,
  value,
  minValue = '',
  maxValue = 99,
  size,
}) {
  return (
    <S.QuantityControl size={size}>
      <S.Button
        onClick={onDecreaseQuantity}
        disabled={value === minValue}
        aria-label="Decrease quantity"
      >
        <Minus size={15} />
      </S.Button>
      <S.Input
        aria-label="Product quantity"
        data-testid="product-quantity-input"
        type="number"
        disabled={!onInputQuantityChange}
        onChange={onInputQuantityChange}
        value={value}
        onClick={(e) => e.preventDefault()}
        size={size}
      />
      <S.Button
        $roundRight={true}
        onClick={onIncreaseQuantity}
        disabled={value === maxValue}
        aria-label="Increase quantity"
      >
        <Plus size={15} />
      </S.Button>
    </S.QuantityControl>
  )
}

QuantityControl.propTypes = {
  onDecreaseQuantity: PropTypes.func,
  onIncreaseQuantity: PropTypes.func,
  onInputQuantityChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  minValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.string,
}

export default QuantityControl
