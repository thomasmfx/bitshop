import { useOutletContext } from 'react-router-dom'
import { X, ArrowRight, CreditCard } from 'react-feather'
import QuantityControl from '../../components/QuantityControl/QuantityControl'
import Button from '../../components/Button/Button'
import * as S from './Cart.styles'

export default function Cart() {
  const { items, addItem, decreaseQuantity, removeItem } = useOutletContext()

  function calculateSubtotal() {
    return items.reduce((count, item) => count + item.price * item.quantity, 0)
  }

  const subtotal = calculateSubtotal()
  const shipping = 19.99
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  return (
    <S.StyledCart>
      <S.Section>
        <S.SectionHeading>Cart</S.SectionHeading>
        <S.Column>
          {items.map((product) => (
            <S.Product key={product.id}>
              <S.ProductImage src={product.images[0]} />
              <S.ProductColumn>
                <S.ProductRow>
                  <S.Text>{product.title}</S.Text>
                  <S.RemoveProductButton onClick={() => removeItem(product)}>
                    <X size={15} color="#A5AAB5" />
                  </S.RemoveProductButton>
                </S.ProductRow>
                <S.ProductRow>
                  <QuantityControl
                    value={product.quantity}
                    onMinusClick={() =>
                      product.quantity === 1
                        ? removeItem(product)
                        : decreaseQuantity(product, 1)
                    }
                    onPlusClick={() => addItem(product, 1)}
                  />
                  <S.ProductPrice>{product.price}</S.ProductPrice>
                </S.ProductRow>
              </S.ProductColumn>
            </S.Product>
          ))}
        </S.Column>
      </S.Section>
      <S.Section>
        <S.SectionHeading>Resume</S.SectionHeading>
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
      </S.Section>
    </S.StyledCart>
  )
}
