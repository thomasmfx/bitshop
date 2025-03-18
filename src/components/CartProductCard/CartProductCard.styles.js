import styled from 'styled-components';

export const Product = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr 20px;
  grid-template-rows: 1fr 1fr;
  gap: 0.5em;
  border: 1px solid lightgray;
  padding: 1em;
  border-radius: 10px;
  position: relative;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.device.laptop}) {
    min-width: 367.906px;
  }

  @media (max-width: ${({ theme }) => theme.device.mobileXXL}) {
    grid-template-rows: min-content min-content min-content;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-self: ${(props) => props.alignSelf};
  align-items: ${(props) => props.alignItems};
  justify-content: space-between;
  grid-row: -2 / -1;
  grid-column: 2 / -1;

  @media (min-width: ${({ theme }) => theme.device.tablet}) and (max-width: ${({
      theme,
    }) => theme.device.laptop}) {
    justify-content: start;
    gap: 2em;
  }

  @media (max-width: ${({ theme }) => theme.device.mobileXL}) {
    margin-top: 2em;
    grid-row: 3 / -1;
    grid-column: 1 / -1;
  }
`;

export const ProductImage = styled.img`
  min-width: 124px;
  display: flex;
  justify-self: center;
  grid-row: 1 / -1;
  grid-column: 1 / 2;

  @media (max-width: ${({ theme }) => theme.device.mobileXL}) {
    max-width: 200px;
    grid-row: 1 / 2;
    grid-column: 1 / -1;
  }
`;

export const ProductPrice = styled.p`
  height: 20px;

  &::before {
    content: '$ ';
  }
`;

export const RemoveProductButton = styled.button`
  position: absolute;
  top: 10px;
  right: 5px;
  min-width: 20px;
  align-self: start;
  cursor: pointer;
  margin-left: 1em;
  background: none;
  border: none;
  opacity: 0.7;
`;

export const ProductName = styled.p`
  grid-row: 1 / 2;
  grid-column: 2 / 3;

  @media (max-width: ${({ theme }) => theme.device.mobileXL}) {
    grid-row: 2 / 3;
    grid-column: 1 / -1;
  }
`;
