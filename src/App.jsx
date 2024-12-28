import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const CART_LIMIT = 99
  const [cart, setCart] = useState([])

  function getTotalItems() {
    return cart.reduce((count, item) => count + item.quantity, 0)
  }

  function addToCart(product, quantity) {
    if (!product?.id || quantity <= 0 || quantity === '') return

    if (!cart.length) {
      if (quantity > CART_LIMIT) {
        alert(
          'This action exceeds the cart limit of 99 items. Please adjust the quantity or complete your current purchase.',
        )
        return
      }
      setCart([{ ...product, quantity }])
      return
    }

    if (getTotalItems() === CART_LIMIT) {
      alert(
        'Cart limit of 99 items reached. Please complete your current purchase to add more items.',
      )
      return
    }

    if (getTotalItems() + quantity > CART_LIMIT) {
      alert(
        'This action exceeds the cart limit of 99 items. Please adjust the quantity or complete your current purchase.',
      )
      return
    }

    let productExists = false
    const updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        productExists = true
        return {
          ...item,
          quantity: item.quantity + quantity,
        }
      }
      return item
    })

    if (!productExists) {
      updatedCart.push({
        ...product,
        quantity,
      })
    }

    setCart(updatedCart)
  }

  function decreaseQuantity(product, amount) {
    if (amount > product.quantity || product.quantity - amount <= 0) return

    const updatedCart = cart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity - amount }
        : item,
    )

    setCart(updatedCart)
  }

  function removeFromCart(product) {
    setCart(cart.filter((item) => item.id !== product.id))
  }

  const cartContext = {
    items: cart,
    addItem: addToCart,
    removeItem: removeFromCart,
    decreaseQuantity,
  }

  return (
    <>
      <Header cartProductsCount={getTotalItems()} />
      <Outlet context={cartContext} />
      <Footer />
    </>
  )
}

export default App
