import styled from 'styled-components'

export const QuantityControl = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.size === 'L' ? '40px 70px 40px' : '28px 36px 28px'};
  grid-template-rows: ${(props) => (props.size === 'L' ? '45px' : '32px')};
  max-width: fit-content;

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
