import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  align-self: start;
`

export const Input = styled.input`
  border: none;
  outline: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding-left: 0.3em;
  padding-right: 0.3em;
  height: 35px;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.brandPrimary};
    outline-offset: -2px;
  }
`

export const Button = styled.button`
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${({ theme }) => theme.colors.brandPrimary};
  color: white;
  width: 80px;
  height: 35px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s eas-in-out;

  &:active {
    filter: brightness(110%);
  }
`
