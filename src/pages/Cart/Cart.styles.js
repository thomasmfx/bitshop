import styled from 'styled-components'

export const StyledCart = styled.main`
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

export const SectionHeading = styled.h2`
  font-size: 1.4rem;
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2em;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
`

export const Product = styled.div`
  display: flex;
  gap: 0.5em;
  border: 1px solid lightgray;
  padding: 1em;
  border-radius: 10px;
`

export const ProductColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 100%;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`

export const ProductRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1em;
`

export const ProductImage = styled.img`
  width: 124px;
`

export const Text = styled.p``

export const ProductPrice = styled.p`
  &::before {
    content: '$ ';
  }
`

export const RemoveProductButton = styled.button`
  min-width: 20px;
  align-self: start;
  cursor: pointer;
  margin-left: 1em;
  background: none;
  border: none;
  opacity: 0.7;
`

export const PriceBreakdown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Price = styled.p`
  &::before {
    content: '$ ';
  }
`

export const TextLight = styled(Text)`
  color: #4b5563;
`

export const TotalPrice = styled(PriceWrapper)`
  font-size: 1.2rem;
  font-weight: bold;
`

export const Divider = styled.div`
  width: 100%;
  height: 1.5px;
  background-color: #e5e7eb;
`

export const DiscountCouponWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-template-rows: 1fr 1fr;
  column-gap: 0.5em;

  & > :first-child {
    grid-column: 1 / -1;
  }
`

export const CouponInput = styled.input`
  border: 2px solid #e5e7eb;
  border-radius: 5px;
  height: 40px;
  padding: 0 0.8em;

  &::placeholder {
    color: #9ca3af;
  }
`

export const PaymentMethodsWrapper = styled(DiscountCouponWrapper)`
  gap: 1em;
`

export const WrapperFlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`
