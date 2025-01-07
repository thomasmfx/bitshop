import styled from "styled-components"

export const Product = styled.div`
  display: flex;
  gap: 0.5em;
  border: 1px solid lightgray;
  padding: 1em;
  border-radius: 10px;
`

export const ProductColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 100%;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`

export const ProductRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
`

export const ProductImage = styled.img`
  width: 124px;
`

export const Text = styled.p``

export const ProductPrice = styled.p`
  height: 20px;

  &::before {
    content: '$ ';
  }
`

export const RemoveProductButton = styled.button`
  min-width: 20px;
  align-self: start;
  cursor: pointer;
  margin-left: 1em;
  background: none;
  border: none;
  opacity: 0.7;
`