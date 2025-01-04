import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'

export const Main = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5em;
  padding: 6em;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 500px;
`

export const Image = styled.img`
  width: 500px;
`

export const Heading = styled.h1`
  font-size: 3rem;
  padding-bottom: 1em;
  color: ${({ theme }) => theme.colors.default};
`

export const Text = styled.p``

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
`
