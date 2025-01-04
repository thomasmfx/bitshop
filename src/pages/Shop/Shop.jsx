import { useState, useEffect } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import fetchProducts from '../../utils/fetchProducts'
import { useOutletContext } from 'react-router-dom'
import * as S from './Shop.styles'

export default function Shop() {
  const [products, setProducts] = useState([])
  const { addItem } = useOutletContext()

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data))
  }, [])

  return (
    <S.Main>
      <S.ProductsContainer>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isNew={product.id % 5 === 0}
            onAddProduct={addItem}
          />
        ))}
      </S.ProductsContainer>
    </S.Main>
  )
}
