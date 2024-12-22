import styled from 'styled-components'
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

export default function Cart() {
  return (
    <>
      <Header currentRoute="cart" />
      <Main></Main>
      <Footer />
    </>
  )
}
