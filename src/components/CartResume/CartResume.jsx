import PropTypes from 'prop-types'
import { useState } from 'react'
import { CreditCard, X, Check } from 'react-feather'
import circleCheck from '../../assets/circle-check.svg'
import Button from '../Button/Button'
import * as S from './CartResume.styles'

function CartResume({ subtotal, shipping, tax, total }) {
  const [coupon, setCoupon] = useState('')
  const [couponDiscount, setCouponDiscount] = useState(0)
  const [isCouponTried, setIsCouponTried] = useState(false) // Prevent "invalid coupon" feedback before user tries to enter a coupon
  const [isCouponValid, setIsCouponValid] = useState(false)

  function handleCouponSubmit() {
    setIsCouponTried(true)

    if (coupon.toLocaleUpperCase() === '15OFF') {
      setCouponDiscount(15)
      setIsCouponValid(true)
    } else {
      setCouponDiscount(0)
      setIsCouponValid(false)
    }
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
          <S.CouponDiscount>{couponDiscount}</S.CouponDiscount>
        </S.PriceWrapper>
        <S.Divider />
        <S.TotalPrice>
          <S.Text>Total</S.Text>
          <S.Price>
            {(total - (total * couponDiscount) / 100).toFixed(2)}
          </S.Price>
        </S.TotalPrice>
      </S.PriceBreakdown>
      <S.SectionBlock>
        <S.Text>Discount Coupon</S.Text>
        <S.DiscountCouponWrapper>
          <S.CouponInput
            placeholder="Enter coupon code"
            name="coupon"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleCouponSubmit()
            }}
          />
          <S.ApplyCouponButton onClick={handleCouponSubmit}>
            Apply
          </S.ApplyCouponButton>
        </S.DiscountCouponWrapper>
        {isCouponTried ? (
          isCouponValid ? (
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
      <Button size={'l'}>
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
