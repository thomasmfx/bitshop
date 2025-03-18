import { useState, useRef } from 'react';
import { CreditCard, X, Check } from 'react-feather';
import circleCheck from '../../assets/circle-check.svg';
import Button from '../Button/Button';
import { useOutletContext } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { P } from '../shared/elements';
import * as S from './CartResume.styles';

const initialCouponState = {
  code: '',
  discount: 0,
  wasTried: false, // Prevent "invalid coupon" feedback before user tries to enter a coupon
  isValid: false,
};

function CartResume() {
  const [couponState, setCouponState] = useState(initialCouponState);
  const { clearCart, cartProducts, notifyEmptyCart } = useOutletContext();
  const input = useRef(null);
  let navigate = useNavigate();

  function calculateSubtotal() {
    return cartProducts.reduce(
      (count, item) => count + item.price * item.quantity,
      0,
    );
  }

  const subtotal = calculateSubtotal();
  const shipping = 19.99;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  function updateCouponState(property, newValue) {
    setCouponState((prevState) => ({ ...prevState, [property]: newValue }));
  }

  function handleCouponSubmit() {
    input.current.blur();
    const couponCode = couponState.code.toLocaleUpperCase();
    updateCouponState('wasTried', true);

    switch (couponCode) {
      case 'VAICORINTHIANS':
        updateCouponState('discount', 50);
        updateCouponState('isValid', true);
        break;
      case '15OFF':
        updateCouponState('discount', 15);
        updateCouponState('isValid', true);
        break;
      case '10OFF':
        updateCouponState('discount', 10);
        updateCouponState('isValid', true);
        break;
      case '5OFF':
        updateCouponState('discount', 5);
        updateCouponState('isValid', true);
        break;
      default:
        updateCouponState('discount', 0);
        updateCouponState('isValid', false);
    }
  }

  function handleCheckout() {
    if (!cartProducts.length) {
      notifyEmptyCart();
      return;
    }

    navigate('/checkout');
    // A little delay to not show the cartProducts getting cleared during the transition to checkout
    setTimeout(() => {
      clearCart();
    }, 100);
  }

  return (
    <S.CartResumeContainer>
      <S.PriceBreakdown>
        <S.PriceWrapper>
          <S.TextLight>Subtotal</S.TextLight>
          <S.Price>{subtotal.toFixed(2)}</S.Price>
        </S.PriceWrapper>
        <S.PriceWrapper>
          <S.TextLight>Shipping</S.TextLight>
          <S.Price>{shipping.toFixed(2)}</S.Price>
        </S.PriceWrapper>
        <S.PriceWrapper>
          <S.TextLight>Tax</S.TextLight>
          <S.Price>{tax.toFixed(2)}</S.Price>
        </S.PriceWrapper>
        <S.PriceWrapper>
          <S.TextLight>Discount</S.TextLight>
          <S.CouponDiscount data-testid="coupon-discount">
            {couponState.discount}
          </S.CouponDiscount>
        </S.PriceWrapper>
        <S.Divider />
        <S.TotalPrice>
          <P>Total</P>
          <S.Price>
            {(total - (total * couponState.discount) / 100).toFixed(2)}
          </S.Price>
        </S.TotalPrice>
      </S.PriceBreakdown>
      <S.SectionBlock>
        <P>Discount Coupon</P>
        <S.DiscountCouponWrapper>
          <S.CouponInput
            ref={input}
            placeholder="Enter coupon code"
            name="coupon"
            value={couponState.code}
            onChange={(e) => updateCouponState('code', e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleCouponSubmit();
            }}
          />
          <S.ApplyCouponButton onClick={handleCouponSubmit}>
            Apply
          </S.ApplyCouponButton>
        </S.DiscountCouponWrapper>
        {couponState.wasTried ? (
          couponState.isValid ? (
            <S.ValidCoupon>
              Coupon applied succesfully
              <Check size={18} />
            </S.ValidCoupon>
          ) : (
            <S.InvalidCoupon>
              Invalid coupon
              <X size={18} />
            </S.InvalidCoupon>
          )
        ) : null}
      </S.SectionBlock>
      <S.SectionBlock>
        <P>Payment methods</P>
        <S.PaymentMethods>
          <CreditCard size={24} color="#9CA3AF" />
          <S.TextLight>All major credit cards accepted</S.TextLight>
        </S.PaymentMethods>
      </S.SectionBlock>
      <Button size={'l'} onClick={handleCheckout}>
        <P>Checkout</P>
        <S.Icon src={circleCheck} />
      </Button>
    </S.CartResumeContainer>
  );
}

export default CartResume;
