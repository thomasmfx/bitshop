import styled from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5em 0;
  background-color: ${({ theme }) => theme.colors.neutralLight};
  font-size: 1.1rem;

  @media (max-width: ${({ theme }) => theme.device.mobileM}) {
    font-size: 0.9rem;
  }
`

export const SectionsWrapper = styled.div`
  width: 80%;
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.align ? props.align : 'space-between')};
  gap: 5em;

  @media (max-width: ${({ theme }) => theme.device.laptop}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3em;
  }

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    column-gap: 0;
  }

  @media (max-width: ${({ theme }) => theme.device.laptopL}) {
    column-gap: 1.5em;
  }

  @media (max-width: 642px) {
    grid-template-columns: none;
    grid-template-rows: none;
    justify-content: center;
  }
`

export const Section = styled.section`
  align-self: start;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
`

export const ContactSection = styled(Section)``
export const HelpSection = styled(Section)`
  @media (min-width: 643px) and (max-width: ${({ theme }) =>
      theme.device.laptop}) {
    justify-self: end;
  }
`
export const NewsletterSection = styled(Section)``

export const SectionHeading = styled.h2`
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 1em;
`

export const Badge = styled.img`
  width: 64px;
`

export const Text = styled.p`
  font-size: 0.9rem;
  max-width: 40ch;
`

export const Link = styled.a`
  font-size: 0.9rem;
  text-decoration: none;
  cursor: pointer;
  text-decoration-color: ${({ theme }) => theme.colors.default};
  margin-top: 0.2em;

  &:hover {
    text-decoration: underline;
  }
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5em;
`

export const ListRow = styled(List)`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1em;
`

export const Contact = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.default};

  &:hover {
    color: ${({ theme }) => theme.colors.brandPrimary};
  }
`

export const Copyright = styled(Text)`
  grid-column: 1 / -1;
  margin-top: 3em;
  font-size: 0.8rem;
  width: 100%;
  text-align: center;
`
