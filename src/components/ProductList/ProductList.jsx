import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import fetchProducts from '../../utils/fetchProducts'
import ProductCard from '../ProductCard/ProductCard'
import * as S from './ProductList.styles'

export default function ProductList() {
  const [products, setProducts] = useState([])
  const { addItem } = useOutletContext()

  useEffect(() => {
    fetchProducts().then(setProducts)
  }, [])

  return (
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
  )
}
