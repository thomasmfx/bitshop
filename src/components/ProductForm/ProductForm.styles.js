import styled, { css } from 'styled-components';
import Button from '../Button/Button';
import { Span } from '../shared/elements';

export const mediaStyledForm = css`
  @media (max-width: ${({ theme }) => theme.device.laptop}) and (min-width: ${({
      theme,
    }) => theme.device.mobileL}) {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  @media (max-width: ${({ theme }) => theme.device.mobileL}) {
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    width: 100%;
    justify-content: space-between;
  }

  @media (max-width: ${({ theme }) => theme.device.mobileM}) {
    display: flex;
  }
`;

export const mediaStyledButton = css`
  @media (max-width: ${({ theme }) => theme.device.mobileM}) {
    width: 120px;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: ${(props) =>
    props.size === 'L' ? 'min-content min-content' : '1fr 1fr'};
  grid-template-rows: 1fr;
  gap: ${(props) => (props.size === 'L' ? '3em' : '2em')};
  ${(props) => props.size && mediaStyledForm};
`;

export const StyledButton = styled(Button)`
  width: ${(props) => (props.size === 'L' ? '150px' : '100%')};
  height: ${(props) => (props.size === 'L' ? '45px' : '')};
  align-items: center;
  ${(props) => props.size && mediaStyledButton};
`;

export const StyledSpan = styled(Span)`
  height: ${(props) => (props.size === 'L' ? '' : '22px')};
  font-size: ${(props) => (props.size === 'L' ? '1rem' : '')};
`;
