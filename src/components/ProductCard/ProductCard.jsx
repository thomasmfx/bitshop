import PropTypes from 'prop-types'
import { Star } from 'react-feather'
import TagNew from '../TagNew/TagNew'
import ProductForm from '../ProductForm/ProductForm'
import { RouterLink } from '../shared/elements'
import * as S from './ProductCard.styles'

function ProductCard({ product, isNew, onAddProduct }) {
  const rating = Math.round(product.rating)

  return (
    <S.ProductContainer as={RouterLink} to={`/shop/${product.id}`}>
      {isNew && <TagNew />}
      <S.ProductImageContainer>
        <S.Image src={product.images[0]} />
      </S.ProductImageContainer>
      <S.ProductInfo>
        <S.ProductTitle>{product.title}</S.ProductTitle>
        <S.RowWrapper>
          <S.ProductPrice>{product.price}</S.ProductPrice>
          <S.ProductRating>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={16}
                color={'orange'}
                fill={rating >= star ? 'orange' : 'white'}
              />
            ))}
          </S.ProductRating>
        </S.RowWrapper>
        <ProductForm product={product} onAddProduct={onAddProduct} />
      </S.ProductInfo>
    </S.ProductContainer>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  isNew: PropTypes.bool,
  onAddProduct: PropTypes.func.isRequired,
}

export default ProductCard
