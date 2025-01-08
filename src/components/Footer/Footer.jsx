import { GitHub, Linkedin, Phone, Mail, MapPin } from 'react-feather'
import applePayBadge from '../../assets/badges/apple-pay.png'
import googlePayBadge from '../../assets/badges/google-pay.png'
import masterCardBadge from '../../assets/badges/mastercard.png'
import payPalBadge from '../../assets/badges/paypal.png'
import visaBadge from '../../assets/badges/visa.png'

import NewsletterForm from '../NewsletterForm/NewsletterForm'
import * as S from './Footer.styles'

function Footer() {
  return (
    <S.Footer>
      <S.SectionsWrapper columns="1fr 1fr 1fr">
        <S.ContactSection>
          {/* <Logo size={'1.5rem'} /> */}
          <S.SectionHeading>Contact</S.SectionHeading>
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
          <S.ListRow>
            <S.SocialLink href="https://github.com/thomasmfx">
              <GitHub />
            </S.SocialLink>
            <S.SocialLink href="https://www.linkedin.com/in/thomas-moises-fernandes/">
              <Linkedin />
            </S.SocialLink>
          </S.ListRow>
        </S.ContactSection>
        <S.HelpSection>
          <S.SectionHeading>Help & Info</S.SectionHeading>
          <S.List>
            <S.Link>Terms and Conditions</S.Link>
            <S.Link>Privacy Policy</S.Link>
            <S.Link>Help Center</S.Link>
            <S.Link>FAQs</S.Link>
          </S.List>
        </S.HelpSection>
        <S.NewsletterSection>
          <S.SectionHeading>Newsletter</S.SectionHeading>
          <S.Text>
            Stay ahead with our latest releases - subscribe to our newsletter:
          </S.Text>
          <NewsletterForm />
          <S.ListRow>
            <S.Badge src={applePayBadge} />
            <S.Badge src={googlePayBadge} />
            <S.Badge src={masterCardBadge} />
            <S.Badge src={payPalBadge} />
            <S.Badge src={visaBadge} />
          </S.ListRow>
        </S.NewsletterSection>
      </S.SectionsWrapper>
      <S.Copyright>Copyright © bitShop - All rights reserved</S.Copyright>
    </S.Footer>
  )
}

export default Footer
