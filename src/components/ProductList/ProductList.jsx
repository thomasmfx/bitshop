import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import fetchProducts from '../../utils/fetchProducts'
import ProductCard from '../ProductCard/ProductCard'
import ProductCardLoader from '../Loaders/ProductCardLoader'
import isProductNew from '../../utils/isProductNew'
import * as S from './ProductList.styles'

export default function ProductList() {
  const [products, setProducts] = useState([])
  const { addItem } = useOutletContext()

  useEffect(() => {
    fetchProducts().then(setProducts)
  }, [])

  if (!products.length)
    return (
      <S.Main>
        <S.ProductsContainer>
          <ProductCardLoader />
          <ProductCardLoader />
          <ProductCardLoader />
          <ProductCardLoader />
          <ProductCardLoader />
          <ProductCardLoader />
        </S.ProductsContainer>
      </S.Main>
    )

  return (
    <S.Main>
      <S.ProductsContainer>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isNew={isProductNew(product)}
            onAddProduct={addItem}
          />
        ))}
      </S.ProductsContainer>
    </S.Main>
  )
}
