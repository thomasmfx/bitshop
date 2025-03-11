import { useOutletContext } from 'react-router-dom'
import { ArrowRight } from 'react-feather'
import CartResume from '../../components/CartResume/CartResume'
import CartProductCard from '../../components/CartProductCard/CartProductCard'
import * as S from './Cart.styles'

export default function Cart() {
  const { cartProducts } = useOutletContext()

  return (
    <S.StyledCart>
      <S.SectionCart>
        <S.SectionHeading>Cart</S.SectionHeading>
        {cartProducts.length === 0 ? (
          <S.EmptyCartDisclaimer>
            <S.TextLight>Empty cart</S.TextLight>
            <S.StyledLink to="/shop">
              <S.Button>
                <S.Text>Continue shopping</S.Text>
                <ArrowRight size={20} />
              </S.Button>
            </S.StyledLink>
          </S.EmptyCartDisclaimer>
        ) : (
          <>
            {cartProducts.map((product) => (
              <CartProductCard key={product.id} product={product} />
            ))}
          </>
        )}
      </S.SectionCart>
      <S.SectionResume>
        <S.SectionHeading>Resume</S.SectionHeading>
        <CartResume />
      </S.SectionResume>
    </S.StyledCart>
  )
}
