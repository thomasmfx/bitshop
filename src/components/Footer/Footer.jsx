import styled from 'styled-components'
import { GitHub, Linkedin, Phone, Mail, MapPin } from 'react-feather'
import Logo from '../Logo/Logo'

import applePayBadge from '../../assets/badges/apple-pay.png'
import googlePayBadge from '../../assets/badges/google-pay.png'
import masterCardBadge from '../../assets/badges/mastercard.png'
import payPalBadge from '../../assets/badges/paypal.png'
import visaBadge from '../../assets/badges/visa.png'

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  justify-items: center;
  padding: 1.5em 0;
  gap: 2em;
  background-color: var(--color-tertiary);
`

const Row = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: ${(props) =>
    props.$columns ? props.$columns : '1fr'};
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: ${(props) => (props.$align ? props.$align : 'start')};
  gap: 5em;
`

const Column = styled.div`
  align-self: start;
  display: grid;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;
  height: 100%;
`

const Title = styled.h2`
  font-size: 0.9rem;
  font-weight: bold;
`

const Image = styled.img`
  width: 64px;
`

const Text = styled.p`
  font-size: ${(props) => (props.$size ? props.$size : '.9rem;')};
  max-width: 40ch;
`

const FakeLink = styled.a`
  font-size: 0.9rem;
  text-decoration: none;
  cursor: pointer;
  text-decoration-color: var(--default-color);
  margin-top: 0.2em;

  &:hover {
    text-decoration: underline;
  }
`

const List = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.$row ? 'row' : 'column')};
  align-items: flex-start;
  gap: 0.5em;
`

const Contact = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: var(--color-default);

  &:hover {
    color: var(--color-primary);
  }
`

const Input = styled.input`
  border: none;
  outline: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding-left: 0.3em;
  padding-right: 0.3em;
  height: 35px;
`

const Button = styled.button`
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: var(--color-primary);
  color: white;
  width: 80px;
  height: 35px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s eas-in-out;

  &:active {
    filter: brightness(110%);
  }
`

const Form = styled.form`
  display: flex;
  align-self: start;
`

function NewsletterForm() {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Input name="email" autoComplete="on" />
      <Button type="submit">Sing up</Button>
    </Form>
  )
}

function Footer() {
  return (
    <StyledFooter>
      <Row $columns="1fr 1fr 1fr">
        <Column>
          <Logo size={'1.5rem'} />
          <List>
            <Contact>
              <Phone size={18} />
              <Text> +55 11 99999-9999 </Text>
            </Contact>
            <Contact>
              <Mail size={18} />
              <Text> contact@bitshop.com.br </Text>
            </Contact>
            <Contact>
              <MapPin size={18} />
              <Text> Oak Street, 901 </Text>
            </Contact>
          </List>
          <List $row={true}>
            <SocialLink href="https://github.com/thomasmfx">
              <GitHub />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/thomas-moises-fernandes/">
              <Linkedin />
            </SocialLink>
          </List>
        </Column>
        <Column style={{ gap: 0 }}>
          <Title>Help & Info</Title>
          <List>
            <FakeLink>Terms and Conditions</FakeLink>
            <FakeLink>Privacy Policy</FakeLink>
            <FakeLink>Help Center</FakeLink>
            <FakeLink>FAQs</FakeLink>
          </List>
        </Column>
        <Column style={{ gap: 0 }}>
          <Title>Newsletter</Title>
          <Text>
            Stay ahead with our latest releases - subscribe to our newsletter:
          </Text>
          <NewsletterForm />
          <List $row={true}>
            <Image src={applePayBadge} />
            <Image src={googlePayBadge} />
            <Image src={masterCardBadge} />
            <Image src={payPalBadge} />
            <Image src={visaBadge} />
          </List>
        </Column>
      </Row>
      <Row style={{ justifyItems: 'center', paddingTop: '1em' }}>
        <Text $size={'.8rem'}>Copyright © bitShop - All rights reserved</Text>
      </Row>
    </StyledFooter>
  )
}

export default Footer
