import { useOutletContext } from 'react-router-dom'
import { ArrowRight } from 'react-feather'
import CartResume from '../../components/CartResume/CartResume'
import CartProductCard from '../../components/CartProductCard/CartProductCard'
import * as S from './Cart.styles'

export default function Cart() {
  const { items } = useOutletContext()

  function calculateSubtotal() {
    return items.reduce((count, item) => count + item.price * item.quantity, 0)
  }

  const subtotal = calculateSubtotal()
  const shipping = 19.99
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  return (
    <S.StyledCart>
      <S.SectionCart>
        <S.SectionHeading>Cart</S.SectionHeading>
        {items.length === 0 ? (
          <S.EmptyCartDisclaimer>
            <S.TextLight>Empty cart</S.TextLight>
            <S.Link to="/shop">
              <S.Button>
                <S.Text>Continue shopping</S.Text>
                <ArrowRight size={20} />
              </S.Button>
            </S.Link>
          </S.EmptyCartDisclaimer>
        ) : (
          <>
            {items.map((product) => (
              <CartProductCard key={product.id} product={product} />
            ))}
          </>
        )}
      </S.SectionCart>
      <S.SectionResume>
        <S.SectionHeading>Resume</S.SectionHeading>
        <CartResume
          subtotal={subtotal}
          shipping={shipping}
          tax={tax}
          total={total}
        />
      </S.SectionResume>
    </S.StyledCart>
  )
}
