import { useState, useEffect } from 'react'
import styled from 'styled-components'
import ProductCard from '../../components/ProductCard/ProductCard'
import fetchProducts from '../../utils/fetchProducts'
import { useOutletContext } from 'react-router-dom'

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5em;
  padding: 6em;
  padding-bottom: 10em;
  padding-top: 10em;
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
  const { addProduct } = useOutletContext()

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data))
  }, [])

  return (
    <>
      <Main>
        <ProductsContainer>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isNew={product.id % 5 === 0}
              onAddProduct={addProduct}
            />
          ))}
        </ProductsContainer>
      </Main>
    </>
  )
}
