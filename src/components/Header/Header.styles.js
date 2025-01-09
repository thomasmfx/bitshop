import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const Header = styled.header`
  position: fixed;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-items: center;
  align-items: center;
  padding: 0.8em;
  gap: 1em;
  background-color: white;
  z-index: 2;
  transition: all 0.5s ease-in-out;
`

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, min-content);
  gap: 1em;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  padding: 0.4em 0.8em;
  gap: 0.5em;

  background: ${(props) =>
    props.selected ? ({ theme }) => theme.colors.brandLight : 'none'};
  color: ${(props) =>
    props.selected
      ? ({ theme }) => theme.colors.brandPrimary
      : ({ theme }) => theme.colors.default};
  border: none;
  border-radius: 5px;
  font-family: Montserrat;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.brandPrimary};
  }

  @media (max-width: ${({ theme }) => theme.device.tabletL}) {
    border-radius: 50%;
    padding: 0.7em;
    width: 46.5px;
    position: relative;

    > p {
      display: none;
    }
  }
`

export const RoundButton = styled(Button)`
  border-radius: 50%;
  padding: 0.7em;
  width: 46.5px;
  position: relative;
`

export const ItemsCount = styled.div`
  width: 16.5px;
  height: 16.5px;
  position: absolute;
  top: 6px;
  right: 6px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.brandPrimary};
  border-radius: 50%;
  color: white;
  font-size: 10px;
  font-weight: bold;
  transform: translate(-7%, 10%);
`

export const Link = styled(RouterLink)`
  text-decoration: none;
`

export const Text = styled.p``
