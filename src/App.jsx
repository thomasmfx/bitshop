import { Outlet, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const [cartProducts, setCartProducts] = useState([])
  const currentRoute = useLocation().pathname

  function handleAddProduct(product, quantity) {
    if (quantity <= 0) return
    setCartProducts((prev) => [...prev, ...Array(quantity).fill(product)])
  }

  const cartContext = {
    cartProducts,
    addProduct: handleAddProduct,
  }

  return (
    <>
      <Header
        currentRoute={currentRoute}
        cartProductsCount={cartProducts.length}
      />
      <Outlet context={cartContext} />
      <Footer />
    </>
  )
}

export default App
