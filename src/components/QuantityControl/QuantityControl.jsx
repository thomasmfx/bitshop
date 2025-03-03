import PropTypes from 'prop-types'
import { Minus, Plus } from 'react-feather'
import * as S from './QuantityControl.styles'

function QuantityControl({
  onMinusClick,
  onPlusClick,
  onChange,
  value,
  minusDisabledValue = '',
  plusDisabledValue = 99,
  size
}) {
  return (
    <S.QuantityControl size={size}>
      <S.Button
        onClick={onMinusClick}
        disabled={value === minusDisabledValue}
        aria-label="Decrease quantity"
      >
        <Minus size={15} />
      </S.Button>
      <S.Input
        name="quantity"
        type="number"
        disabled={!onChange}
        onChange={onChange}
        value={value}
      />
      <S.Button
        $roundRight={true}
        onClick={onPlusClick}
        disabled={value === plusDisabledValue}
        aria-label="Increase quantity"
      >
        <Plus size={15} />
      </S.Button>
    </S.QuantityControl>
  )
}

QuantityControl.propTypes = {
  onMinusClick: PropTypes.func,
  onPlusClick: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minusDisabledValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  plusDisabledValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default QuantityControl
