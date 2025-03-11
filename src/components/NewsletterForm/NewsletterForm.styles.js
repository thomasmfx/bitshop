import styled from 'styled-components'
import { bgColor, color } from '../shared/mixins'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 80px;
`

export const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 5px 0 0 5px;
  padding: 0 0.3em;
  height: 35px;
  width: 100%;

  &:focus {
    outline: 2px solid ${color('brandPrimary')};
    outline-offset: -2px;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0 5px 5px 0;
  ${bgColor('brandPrimary')};
  color: white;
  height: 35px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s eas-in-out;

  &:active {
    filter: brightness(110%);
  }
`
