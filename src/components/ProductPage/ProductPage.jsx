import ProductForm from '../ProductForm/ProductForm'
import { Star, User } from 'react-feather'
import { useOutletContext, useParams } from 'react-router-dom'
import fetchProduct from '../../utils/fetchProduct'
import { useState, useEffect } from 'react'
import ProductTag from '../ProductTag/ProductTag'
import DotsLoader from '../Loaders/DotsLoader'
import Carousel from '../Carousel/Carousel'
import * as S from './ProductPage.styles'

export default function ProductPage() {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)
  const { addItem } = useOutletContext()

  useEffect(() => {
    fetchProduct(productId).then(setProduct)
  }, [productId])

  if (!product) return <DotsLoader />

  return (
    <S.Page>
      <S.ProductContainer>
        <Carousel>
          {product.images.map((image, i) => (
            <S.ProductImage key={product.id + i} src={image} />
          ))}
        </Carousel>
        <S.ProductInfo>
          <S.ProductHeader>
            <S.Line />
            <S.Wrapper>
              <S.ProductTitle>{product.title}</S.ProductTitle>
              {product.id % 5 === 0 && <S.TagNew>New</S.TagNew>}
            </S.Wrapper>
          </S.ProductHeader>
          <S.DescriptionContainer direction={'column'}>
            <S.ProductDescription>{product.description}</S.ProductDescription>
            <S.TagsWrapper>
              {product.tags.map((tag) => (
                <ProductTag key={tag} tagName={tag} />
              ))}
            </S.TagsWrapper>
          </S.DescriptionContainer>
          <S.WrapperColumn>
            <S.ProductPrice> {product.price} </S.ProductPrice>
            <ProductForm
              product={product}
              onAddProduct={addItem}
              size={'L'}
              defaultQuantity={1}
            />
          </S.WrapperColumn>
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
          <S.ProductRatingCaption>
            {product.rating.toFixed(1)}/5
          </S.ProductRatingCaption>
        </S.ProductRating>
        <S.TextLight>{product.reviews.length} reviews</S.TextLight>
      </S.ReviewsHeader>
      <S.ReviewsList>
        {product.reviews.map((review, index) => (
          <S.Review key={product.id + index}>
            <S.ReviewerPicture>
              <User color="#212529" />
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
