import styled from 'styled-components'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

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
  min-width: 0;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.brandPrimary};
    outline-offset: -2px;
  }
`

export const CouponDiscount = styled(Text)`
  &::after {
    content: '%';
  }
`

export const ApplyCouponButton = styled(Button)`
  max-width: min-content;
`

export const ValidCoupon = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-size: 0.8rem;
  color: green;
`
export const InvalidCoupon = styled(ValidCoupon)`
  color: #ef233c;
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

export const StyledLink = styled(Link)`
  text-decoration: none;
`