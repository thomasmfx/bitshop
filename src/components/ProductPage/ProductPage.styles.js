import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4em;
  align-self: start;
  padding-top: 2em;
`

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 3fr 1fr 1fr;
  justify-items: start;
  align-items: center;
`

export const ProductHeader = styled.div`
  display: grid;
  grid-template-columns: 5px 1fr;
  grid-template-rows: 30px;
  align-items: center;
  gap: .5em;
`

export const ProductImage = styled.img`
  grid-row: 1 / -1;
  height: 350px;
`

export const ProductInfo = styled.div`
  grid-row: 1 / -1;
  max-width: 40ch;
  display: grid;
  grid-template-rows: 1fr 3fr 1fr 1fr;
  align-items: center;
  gap: 1em;
`

export const ProductTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5em;
  margin-bottom: 1em;
`

export const ProductDescription = styled.p`
  align-self: start;
`

export const TagsWrapper = styled(Wrapper)`
  gap: .5em;
`

export const Text = styled.p`
  font-size: ${(props) => props.size === 'L' ? '1.5rem' : '1rem'};
  font-weight: 400;
`

export const TextBold = styled(Text)`
  font-weight: bold;
`

export const TextLight = styled(Text)`
  color: ${({theme}) => theme.colors.neutralDark};
`

export const ProductPrice = styled(Text)`
  font-size: 1.2rem;
  font-weight: 500;

  &::before {
    content: '$ '
  }
`

export const TagNew = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1em;
  width: 40px;
  height: 20px;

  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.brandPrimary};
  font-size: 0.7rem;
  font-weight: bold;
  color: white;
`

export const ReviewsHeader = styled.div`
  display: flex;
  flex-direction: column; 
  width: 100%;
  gap: .5em;
  margin-top: 4em;
`

export const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`

export const ProductRatingCaption = styled(TextLight)`
  font-weight: 600;
`

export const RatingStars = styled.div`
  display: flex;
  align-items: center;
`

export const ReviewsList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1em;
`

export const Review = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: auto;
  align-items: center;
  gap: .2em;
  column-gap: 1em;
  border-bottom: 2px solid #e5e5e5;
  padding-bottom: 1em;
`

export const ReviewerPicture = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / -1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%; 
  border: 2px solid ${({theme}) => theme.colors.default};
`

export const ReviewerName = styled(TextBold)`
  grid-column: 2 / -1;
`

export const ReviewerRating = styled.div`
  grid-column: 2 / -1;
  display: flex;
  align-items: center;
`

export const ReviewDate = styled(TextLight)`
  grid-column: 2 / -1;
  font-size: .7rem;
  font-weight: 500;
`

export const ReviewerComment = styled(TextLight)`
  grid-column: 2 / -1;
  margin-top: 2em;
`

export const Line = styled.div`
  min-height: 100%;
  width: 5px;
  background-color: ${({theme}) => theme.colors.neutral};
  margin-right: 10px;
  border-radius: 2px;
`