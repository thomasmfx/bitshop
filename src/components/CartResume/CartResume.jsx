import PropTypes from 'prop-types'
import { useState, useRef } from 'react'
import { CreditCard, X, Check } from 'react-feather'
import circleCheck from '../../assets/circle-check.svg'
import Button from '../Button/Button'
import { useOutletContext } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import * as S from './CartResume.styles'

const initialCouponState = {
  code: '',
  discount: 0,
  wasTried: false, // Prevent "invalid coupon" feedback before user tries to enter a coupon
  isValid: false
}

function CartResume({ subtotal, shipping, tax, total }) {
  const [couponState, setCouponState] = useState(initialCouponState);
  const { clearCart, items, notificateEmptyCart } = useOutletContext()
  const input = useRef(null)
  let navigate = useNavigate()

  function updateCouponState(property, newValue) {
    setCouponState(prevState => ({ ...prevState, [property]: newValue }))
  }

  function handleCouponSubmit() {
    input.current.blur()
    const couponCode = couponState.code.toLocaleUpperCase()
    updateCouponState('wasTried', true)

    switch (couponCode) {
      case 'VAICORINTHIANS':
        updateCouponState('discount', 50)
        updateCouponState('isValid', true)
        break
      case '15OFF':
        updateCouponState('discount', 15)
        updateCouponState('isValid', true)
        break
      case '10OFF':
        updateCouponState('discount', 10)
        updateCouponState('isValid', true)
        break
      case '5OFF':
        updateCouponState('discount', 5)
        updateCouponState('isValid', true)
        break
      default:
        updateCouponState('discount', 0)
        updateCouponState('isValid', false)
    }
  }

  function handleCheckout() {
    if (!items.length) {
      notificateEmptyCart()
      return
    }

    navigate('/checkout')
    // A little delay to not show the items getting cleared during the transition to checkout
    setTimeout(() => {
      clearCart()
    }, 100)
  }

  return (
    <S.CartResumeContainer>
      <S.PriceBreakdown>
        <S.PriceWrapper>
          <S.TextLight>Subtotal</S.TextLight>
          <S.Price>{subtotal.toFixed(2)}</S.Price>
        </S.PriceWrapper>
        <S.PriceWrapper>
          <S.TextLight>Shipping</S.TextLight>
          <S.Price>{shipping.toFixed(2)}</S.Price>
        </S.PriceWrapper>
        <S.PriceWrapper>
          <S.TextLight>Tax</S.TextLight>
          <S.Price>{tax.toFixed(2)}</S.Price>
        </S.PriceWrapper>
        <S.PriceWrapper>
          <S.TextLight>Discount</S.TextLight>
          <S.CouponDiscount>{couponState.discount}</S.CouponDiscount>
        </S.PriceWrapper>
        <S.Divider />
        <S.TotalPrice>
          <S.Text>Total</S.Text>
          <S.Price>
            {(total - (total * couponState.discount) / 100).toFixed(2)}
          </S.Price>
        </S.TotalPrice>
      </S.PriceBreakdown>
      <S.SectionBlock>
        <S.Text>Discount Coupon</S.Text>
        <S.DiscountCouponWrapper>
          <S.CouponInput
            ref={input}
            placeholder="Enter coupon code"
            name="coupon"
            value={couponState.code}
            onChange={(e) => updateCouponState('code', e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleCouponSubmit()
            }}
          />
          <S.ApplyCouponButton onClick={handleCouponSubmit}>
            Apply
          </S.ApplyCouponButton>
        </S.DiscountCouponWrapper>
        {couponState.wasTried ? (
          couponState.isValid ? (
            <S.ValidCoupon>
              Coupon applied succesfully
              <Check size={18} />
            </S.ValidCoupon>
          ) : (
            <S.InvalidCoupon>
              Invalid coupon
              <X size={18} />
            </S.InvalidCoupon>
          )
        ) : null}
      </S.SectionBlock>
      <S.SectionBlock>
        <S.Text>Payment methods</S.Text>
        <S.PaymentMethods>
          <CreditCard size={24} color="#9CA3AF" />
          <S.TextLight>All major credit cards accepted</S.TextLight>
        </S.PaymentMethods>
      </S.SectionBlock>
      <Button size={'l'} onClick={handleCheckout}>
        <S.Text>Checkout</S.Text>
        <S.Icon src={circleCheck} />
      </Button>
    </S.CartResumeContainer>
  )
}

CartResume.propTypes = {
  subtotal: PropTypes.number,
  shipping: PropTypes.number,
  tax: PropTypes.number,
  total: PropTypes.number,
}

export default CartResume