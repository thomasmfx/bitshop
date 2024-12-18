import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Home, ShoppingBag, ShoppingCart, User } from 'react-feather'

const iconSize = 21

const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-items: center;
  align-items: center;
  padding: 1em;
  gap: 1em;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`

const Button = styled.button`
  background: ${(props) =>
    props.selected ? 'var(--color-secondary)' : 'none'};
  color: ${(props) => (props.selected ? 'var(--color-primary)' : 'black')};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  font-family: Montserrat;
  cursor: pointer;
  padding: 0.4em 0.8em;
  font-weight: 500;
  border-radius: 5px;
  width: 140px;

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

const Logo = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${'var(--color-primary)'};
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

function Nav({ currentRoute = '/' }) {
  return (
    <StyledNav>
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <Logo> bitShop •</Logo>
      </Link>
      <Wrapper>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <Button selected={currentRoute === '/'}>
            <Home size={iconSize} />
            <p>Home</p>
          </Button>
        </Link>
        <Link to={'/about-us'} style={{ textDecoration: 'none' }}>
          <Button selected={currentRoute === 'about-us'}>
            <User size={iconSize} />
            <p>About Us</p>
          </Button>
        </Link>
        <Link to={'/shop'} style={{ textDecoration: 'none' }}>
          <Button selected={currentRoute === 'shop'}>
            <ShoppingBag size={iconSize} />
            <p>Shop</p>
          </Button>
        </Link>
      </Wrapper>
      <Link to={'/cart'} style={{ textDecoration: 'none' }}>
        <CartButton itemsCount="0" selected={currentRoute === 'cart'} />
      </Link>
    </StyledNav>
  )
}

CartButton.propTypes = {
  itemsCount: PropTypes.string,
  selected: PropTypes.bool,
}

Nav.propTypes = {
  currentRoute: PropTypes.string,
}

export default Nav
