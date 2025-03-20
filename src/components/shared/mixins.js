import { css, keyframes } from 'styled-components';

export const textColor = (value) => css`
  color: ${({ theme }) => theme.colors[value]};
`;

export const bgColor = (value) => css`
  background-color: ${({ theme }) => theme.colors[value]};
`;

export const color = (value) => css`
  ${({ theme }) => theme.colors[value]}
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
