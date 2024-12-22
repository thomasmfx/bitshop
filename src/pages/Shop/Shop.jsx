import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ProductCard from '../../components/ProductCard/ProductCard'
import fetchProducts from '../../utils/fetchProducts'

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5em;
  padding: 6em;
  padding-bottom: 8em;
`

const ProductsContainer = styled.div`
  grid-column: 2 / 3;
  display: grid;
  grid-template-columns: repeat(3, min-content);
  justify-content: center;
  gap: 5em;
`

export default function Shop() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data))
  }, [])

  return (
    <>
      <Header currentRoute="shop" />
      <Main>
        <ProductsContainer>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isNew={product.id % 5 === 0}
            />
          ))}
        </ProductsContainer>
      </Main>
      <Footer />
    </>
  )
}
