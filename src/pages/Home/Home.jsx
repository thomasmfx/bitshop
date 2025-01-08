import { ShoppingBag } from 'react-feather'
import svgUrl from '../../assets/lazy-man.svg'
import * as S from './Home.styles'

export default function Home() {
  return (
    <S.Main>
      <S.Wrapper>
        <S.Heading>
          Modern life requires smart solutions. We help you find them.
        </S.Heading>
        <S.StyledLink to={'/shop'}>
          <S.StyledButton size={'l'}>
            <S.Text>Shop Now</S.Text>
            <ShoppingBag />
          </S.StyledButton>
        </S.StyledLink>
      </S.Wrapper>
      <S.Image src={svgUrl} />
    </S.Main>
  )
}
