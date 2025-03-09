import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Main = styled.main``

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
  color: ${({theme}) => theme.colors.default};
  font-size: 1rem;
  font-family: Inter;
  font-weight: 400;
`

export const H1 = styled.h1``
export const H2 = styled.h2``
export const H3 = styled.h3``
export const H4 = styled.h4``
export const H5 = styled.h5``
export const H6 = styled.h6``

export const RouterLink = styled(Link)`
  text-decoration: none;
`
