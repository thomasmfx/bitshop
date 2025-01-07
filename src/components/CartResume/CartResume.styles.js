import styled from "styled-components"

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
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

export const Text = styled.p``

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