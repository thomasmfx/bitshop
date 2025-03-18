import { useOutletContext } from 'react-router-dom'
import CartProducts from '../../components/CartProducts/CartProducts'
import CartResume from '../../components/CartResume/CartResume'
import * as S from './Cart.styles'

export default function Cart() {
  const { cartProducts } = useOutletContext()

  return (
    <S.StyledCart>
      <S.Section>
        <S.SectionHeading>Cart</S.SectionHeading>
        <CartProducts products={cartProducts} />
      </S.Section>
      <S.Section>
        <S.SectionHeading>Resume</S.SectionHeading>
        <CartResume />
      </S.Section>
    </S.StyledCart>
  )
}
