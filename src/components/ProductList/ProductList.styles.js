import styled from 'styled-components';

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
`;

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
`;
