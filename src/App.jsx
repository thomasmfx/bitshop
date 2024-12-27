import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const [cartProducts, setCartProducts] = useState([])

  function handleAddProduct(product, quantity) {
    if (cartProducts.length === 99) {
      alert(
        'Cart limit of 99 items reached. Please complete your current purchase to add more items.',
      )
      return
    }

    if (cartProducts.length + quantity > 99) {
      alert(
        'This action exceeds the cart limit of 99 items. Please adjust the quantity or complete your current purchase.',
      )
      return
    }

    if (quantity <= 0) return
    setCartProducts((prev) => [...prev, ...Array(quantity).fill(product)])
  }

  const cartContext = {
    cartProducts,
    addProduct: handleAddProduct,
  }

  return (
    <>
      <Header cartProductsCount={cartProducts.length} />
      <Outlet context={cartContext} />
      <Footer />
    </>
  )
}

export default App
