import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'react-feather'
import svgUrl from '../../assets/lazy-man.svg'
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary'

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5em;
  padding: 6em;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 500px;
`

const Image = styled.img`
  width: 500px;
`

const Heading = styled.h1`
  font-size: 3rem;
  padding-bottom: 1em;
  color: #212529;
`

export default function Home() {
  return (
    <>
      <Main>
        <Column>
          <Heading>
            Modern life requires smart solutions. We help you find them.
          </Heading>
          <Link to={'/shop'} style={{ textDecoration: 'none' }}>
            <ButtonPrimary text={'Shop now'} size={'l'}>
              <ShoppingBag />
            </ButtonPrimary>
          </Link>
        </Column>
        <Column>
          <Image src={svgUrl} />
        </Column>
      </Main>
    </>
  )
}
