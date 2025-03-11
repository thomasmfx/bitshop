import styled from 'styled-components'
import ButtonPrimary from '../../components/Button/Button'
import { Link as RouterLink } from 'react-router-dom'
import { textColor } from '../../components/shared/mixins'

export const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6em;

  @media (max-width: 1290px) {
    gap: 1em;
  }

  @media (max-width: ${({ theme }) => theme.device.mobileXXL}) {
    padding-left: 1em;
    padding-right: 1em;
  }
`

export const Image = styled.img`
  max-width: 500px;
`

export const Text = styled.span`
  min-width: 20ch;
`

export const Link = styled(RouterLink)`
  text-decoration: none;
`

export const Button = styled(ButtonPrimary)`
  background: none;
  ${textColor('brandPrimary')};
  padding: 1em 1.5em;
  width: min-content;
  font-size: 2rem;

  &:hover {
    background: none;
    ${textColor('brandSecondary')};
  }
`
