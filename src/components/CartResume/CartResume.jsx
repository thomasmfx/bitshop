import { CreditCard, ArrowRight } from 'react-feather'
import Button from '../Button/Button'
import * as S from './CartResume.styles'

function CartResume({subtotal, shipping, tax, total}) {
 return (
  <S.Column>
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
    <S.DiscountCouponWrapper>
      <S.Text>Discount Coupon</S.Text>
      <S.CouponInput placeholder="Enter coupon code" />
      <Button>Apply</Button>
    </S.DiscountCouponWrapper>
    <S.PaymentMethodsWrapper>
      <S.Text>Payment methods</S.Text>
      <S.WrapperFlexRow>
        <CreditCard size={24} color="#9CA3AF" />
        <S.TextLight>All major credit cards accepted</S.TextLight>
      </S.WrapperFlexRow>
    </S.PaymentMethodsWrapper>
    <Button size={'l'}>
      <S.Text>Checkout</S.Text>
      <ArrowRight />
    </Button>
  </S.Column>
 )
}

export default CartResume