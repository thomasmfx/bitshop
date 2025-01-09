import styled from 'styled-components'
import Button from '../Button/Button'

export const CartResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
`

export const Column = styled(CartResumeContainer)``

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
  font-weight: 600;
`

export const Divider = styled.div`
  width: 100%;
  height: 1.5px;
  background-color: #e5e7eb;
`

export const SectionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`

export const DiscountCouponWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  gap: 1em;
  width: 100%;
`

export const CouponInput = styled.input`
  border: 2px solid #e5e7eb;
  border-radius: 5px;
  height: 40px;
  padding: 0 0.8em;

  &::placeholder {
    color: #9ca3af;
  }

  @media (max-width: ${({ theme }) => theme.device.mobileM}) {
    &::placeholder {
      color: white;
    }
  }

  @media (max-width: 530px) {
    min-width: 0;
  }
`

export const ApplyCouponButton = styled(Button)`
  max-width: min-content;
`

export const PaymentMethods = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`

export const WrapperFlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`

export const Icon = styled.img`
  width: 22px;
`