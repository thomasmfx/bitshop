import styled from 'styled-components'

export const Main = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5em;
  padding: 6em;
  padding-bottom: 10em;
  padding-top: 10em;

  @media (max-width: ${({ theme }) => theme.device.laptop}) {
    padding-top: 5em;
  }

  @media (max-width: ${({ theme }) => theme.device.tabletL}) {
    padding-left: 2em;
    padding-right: 2em;
  }

  @media (max-width: ${({ theme }) => theme.device.mobileL}) {
    padding-left: 1em;
    padding-right: 1em;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const WrapperColumn = styled.div`
  display: grid;
  gap: 1em;
  align-self: end;
`

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
  align-self: start;
  padding-top: 2em;

  @media (max-width: ${({ theme }) => theme.device.laptop}) {
    padding-top: 0;
  }
`

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3em;

  @media (max-width: ${({ theme }) => theme.device.laptop}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5em;
  }
`

export const ProductHeader = styled.div`
  display: flex;
  gap: 0.5em;
`

export const Line = styled.div`
  min-height: 100%;
  min-width: 5px;
  background-color: ${({ theme }) => theme.colors.neutral};
  margin-right: 5px;
  border-radius: 2px;
`

export const ProductTitle = styled.p`
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 500;
  white-space: pre-wrap;

  &::after {
    content: 'New';
    display: inline-block;
    padding: .1em .7em;
    transform: translateY(-10%);

    border-radius: 40px;
    background-color: ${({ theme }) => theme.colors.brandPrimary};
    font-size: 0.7rem;
    font-weight: bold;
    color: white;
  }
`

export const TagNew = styled.div`
  display: inline-block;
  padding: .1em .7em;
  transform: translateY(-10%);

  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.brandPrimary};
  font-size: 0.7rem;
  font-weight: bold;
  color: white;
`

export const ProductImage = styled.img``

export const ProductInfo = styled.div`
  grid-row: 1 / -1;
  max-width: 40ch;
  display: grid;
  grid-template-rows: repeat(2, min-content) 1fr;
  gap: 1em;
  align-items: center;
  height: 100%;
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  margin-bottom: 1em;
`

export const ProductDescription = styled.p``

export const TagsWrapper = styled(Wrapper)`
  gap: 0.5em;
`

export const Text = styled.p`
  font-size: ${(props) => (props.size === 'L' ? '1.5rem' : '1rem')};
  font-weight: 400;
`

export const TextBold = styled(Text)`
  font-weight: bold;
`

export const TextLight = styled(Text)`
  color: ${({ theme }) => theme.colors.neutralDark};
`

export const ProductPrice = styled(Text)`
  font-size: 1.3rem;
  font-weight: 500;
  align-self: end;

  &::before {
    content: '$ ';
  }

  @media (max-width: ${({ theme }) => theme.device.laptop}) {
    padding-top: 2em;
  }
`

export const ReviewsHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5em;
  margin-top: 4em;
  margin-bottom: 2em;
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
  gap: 0.2em;
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
  border: 2px solid ${({ theme }) => theme.colors.default};
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
  font-size: 0.7rem;
  font-weight: 500;
`

export const ReviewerComment = styled(TextLight)`
  grid-column: 2 / -1;
  margin-top: 2em;
`
