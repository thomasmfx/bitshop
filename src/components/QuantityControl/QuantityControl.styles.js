import styled from 'styled-components'

export const QuantityControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;

  @media (min-width: ${({ theme }) =>
      theme.device.mobileL}) and (max-width: ${({ theme }) =>
      theme.device.mobileXL}) {
    height: 28px;
  }
`

export const Input = styled.input`
  border: none;
  border-top: 1px solid #ced4da;
  border-bottom: 1px solid #ced4da;
  width: 36px;
  height: 100%;
  outline: none;
  text-align: center;
  font-size: 0.8rem;

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

  @media (min-width: ${({ theme }) =>
      theme.device.mobileL}) and (max-width: ${({ theme }) =>
      theme.device.mobileXL}) {
    width: 28px;
  }
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: 1px solid #ced4da;
  min-width: 28px;
  height: 100%;
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
      color: ${({ theme }) => theme.colors.default};
    }
  }
`
