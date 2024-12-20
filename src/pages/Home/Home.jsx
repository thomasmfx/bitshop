import styled from 'styled-components'
import { ShoppingBag } from 'react-feather'
import svgUrl from '../../assets/lazy-man.svg'

import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5em;
  padding: 6em;
  padding-top: 0;
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

const ShopButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  padding: 0.5em 1em;

  border: none;
  border-radius: 5px;
  background-color: var(--color-primary);
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: var(--color-quaternary);
  }
`

export default function Home() {
  return (
    <>
      <Header currentRoute="/" />
      <Main>
        <Column>
          <Heading>
            Modern life requires smart solutions. We help you find them.
          </Heading>
          <Link to={'/shop'} style={{ textDecoration: 'none' }}>
            <ShopButton>
              <ShoppingBag />
              <p>Shop now</p>
            </ShopButton>
          </Link>
        </Column>
        <Column>
          <Image src={svgUrl} />
        </Column>
      </Main>
      <Footer />
    </>
  )
}
