import { useOutletContext } from 'react-router-dom'
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
      <S.Section>
        <S.SectionHeading>Cart</S.SectionHeading>
        {items.map((product) => (
          <CartProductCard product={product}/>
        ))}
      </S.Section>
      <S.Section>
        <S.SectionHeading>Resume</S.SectionHeading>
        <CartResume subtotal={subtotal} shipping={shipping} tax={tax} total={total}/>
      </S.Section>
    </S.StyledCart>
  )
}
