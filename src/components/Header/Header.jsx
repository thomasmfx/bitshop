import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Home, ShoppingBag, ShoppingCart, User } from 'react-feather'
import Logo from '../Logo/Logo'
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
        {itemsCount}
      </S.ItemsCount>
    </S.RoundButton>
  )
}

function Header({ cartProductsCount }) {
  const currentRoute = useLocation().pathname

  useEffect(() => {
    document.documentElement.setAttribute('data-scroll', '0')

    const handleScroll = () => {
      const scrollY = window.scrollY
      document.documentElement.setAttribute('data-scroll', scrollY.toString())
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <S.Header>
      <S.Link to={'/'}>
        <Logo size={'1.8rem'} />
      </S.Link>
      <S.Nav>
        <S.Link to={'/'}>
          <S.Button selected={currentRoute === '/'}>
            <Home size={iconSize} />
            <S.Text>Home</S.Text>
          </S.Button>
        </S.Link>
        <S.Link to={'/about-us'}>
          <S.Button selected={currentRoute === '/about-us'}>
            <User size={iconSize} />
            <S.Text>About Us</S.Text>
          </S.Button>
        </S.Link>
        <S.Link to={'/shop'}>
          <S.Button selected={currentRoute === '/shop'}>
            <ShoppingBag size={iconSize} />
            <S.Text>Shop</S.Text>
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
