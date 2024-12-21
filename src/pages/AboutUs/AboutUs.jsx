import styled from 'styled-components'
import imageOneUrl from '../../assets/computer-man.svg'
import imageTwoUrl from '../../assets/lifestyle.svg'
import imageThreeUrl from '../../assets/team.svg'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Main = styled.main`
  justify-self: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
  padding: 5em;
  padding-bottom: 10em;
`

const Slogan = styled.h1`
  color: var(--color-primary);
`

const Image = styled.img`
  width: 500px;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2em;
`

const Row = styled(Column)`
  flex-direction: row;
`

const Paragraph = styled.p`
  font-size: 1.1rem;
  max-width: 40ch;
`

const List = styled.ul``

const ListItem = styled.li`
  font-size: 1.1rem;
`

export default function AboutUs() {
  return (
    <>
      <Header currentRoute="about-us" />
      <Main>
        <Slogan>Every bit makes difference.</Slogan>
        <Row>
          <Column>
            <Paragraph>
              At bitShop, we understand that technology isn&apos;t just about
              devices and gadgets - it&apos;s about making life better, one bit
              at a time.
            </Paragraph>
            <Paragraph>
              Founded with a clear vision, we&apos;re committed to bringing
              smart solutions that actually make sense for your daily life. We
              carefully select each product in our catalog to ensure they add
              real value to your routine, whether you&apos;re a tech enthusiast
              or just looking for practical solutions.
            </Paragraph>
          </Column>
          <Image src={imageOneUrl} />
        </Row>
        <Row>
          <Image src={imageTwoUrl} />
          <Column>
            <Paragraph style={{ alignSelf: 'flex-start' }}>
              Why bitShop? Because we believe that:
            </Paragraph>
            <List>
              <ListItem>Technology should simplify, not complicate</ListItem>
              <ListItem>Quality matters more than trends</ListItem>
              <ListItem>
                Everyone deserves access to reliable tech solutions
              </ListItem>
              <ListItem>Customer satisfaction is our top priority</ListItem>
              <ListItem>
                Innovation must serve a purpose, not just novelty
              </ListItem>
              <ListItem>
                Long-term reliability beats short-term excitement
              </ListItem>
            </List>
          </Column>
        </Row>
        <Row>
          <Column>
            <Paragraph>
              Our team is here to help you navigate the world of technology,
              providing expert guidance and support whenever you need. Think of
              us as your personal tech advisors, always ready to help you find
              the perfect solution for your needs.
            </Paragraph>
            <Paragraph>
              From smartphones to smart homes, from work essentials to
              entertainment upgrades - we&apos;re here to ensure you get the
              most out of your tech investments.
            </Paragraph>
            <Paragraph>
              Welcome to bitShop - where every bit contributes to a smarter,
              more comfortable life.
            </Paragraph>
          </Column>
          <Image src={imageThreeUrl} />
        </Row>
      </Main>
      <Footer />
    </>
  )
}
