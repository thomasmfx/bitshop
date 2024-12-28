import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Star } from 'react-feather'
import TagNew from '../TagNew/TagNew'
import ProductForm from '../ProductForm/ProductForm'

const ProductContainer = styled.div`
  width: 256px;
  display: grid;
  grid-template-rows: min-content 1fr;
  position: relative;
  box-shadow: lightgray 0px 5px 15px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.01);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 50px 0px;
  }
`

const ProductImageContainer = styled.div`
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  height: 180px;
`

const ProductInfo = styled.div`
  display: grid;
  padding: 1em;
  gap: 1.5em;
`

const ProductTitle = styled.p``

const ProductPrice = styled.p`
  &::before {
    content: '$';
  }
`

const ProductRating = styled.div`
  display: flex;
  align-items: center;
`

const RowWrapper = styled.div`
  align-self: end;
  display: flex;
  justify-content: space-between;
`

function ProductCard({ product, isNew, onAddProduct }) {
  const rating = Math.round(product.rating)

  return (
    <ProductContainer>
      {isNew && <TagNew />}
      <ProductImageContainer>
        <Image src={product.images[0]} />
      </ProductImageContainer>
      <ProductInfo>
        <ProductTitle> {product.title} </ProductTitle>
        <RowWrapper>
          <ProductPrice> {product.price} </ProductPrice>
          <ProductRating>
            <Star
              size={16}
              color={'orange'}
              fill={rating >= 1 ? 'orange' : 'white'}
            />
            <Star
              size={16}
              color={'orange'}
              fill={rating >= 2 ? 'orange' : 'white'}
            />
            <Star
              size={16}
              color={'orange'}
              fill={rating >= 3 ? 'orange' : 'white'}
            />
            <Star
              size={16}
              color={'orange'}
              fill={rating >= 4 ? 'orange' : 'white'}
            />
            <Star
              size={16}
              color={'orange'}
              fill={rating === 5 ? 'orange' : 'white'}
            />
          </ProductRating>
        </RowWrapper>
        <ProductForm product={product} onAddProduct={onAddProduct} />
      </ProductInfo>
    </ProductContainer>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object,
  isNew: PropTypes.bool,
  onAddProduct: PropTypes.func,
}

export default ProductCard
