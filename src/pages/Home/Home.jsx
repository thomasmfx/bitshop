import { ShoppingBag } from 'react-feather'
import svgUrl from '../../assets/lazy-man.svg'
import { Span, RouterLink } from '../../components/shared/elements'
import * as S from './Home.styles'

export default function Home() {
  return (
    <S.Main>
      <S.Wrapper>
        <S.Heading>
          Modern life requires smart solutions. We help you find them.
        </S.Heading>
        <S.StyledButton as={RouterLink} to={'/shop'} size={'l'}>
          <Span>Shop Now</Span>
          <ShoppingBag />
        </S.StyledButton>
      </S.Wrapper>
      <S.Image src={svgUrl} />
    </S.Main>
  )
}
