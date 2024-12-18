import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Home, ShoppingBag, ShoppingCart, User } from 'react-feather'

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
  background: ${(props) => (props.selected ? '#dff0ff' : 'none')};
  color: ${(props) => (props.selected ? '#188efe' : 'black')};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  font-family: Montserrat;
  cursor: pointer;
  font-weight: 500;
  padding: 0.4em 0.8em;
  font-weight: 500;
  border-radius: 5px;
  width: 140px;

  &:hover {
    color: #188efe;
  }
`

const CartButton = styled(Button)`
  border-radius: 50%;
  padding: 0.7em;
  width: 46.5px;
`

const Logo = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  color: #188efe;
`

function Nav({ currentRoute = '/' }) {
  return (
    <StyledNav>
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <Logo> bitShop •</Logo>
      </Link>
      <Wrapper>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <Button selected={currentRoute === '/'}>
            <Home size={21} />
            <p>Home</p>
          </Button>
        </Link>
        <Link to={'/about-us'} style={{ textDecoration: 'none' }}>
          <Button selected={currentRoute === 'about-us'}>
            <User size={21} />
            <p>About Us</p>
          </Button>
        </Link>
        <Link to={'/shop'} style={{ textDecoration: 'none' }}>
          <Button selected={currentRoute === 'shop'}>
            <ShoppingBag size={21} />
            <p>Shop</p>
          </Button>
        </Link>
      </Wrapper>
      <Link to={'/cart'} style={{ textDecoration: 'none' }}>
        <CartButton selected={currentRoute === 'cart'}>
          <ShoppingCart size={21} />
        </CartButton>
      </Link>
    </StyledNav>
  )
}

Nav.propTypes = {
  currentRoute: PropTypes.string,
}

export default Nav
