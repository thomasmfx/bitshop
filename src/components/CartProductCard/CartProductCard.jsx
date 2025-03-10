import { useOutletContext } from 'react-router-dom'
import PropTypes from 'prop-types'
import { X } from 'react-feather'
import QuantityControl from '../QuantityControl/QuantityControl'
import { RouterLink } from '../shared/elements'
import * as S from './CartProductCard.styles'

function CartProductCard({ product }) {
  const { addItem, decreaseQuantity, removeItem } = useOutletContext()

  return (
      <S.Product key={product.id} as={RouterLink} to={`/shop/${product.id}`}>
        <S.ProductImage src={product.images[0]} />
        <S.ProductName>{product.title}</S.ProductName>
        <S.Wrapper alignSelf="end" alignItems="center">
          <QuantityControl
            value={product.quantity}
            onMinusClick={(e) => {
              product.quantity === 1
                ? removeItem(product)
                : decreaseQuantity(product, 1)
              e.preventDefault()
            }}
            onPlusClick={(e) => {
              addItem(product, 1)
              e.preventDefault()
            }}
          />
          <S.ProductPrice>{product.price}</S.ProductPrice>
        </S.Wrapper>
        <S.RemoveProductButton
          onClick={(e) => {
            removeItem(product)
            e.preventDefault()
          }}
        >
          <X size={15} color="#A5AAB5" />
        </S.RemoveProductButton>
      </S.Product>
  )
}

CartProductCard.propTypes = {
  product: PropTypes.object,
}

export default CartProductCard
