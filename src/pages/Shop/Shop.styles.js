import styled from 'styled-components'

export const Main = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5em;
  padding: 6em;
  padding-bottom: 10em;
  padding-top: 10em;

  @media (max-width: ${({ theme }) => theme.device.tabletL}) {
    padding-left: 2em;
    padding-right: 2em;
  }

  @media (max-width: ${({ theme }) => theme.device.mobileL}) {
    padding-left: 1em;
    padding-right: 1em;
  }
`
