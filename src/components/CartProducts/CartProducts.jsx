import PropTypes from 'prop-types'
import { ArrowRight } from 'react-feather'
import CartProductCard from '../../components/CartProductCard/CartProductCard'
import * as S from './CartProducts.styles'
import { RouterLink } from '../shared/elements'

function CartProducts({ products }) {
  return (
    <>
      {products.length === 0 ? (
        <S.EmptyCartDisclaimer>
          <S.TextLight>Empty cart</S.TextLight>
          <S.Button as={RouterLink} to={'/shop'}>
            <S.Text>Continue shopping</S.Text>
            <ArrowRight size={20} />
          </S.Button>
        </S.EmptyCartDisclaimer>
      ) : (
        <>
          {products.map((product) => (
            <CartProductCard key={product.id} product={product} />
          ))}
        </>
      )}
    </>
  )
}

CartProducts.propTypes = {
  products: PropTypes.array,
}

export default CartProducts
