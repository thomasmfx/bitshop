import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5em;
  padding: 6em;

  @media (max-width: ${({ theme }) => theme.device.mobileXXL}) {
    padding-left: 1em;
    padding-right: 1em;
  }
`

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const FlexCol = styled(FlexRow)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`

export const P = styled.p`
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
`

export const H1 = styled.h1``
export const H2 = styled.h2``
export const H3 = styled.h3``
export const H4 = styled.h4``
export const H5 = styled.h5``
export const H6 = styled.h6``

export const RouterLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

export const Span = styled.span`
  display: block;
  font-weight: inherit;
  color: inherit;
`