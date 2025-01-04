import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import { Home, ShoppingBag, ShoppingCart, User } from 'react-feather'
import Logo from '../Logo/Logo'
import * as S from './Header.styles'

const iconSize = 21

function CartButton({ itemsCount, selected }) {
  return (
    <S.CartButton selected={selected}>
      <ShoppingCart
        size={iconSize}
        style={{ transform: 'translate(-7%, 10%)' }}
      />
      <S.ItemsCount>
        <p>{itemsCount}</p>
      </S.ItemsCount>
    </S.CartButton>
  )
}

function Header({ cartProductsCount }) {
  const currentRoute = useLocation().pathname

  return (
    <S.Header>
      <S.Link to={'/'}>
        <Logo size={'1.8rem'} />
      </S.Link>
      <S.Nav>
        <S.Link to={'/'}>
          <S.Button selected={currentRoute === '/'}>
            <Home size={iconSize} />
            <p>Home</p>
          </S.Button>
        </S.Link>
        <S.Link to={'/about-us'}>
          <S.Button selected={currentRoute === '/about-us'}>
            <User size={iconSize} />
            <p>About Us</p>
          </S.Button>
        </S.Link>
        <S.Link to={'/shop'}>
          <S.Button selected={currentRoute === '/shop'}>
            <ShoppingBag size={iconSize} />
            <p>Shop</p>
          </S.Button>
        </S.Link>
      </S.Nav>
      <S.Link to={'/cart'}>
        <CartButton
          itemsCount={cartProductsCount}
          selected={currentRoute === '/cart'}
        />
      </S.Link>
    </S.Header>
  )
}

CartButton.propTypes = {
  itemsCount: PropTypes.number,
  selected: PropTypes.bool,
}

Header.propTypes = {
  cartProductsCount: PropTypes.number,
}

export default Header
