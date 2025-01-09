import styled from 'styled-components'
import ButtonPrimary from '../../components/Button/Button'
import { Link as RouterLink } from 'react-router-dom'

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

  @media (max-width: ${({ theme }) => theme.device.laptop}) {
    width: 80%;
    padding-left: 0;
    padding-right: 0;
    grid-template-rows: min-content min-content;
  }

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    padding-top: 8em;
    padding-bottom: 8em;
  }

  @media (max-width: ${({ theme }) => theme.device.mobileM}) {
    width: 90%;
  }
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2em;
`

export const SectionCart = styled(Section)`
  @media (max-width: ${({ theme }) => theme.device.laptop}) {
    grid-row: 1 / 2;
    grid-column: 1 / -1;
  }
`

export const SectionResume = styled(Section)`
  @media (max-width: ${({ theme }) => theme.device.laptop}) {
    grid-row: 2 / -1;
    grid-column: 1 / -1;
  }
`

export const SectionHeading = styled.h2`
  font-size: 1.4rem;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
`

export const EmptyCartDisclaimer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
`

export const Text = styled.p``

export const TextLight = styled(Text)`
  color: #4b5563;
`

export const Link = styled(RouterLink)`
  text-decoration: none;
`

export const Button = styled(ButtonPrimary)`
  background: none;
  color: ${({ theme }) => theme.colors.brandPrimary};

  &:hover {
    background: none;
  }
`
