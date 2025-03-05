import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ScrollToTop from './utils/scrollToTop'
import ToastNotification from './components/ToastNotification/ToastNotification'
import { Check, X } from 'react-feather'

function App() {
  const CART_LIMIT = 99
  const [cart, setCart] = useState([])
  const [wasItemAdded, setWasItemAdded] = useState(false)
  const [wasItemRemoved, setWasItemRemoved] = useState(false)

  useEffect(() => {
    if (wasItemAdded) {
      setTimeout(() => {
        setWasItemAdded(false)
      }, 3501) // animation duration + 1ms delay
    }
  }, [wasItemAdded])

  useEffect(() => {
    if (wasItemRemoved) {
      setTimeout(() => {
        setWasItemRemoved(false)
      }, 3501) // animation duration + 1ms delay
    }
  }, [wasItemRemoved])

  function getTotalItems() {
    return cart.reduce((count, item) => count + item.quantity, 0)
  }

  function addToCart(product, quantity) {
    if (!product?.id || quantity <= 0 || quantity === '') return
    if (!wasItemAdded) setWasItemAdded(true)

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
    if (!wasItemRemoved) setWasItemRemoved(true)
  }

  function clearCart() {
    setCart([])
  }

  const cartContext = {
    items: cart,
    addItem: addToCart,
    removeItem: removeFromCart,
    decreaseQuantity,
    clearCart
  }

  return (
    <ScrollToTop>
      <>
        <Header cartProductsCount={getTotalItems()} />
        {wasItemAdded && (
          <ToastNotification text={'Added to cart'}>
            <Check color="#38b000" />
          </ToastNotification>
        )}
        {wasItemRemoved && (
          <ToastNotification text={'Removed from cart'}>
            <X color="#ef233c" />
          </ToastNotification>
        )}
        <Outlet context={cartContext} />
        <Footer />
      </>
    </ScrollToTop>
  )
}

export default App
