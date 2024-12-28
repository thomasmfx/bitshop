import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const [cartProducts, setCartProducts] = useState([])

  console.log(cartProducts)

  function handleAddProduct(newProduct, quantity) {
    if (quantity <= 0 || quantity === '') return
    if (!cartProducts.length) {
      newProduct.quantity = quantity
      setCartProducts([newProduct])
      return
    }
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

    const newCart = [];

    cartProducts.map((product) => {
      if (product.id === newProduct.id) {
        newProduct.quantity = product.quantity + quantity;
        newCart.push(newProduct)
      } else {
        newCart.push(product)
      }
    })
    
    setCartProducts([...newCart])
  }

  function getCartProductsCount() {
    let count = 0;
    cartProducts.map((product) => count += product.quantity)
    return count;
  }

  const cartContext = {
    cartProducts,
    addProduct: handleAddProduct,
  }

  return (
    <>
      <Header cartProductsCount={getCartProductsCount()} />
      <Outlet context={cartContext} />
      <Footer />
    </>
  )
}

export default App
