import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ProductContainer = styled.div`
  min-width: 256px;
  height: 435px;
  display: grid;
  grid-template-rows: min-content 1fr;
  position: relative;
  box-shadow: lightgray 0px 5px 15px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.01);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 50px 0px;
  }
`

export const ProductImageContainer = styled.div`
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  height: 180px;
`

export const ProductInfo = styled.div`
  display: grid;
  grid-template-rows: 1fr min-content min-content;
  padding: 1em;
  gap: 1.5em;
`

export const ProductTitle = styled.p``

export const ProductPrice = styled.p`
  &::before {
    content: '$';
  }
`

export const ProductRating = styled.div`
  display: flex;
  align-items: center;
`

export const RowWrapper = styled.div`
  align-self: end;
  display: flex;
  justify-content: space-between;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
