import { GitHub, Linkedin, Phone, Mail, MapPin } from 'react-feather'
import applePayBadge from '../../assets/badges/apple-pay.png'
import googlePayBadge from '../../assets/badges/google-pay.png'
import masterCardBadge from '../../assets/badges/mastercard.png'
import payPalBadge from '../../assets/badges/paypal.png'
import visaBadge from '../../assets/badges/visa.png'

import Logo from '../Logo/Logo'
import NewsletterForm from '../NewsletterForm/NewsletterForm'
import * as S from './Footer.styles'

function Footer() {
  return (
    <S.Footer>
      <S.Row columns="1fr 1fr 1fr">
        <S.Column>
          <Logo size={'1.5rem'} />
          <S.List>
            <S.Contact>
              <Phone size={18} />
              <S.Text> +55 11 99999-9999 </S.Text>
            </S.Contact>
            <S.Contact>
              <Mail size={18} />
              <S.Text> contact@bitshop.com.br </S.Text>
            </S.Contact>
            <S.Contact>
              <MapPin size={18} />
              <S.Text> Oak Street, 901 </S.Text>
            </S.Contact>
          </S.List>
          <S.List row={true}>
            <S.SocialLink href="https://github.com/thomasmfx">
              <GitHub />
            </S.SocialLink>
            <S.SocialLink href="https://www.linkedin.com/in/thomas-moises-fernandes/">
              <Linkedin />
            </S.SocialLink>
          </S.List>
        </S.Column>
        <S.Column style={{ gap: 0 }}>
          <S.Title>Help & Info</S.Title>
          <S.List>
            <S.Link>Terms and Conditions</S.Link>
            <S.Link>Privacy Policy</S.Link>
            <S.Link>Help Center</S.Link>
            <S.Link>FAQs</S.Link>
          </S.List>
        </S.Column>
        <S.Column style={{ gap: 0 }}>
          <S.Title>Newsletter</S.Title>
          <S.Text>
            Stay ahead with our latest releases - subscribe to our newsletter:
          </S.Text>
          <NewsletterForm />
          <S.List row={true}>
            <S.Image src={applePayBadge} />
            <S.Image src={googlePayBadge} />
            <S.Image src={masterCardBadge} />
            <S.Image src={payPalBadge} />
            <S.Image src={visaBadge} />
          </S.List>
        </S.Column>
      </S.Row>
      <S.Row style={{ justifyItems: 'center', paddingTop: '1em' }}>
        <S.Text $size={'.8rem'}>
          Copyright © bitShop - All rights reserved
        </S.Text>
      </S.Row>
    </S.Footer>
  )
}

export default Footer
