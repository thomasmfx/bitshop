import styled from 'styled-components';
import { P } from '../shared/elements';
import { fadeIn } from '../shared/mixins';

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
  animation: 0.3s ${fadeIn} ease-out forwards;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.01);
      box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 50px 0px;
    }
  }
`;

export const ProductImageContainer = styled.div`
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  height: 180px;
`;

export const ProductInfo = styled.div`
  display: grid;
  grid-template-rows: 1fr min-content min-content;
  padding: 1em;
  gap: 1.5em;
`;

export const ProductTitle = styled(P)``;

export const ProductPrice = styled.p`
  &::before {
    content: '$';
  }
`;

export const ProductRating = styled.div`
  display: flex;
  align-items: center;
`;

export const RowWrapper = styled.div`
  align-self: end;
  display: flex;
  justify-content: space-between;
`;
