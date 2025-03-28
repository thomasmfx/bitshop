import styled, { css } from 'styled-components';
import { color, textColor } from '../shared/mixins';

const mediaQuantityControl = css`
  @media (max-width: ${({ theme }) => theme.device.mobileM}) {
    grid-template-columns: 35px 50px 35px;
    grid-template-rows: 45px;
  }

  @media (max-width: ${({ theme }) => theme.device.mobileM}) {
    grid-template-columns: 35px 50px 35px;
    grid-template-rows: 45px;
  }
`;

export const QuantityControl = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.size === 'L' ? '40px 70px 40px' : '28px 36px 28px'};
  grid-template-rows: ${(props) => (props.size === 'L' ? '45px' : '32px')};
  max-width: fit-content;
  ${(props) => props.size && mediaQuantityControl};
`;

export const Input = styled.input`
  border: none;
  border-top: 1px solid ${color('neutralLight')};
  border-bottom: 1px solid ${color('neutralLight')};
  outline: none;
  text-align: center;
  font-size: ${(props) => (props.size === 'L' ? '1rem' : '.8rem')};
  grid-column: 2 / 3;

  &:disabled {
    cursor: not-allowed;
    background-color: inherit;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: 1px solid ${color('neutralLight')};
  border-radius: ${(props) =>
    props.$roundRight ? '0 5px 5px 0' : '5px 0 0 5px'};
  padding: 0.1em 0.3em;
  cursor: pointer;

  svg {
    opacity: 0.6 !important; // override opacity when button is disabled
  }

  &:disabled {
    cursor: not-allowed;

    svg {
      ${textColor('default')};
    }
  }
`;
