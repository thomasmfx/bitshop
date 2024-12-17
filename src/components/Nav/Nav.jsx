import styled, { css } from 'styled-components'
import PropTypes from 'prop-types';
import { Home, ShoppingBag, ShoppingCart } from 'react-feather';

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  gap: 1em;
  flex: 1;
`;

const Button = styled.button`
  background: ${props => props.selected ? '#dff0ff' : 'none'};
  color: ${props => props.selected ? '#188efe' : 'black'};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5em;
  font-family: Montserrat;
  cursor: pointer;
  font-weight: 500;
  padding: .4em .8em;
  font-weight: 500;
  border-radius: 5px;

  &:hover {
    color: #188efe;
  }
`;

function Nav({currentRoute = 'home'}) {
  return (
    <StyledNav>
      <Button selected={currentRoute === 'home'}>
        <Home size={21}/>
        <p>Home</p>
      </Button>
      <Button selected={currentRoute === 'products'}>
        <ShoppingBag size={21}/>
        <p>Products</p>
      </Button>
      <Button selected={currentRoute === 'cart'}>
        <ShoppingCart size={21}/>
        <p>Cart</p>
      </Button>
    </StyledNav>
  ) 
}

Nav.propTypes = {
  currentRoute: PropTypes.string
}

export default Nav;