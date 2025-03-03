import ProductForm from '../ProductForm/ProductForm'
import { Star, User } from 'react-feather'
import { useOutletContext, useParams } from 'react-router-dom'
import fetchProduct from '../../utils/fetchProduct'
import { useState, useEffect } from 'react'
import TagNew from '../TagNew/TagNew'
import * as S from './ProductPage.styles'

export default function ProductPage() {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)
  const { addItem } = useOutletContext();

  useEffect(() => {
    fetchProduct(productId).then(setProduct)
  }, [productId])

  if (!product) return <p>Loading...</p>

  return (
    <S.Page>
      <S.ProductContainer>
        <S.ImageContainer>
          {product.id % 5 === 0 && <TagNew />}
          <S.ProductImage src={product.images[0]} />
        </S.ImageContainer>
        <S.ProductInfo>
          <S.ProductDescription>{product.description}</S.ProductDescription>
          <S.ProductPrice> {product.price} </S.ProductPrice>
          <ProductForm product={product} onAddProduct={addItem} size={'L'} defaultQuantity={1}/>
        </S.ProductInfo>
      </S.ProductContainer>
      <S.ReviewsHeader>
        <S.TextBold size={'L'}>Reviews</S.TextBold>
        <S.ProductRating>
          <S.RatingStars>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
              key={star}
              size={20}
              color={'orange'}
              fill={product.rating >= star ? 'orange' : 'white'}
              />
            ))}
          </S.RatingStars>
          <S.TextLight>{product.rating.toFixed(1)}/5</S.TextLight>
        </S.ProductRating>
        <S.TextLight>{product.reviews.length} reviews</S.TextLight>
      </S.ReviewsHeader>
      <S.ReviewsList>
        {product.reviews.map((review, index) => (
          <S.Review key={product.id + index}>
            <S.ReviewerPicture>
              <User />
            </S.ReviewerPicture>
            <S.ReviewerName>{review.reviewerName}</S.ReviewerName>
            <S.ReviewerRating>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                key={star}
                size={14}
                color={'orange'}
                fill={review.rating >= star ? 'orange' : 'white'}
                />
              ))}
            </S.ReviewerRating>
            <S.ReviewDate>
              {review.date.split('').slice(0, 10).join('')}
            </S.ReviewDate>
            <S.ReviewerComment>{review.comment}</S.ReviewerComment>
          </S.Review>
        ))}
      </S.ReviewsList>
    </S.Page>
  )
}
