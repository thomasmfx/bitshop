import styled from 'styled-components'
import { useOutletContext } from 'react-router-dom'
import { X, ArrowRight, CreditCard } from 'react-feather'
import QuantityControl from '../../components/QuantityControl/QuantityControl'
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary'

const StyledCart = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  gap: 5em;
  padding: 6em;
  padding-bottom: 10em;
  padding-top: 10em;
  width: 70%;
  justify-self: center;
`

const SectionHeading = styled.h2`
  font-size: 1.4rem;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2em;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
`

const Product = styled.div`
  display: flex;
  gap: 0.5em;
  border: 1px solid lightgray;
  padding: 1em;
  border-radius: 10px;
`

const ProductColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 100%;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`

const ProductRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1em;
`

const ProductImage = styled.img`
  width: 124px;
`

const Text = styled.p``

const ProductPrice = styled.p`
  &::before {
    content: '$ ';
  }
`

const RemoveProductButton = styled.button`
  min-width: 20px;
  align-self: start;
  cursor: pointer;
  margin-left: 1em;

  background: none;
  border: none;
  opacity: 0.7;
`

const PriceBreakdown = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5em;
`

const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Price = styled.p`
  &::before {
    content: '$ ';
  }
`

const TextLight = styled(Text)`
  color: #4B5563;
`

const TotalPrice = styled(PriceWrapper)`
  font-size: 1.2rem;
  font-weight: bold;
`

const Divider = styled.div`
  width: 100%;
  height: 1.5px;
  background-color: #E5E7EB;
`

const DiscountCouponWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-template-rows: 1fr 1fr;
  column-gap: .5em;

  & > :first-child {
    grid-column: 1 / -1;
  }
`

const CouponInput = styled.input`
  border: 2px solid #E5E7EB;
  border-radius: 5px;
  height: 40px;
  padding: 0 .8em;

  &::placeholder {
    color: #9CA3AF;
  }
`

const PaymentMethodsWrapper = styled(DiscountCouponWrapper)`
  gap: 1em;
`

const WrapperFlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: .5em;
`

export default function Cart() {
  const { items, addItem, decreaseQuantity, removeItem } = useOutletContext()

  function calculateSubtotal() {
    return items.reduce((count, item) => count + (item.price * item.quantity), 0)
  }

  const subtotal = calculateSubtotal();
  const shipping = 19.99;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <>
      <StyledCart>
        <Section>
          <SectionHeading>Cart</SectionHeading>
          <Column>
            {items.map((product) => (
              <Product key={product.id}>
                <ProductImage src={product.images[0]} />
                <ProductColumn>
                  <ProductRow>
                    <Text>{product.title}</Text>
                    <RemoveProductButton onClick={() => removeItem(product)}>
                      <X size={15} color="#A5AAB5" />
                    </RemoveProductButton>
                  </ProductRow>
                  <ProductRow>
                    <QuantityControl
                      value={product.quantity}
                      onMinusClick={() => product.quantity === 1 ? removeItem(product) : decreaseQuantity(product, 1)}
                      onPlusClick={() => addItem(product, 1)}
                    />
                    <ProductPrice>
                      {product.price}
                    </ProductPrice>
                  </ProductRow>
                </ProductColumn>
              </Product>
            ))}
          </Column>
        </Section>
        <Section>
          <SectionHeading>Resume</SectionHeading>
          <Column>
            <PriceBreakdown>
              <PriceWrapper>
                <TextLight>Subtotal</TextLight>
                <Price>{subtotal.toFixed(2)}</Price>
              </PriceWrapper>
              <PriceWrapper >
                <TextLight>Shipping</TextLight>
                <Price>{shipping.toFixed(2)}</Price>
              </PriceWrapper>
              <PriceWrapper>
                <TextLight>Tax</TextLight>
                <Price>{tax.toFixed(2)}</Price>
              </PriceWrapper>
              <Divider/>
              <TotalPrice>
                <Text>Total</Text>
                <Price>{total.toFixed(2)}</Price>
              </TotalPrice>
            </PriceBreakdown>
            <DiscountCouponWrapper>
              <Text>Discount Coupon</Text>
              <CouponInput placeholder='Enter coupon code'/>
              <ButtonPrimary>
                Apply
              </ButtonPrimary>
            </DiscountCouponWrapper>
            <PaymentMethodsWrapper>
              <Text>Payment methods</Text>
              <WrapperFlexRow>
                <CreditCard size={24} color='#9CA3AF'/>
                <TextLight>All major credit cards accepted</TextLight>
              </WrapperFlexRow>
            </PaymentMethodsWrapper>
            <ButtonPrimary size={'l'}>
              <Text>Checkout</Text>
              <ArrowRight />
            </ButtonPrimary>
          </Column>
        </Section>
      </StyledCart>
    </>
  )
}
