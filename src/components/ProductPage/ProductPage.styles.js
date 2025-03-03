import styled from 'styled-components'

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4em;
  align-self: start;
  padding-top: 4em;
`

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 3fr 1fr 1fr;
  justify-items: start;
  align-items: center;
`

export const ProductInfo = styled.div`
  grid-row: 1 / -1;
  display: grid;
  grid-template-rows: 4fr 1fr 1fr;
  align-items: center;
  gap: 1em;
`

export const ImageContainer = styled.div`
  grid-row: 1 / -1;
  position: relative;
`

export const ProductImage = styled.img`
  height: 350px;
`

export const ProductDescription = styled.p`
  max-width: 40ch;
  align-self: start;
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

  &::before {
    content: '$ '
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
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
  padding-left: 2em;
  gap: .5em;
  margin-top: 4em;
`

export const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
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
  border: 2px solid black;
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
`

export const ReviewerComment = styled(TextLight)`
  grid-column: 2 / -1;
  margin-top: 2em;
`