import styled from 'styled-components'

export const ProductsContainer = styled.div`
  grid-column: 2 / 3;
  display: grid;
  grid-template-columns: repeat(3, min-content);
  justify-content: center;
  gap: 5em;

  @media (max-width: 1150px) {
    grid-template-columns: repeat(2, min-content);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, min-content);
  }
`
