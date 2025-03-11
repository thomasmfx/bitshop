import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const P = styled.p`
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
`

export const RouterLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

export const Span = styled.span`
  display: block;
  font-weight: inherit;
  color: inherit;
`
