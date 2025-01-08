import { CreditCard, ArrowRight } from 'react-feather'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import * as S from './CartResume.styles'

function CartResume({ subtotal, shipping, tax, total }) {
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
        <S.Divider />
        <S.TotalPrice>
          <S.Text>Total</S.Text>
          <S.Price>{total.toFixed(2)}</S.Price>
        </S.TotalPrice>
      </S.PriceBreakdown>
      <S.SectionBlock>
        <S.Text>Discount Coupon</S.Text>
        <S.DiscountCouponWrapper>
          <S.CouponInput placeholder="Enter coupon code" />
          <S.ApplyCouponButton>Apply</S.ApplyCouponButton>
        </S.DiscountCouponWrapper>
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
        <ArrowRight />
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
