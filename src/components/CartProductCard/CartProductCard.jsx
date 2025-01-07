import { useOutletContext } from 'react-router-dom'

import { X } from 'react-feather'
import QuantityControl from '../QuantityControl/QuantityControl'
import * as S from './CartProductCard.styles'

function CartProductCard({product}) {
  const { addItem, decreaseQuantity, removeItem } = useOutletContext()

  return (
    <S.Product key={product.id}>
      <S.ProductImage src={product.images[0]} />
      <S.ProductColumn>
        <S.ProductRow>
          <S.Text>{product.title}</S.Text>
          <S.RemoveProductButton onClick={() => removeItem(product)}>
            <X size={15} color="#A5AAB5" />
          </S.RemoveProductButton>
        </S.ProductRow>
        <S.ProductRow>
          <QuantityControl
            value={product.quantity}
            onMinusClick={() =>
              product.quantity === 1
                ? removeItem(product)
                : decreaseQuantity(product, 1)
            }
            onPlusClick={() => addItem(product, 1)}
          />
          <S.ProductPrice>{product.price}</S.ProductPrice>
        </S.ProductRow>
      </S.ProductColumn>
    </S.Product>
  )
}

export default CartProductCard