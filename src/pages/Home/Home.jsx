import { ShoppingBag } from 'react-feather'
import svgUrl from '../../assets/lazy-man.svg'
import * as S from './Home.styles'

export default function Home() {
  return (
    <S.Main>
      <S.Column>
        <S.Heading>
          Modern life requires smart solutions. We help you find them.
        </S.Heading>
        <S.StyledLink to={'/shop'}>
          <S.StyledButton size={'l'}>
            <S.Text>Shop Now</S.Text>
            <ShoppingBag />
          </S.StyledButton>
        </S.StyledLink>
      </S.Column>
      <S.Column>
        <S.Image src={svgUrl} />
      </S.Column>
    </S.Main>
  )
}
