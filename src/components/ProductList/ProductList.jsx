import { useState, useEffect } from 'react';
import fetchProducts from '../../utils/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import ProductCardLoader from '../Loaders/ProductCardLoader';
import * as S from './ProductList.styles';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

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
    );

  return (
    <S.Main>
      <S.ProductsContainer>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </S.ProductsContainer>
    </S.Main>
  );
}
