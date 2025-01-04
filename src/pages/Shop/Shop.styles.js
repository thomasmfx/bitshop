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
`

export const ProductsContainer = styled.div`
  grid-column: 2 / 3;
  display: grid;
  grid-template-columns: repeat(3, min-content);
  justify-content: center;
  gap: 5em;
`
