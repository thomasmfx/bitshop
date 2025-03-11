import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Home, ShoppingBag, ShoppingCart, User } from 'react-feather'
import Logo from '../Logo/Logo'
import { RouterLink, Span } from '../shared/elements'
import scrollToTopOnRouteChange from '../../utils/scrollPageToTop'
import * as S from './Header.styles'

const iconSize = 21

function CartButton({ itemsCount, selected }) {
  return (
    <S.RoundButton selected={selected}>
      <ShoppingCart
        size={iconSize}
        style={{ transform: 'translate(-7%, 10%)' }}
      />
      <S.ItemsCount>
        <Span>{itemsCount}</Span>
      </S.ItemsCount>
    </S.RoundButton>
  )
}

function Header({ cartProductsCount }) {
  const currentRoute = useLocation().pathname

  useEffect(() => {
    scrollToTopOnRouteChange()
  }, [])

  return (
    <S.Header>
      <RouterLink to={'/'}>
        <Logo size={'1.8rem'} />
      </RouterLink>
      <S.Nav>
        <RouterLink to={'/'}>
          <S.Button selected={currentRoute === '/'}>
            <Home size={iconSize} />
            <Span>Home</Span>
          </S.Button>
        </RouterLink>
        <RouterLink to={'/about-us'}>
          <S.Button selected={currentRoute === '/about-us'}>
            <User size={iconSize} />
            <Span>About Us</Span>
          </S.Button>
        </RouterLink>
        <RouterLink to={'/shop'}>
          {/* Method to work with dynamic segments, i.e. when opening a product page.
          I'm only checking for '/shop' in the route, excluding the productId */}
          <S.Button
            selected={currentRoute.split('').slice(0, 5).join('') === '/shop'}
          >
            <ShoppingBag size={iconSize} />
            <Span>Shop</Span>
          </S.Button>
        </RouterLink>
      </S.Nav>
      <RouterLink to={'/cart'}>
        <CartButton
          itemsCount={cartProductsCount}
          selected={currentRoute === '/cart'}
        />
      </RouterLink>
    </S.Header>
  )
}

CartButton.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
}

Header.propTypes = {
  cartProductsCount: PropTypes.number.isRequired,
}

export default Header
