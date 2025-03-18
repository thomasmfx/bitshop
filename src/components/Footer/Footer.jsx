import applePayBadge from '../../assets/badges/apple-pay.png';
import googlePayBadge from '../../assets/badges/google-pay.png';
import masterCardBadge from '../../assets/badges/mastercard.png';
import payPalBadge from '../../assets/badges/paypal.png';
import visaBadge from '../../assets/badges/visa.png';

import { GitHub, Linkedin, Phone, Mail, MapPin } from 'react-feather';
import NewsletterForm from '../NewsletterForm/NewsletterForm';
import * as S from './Footer.styles';

function Footer() {
  return (
    <S.Footer>
      <S.Section>
        <S.SectionHeading>Contact</S.SectionHeading>
        <S.List>
          <S.ListItem>
            <Phone size={18} />
            <S.Paragraph> +55 11 99999-9999 </S.Paragraph>
          </S.ListItem>
          <S.ListItem>
            <Mail size={18} />
            <S.Paragraph> contact@bitshop.com.br </S.Paragraph>
          </S.ListItem>
          <S.ListItem>
            <MapPin size={18} />
            <S.Paragraph> Oak Street, 901 </S.Paragraph>
          </S.ListItem>
        </S.List>
        <S.SpacedFlexRow>
          <S.SocialLink href="https://github.com/thomasmfx">
            <GitHub />
          </S.SocialLink>
          <S.SocialLink href="https://www.linkedin.com/in/thomas-moises-fernandes/">
            <Linkedin />
          </S.SocialLink>
        </S.SpacedFlexRow>
      </S.Section>
      <S.HelpSection>
        <S.SectionHeading>Help & Info</S.SectionHeading>
        <S.List>
          <S.ListItem>
            <S.Link>Terms and Conditions</S.Link>
          </S.ListItem>
          <S.ListItem>
            <S.Link>Privacy Policy</S.Link>
          </S.ListItem>
          <S.ListItem>
            <S.Link>Help Center</S.Link>
          </S.ListItem>
          <S.ListItem>
            <S.Link>FAQs</S.Link>
          </S.ListItem>
        </S.List>
      </S.HelpSection>
      <S.Section>
        <S.SectionHeading>Newsletter</S.SectionHeading>
        <S.Paragraph>
          Stay ahead with our latest releases - subscribe to our newsletter:
        </S.Paragraph>
        <NewsletterForm />
        <S.SpacedFlexRow>
          <S.Badge src={applePayBadge} />
          <S.Badge src={googlePayBadge} />
          <S.Badge src={masterCardBadge} />
          <S.Badge src={payPalBadge} />
          <S.Badge src={visaBadge} />
        </S.SpacedFlexRow>
      </S.Section>
      <S.Copyright>Copyright © bitShop - All rights reserved</S.Copyright>
    </S.Footer>
  );
}

export default Footer;
