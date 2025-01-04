import imageOneUrl from '../../assets/computer-man.svg'
import imageTwoUrl from '../../assets/lifestyle.svg'
import imageThreeUrl from '../../assets/team.svg'
import * as S from './AboutUs.styles'

export default function AboutUs() {
  return (
    <S.Main>
      <S.Slogan>Every bit makes difference.</S.Slogan>
      <S.Row>
        <S.Column>
          <S.Paragraph>
            At bitShop, we understand that technology isn&apos;t just about
            devices and gadgets - it&apos;s about making life better, one bit at
            a time.
          </S.Paragraph>
          <S.Paragraph>
            Founded with a clear vision, we&apos;re committed to bringing smart
            solutions that actually make sense for your daily life. We carefully
            select each product in our catalog to ensure they add real value to
            your routine, whether you&apos;re a tech enthusiast or just looking
            for practical solutions.
          </S.Paragraph>
        </S.Column>
        <S.Image src={imageOneUrl} />
      </S.Row>
      <S.Row>
        <S.Image src={imageTwoUrl} />
        <S.Column>
          <S.Paragraph style={{ alignSelf: 'flex-start' }}>
            Why bitShop? Because we believe that:
          </S.Paragraph>
          <S.List>
            <S.ListItem>Technology should simplify, not complicate</S.ListItem>
            <S.ListItem>Quality matters more than trends</S.ListItem>
            <S.ListItem>
              Everyone deserves access to reliable tech solutions
            </S.ListItem>
            <S.ListItem>Customer satisfaction is our top priority</S.ListItem>
            <S.ListItem>
              Innovation must serve a purpose, not just novelty
            </S.ListItem>
            <S.ListItem>
              Long-term reliability beats short-term excitement
            </S.ListItem>
          </S.List>
        </S.Column>
      </S.Row>
      <S.Row>
        <S.Column>
          <S.Paragraph>
            Our team is here to help you navigate the world of technology,
            providing expert guidance and support whenever you need. Think of us
            as your personal tech advisors, always ready to help you find the
            perfect solution for your needs.
          </S.Paragraph>
          <S.Paragraph>
            From smartphones to smart homes, from work essentials to
            entertainment upgrades - we&apos;re here to ensure you get the most
            out of your tech investments.
          </S.Paragraph>
          <S.Paragraph>
            Welcome to bitShop - where every bit contributes to a smarter, more
            comfortable life.
          </S.Paragraph>
        </S.Column>
        <S.Image src={imageThreeUrl} />
      </S.Row>
    </S.Main>
  )
}
