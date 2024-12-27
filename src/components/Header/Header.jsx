import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Home, ShoppingBag, ShoppingCart, User } from 'react-feather'
import Logo from '../Logo/Logo'

const iconSize = 21

const StyledLink = styled(Link)`
  text-decoration: none;
`

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-items: center;
  align-items: center;
  padding: 1em;
  gap: 1em;
  background-color: white;
  z-index: 1;
`

const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, min-content);
  gap: 1em;
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  padding: 0.4em 0.8em;
  gap: 0.5em;

  background: ${(props) =>
    props.selected ? 'var(--color-secondary)' : 'none'};
  color: ${(props) => (props.selected ? 'var(--color-primary)' : 'black')};
  border: none;
  border-radius: 5px;
  font-family: Montserrat;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: ${'var(--color-primary)'};
  }
`

const StyledCartButton = styled(Button)`
  border-radius: 50%;
  padding: 0.7em;
  width: 46.5px;
  position: relative;
`

const ItemsCount = styled.div`
  width: 16.5px;
  height: 16.5px;
  position: absolute;
  top: 13%;
  right: 13%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${'var(--color-primary)'};
  border-radius: 50%;
  color: white;
  font-size: 10px;
  font-weight: bold;
  transform: translate(-7%, 10%);
`

function CartButton({ itemsCount, selected }) {
  return (
    <StyledCartButton selected={selected}>
      <ShoppingCart
        size={iconSize}
        style={{ transform: 'translate(-7%, 10%)' }}
      />
      <ItemsCount>
        <p>{itemsCount}</p>
      </ItemsCount>
    </StyledCartButton>
  )
}

function Header({ currentRoute = '/', cartProductsCount }) {
  return (
    <StyledHeader>
      <StyledLink to={'/'}>
        <Logo size={'1.8rem'} />
      </StyledLink>
      <Nav>
        <StyledLink to={'/'}>
          <Button selected={currentRoute === '/'}>
            <Home size={iconSize} />
            <p>Home</p>
          </Button>
        </StyledLink>
        <StyledLink to={'/about-us'}>
          <Button selected={currentRoute === '/about-us'}>
            <User size={iconSize} />
            <p>About Us</p>
          </Button>
        </StyledLink>
        <StyledLink to={'/shop'}>
          <Button selected={currentRoute === '/shop'}>
            <ShoppingBag size={iconSize} />
            <p>Shop</p>
          </Button>
        </StyledLink>
      </Nav>
      <Link to={'/cart'}>
        <CartButton
          itemsCount={cartProductsCount < 10 ? cartProductsCount : '9+'}
          selected={currentRoute === '/cart'}
        />
      </Link>
    </StyledHeader>
  )
}

CartButton.propTypes = {
  itemsCount: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string, // only for 9+ items
  ]),
  selected: PropTypes.bool,
}

Header.propTypes = {
  currentRoute: PropTypes.string,
  cartProductsCount: PropTypes.number,
}

export default Header
