import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ScrollToTop from './utils/scrollToTop'
import ToastNotification from './components/ToastNotification/ToastNotification'
import { Check, X, AlertTriangle } from 'react-feather'

const NOTIFICATIONS = {
  itemAdded: false,
  itemRemoved: false,
  emptyCart: false,
}

function App() {
  const CART_LIMIT = 99
  const [cart, setCart] = useState([])
  const [notifications, setNotifications] = useState(NOTIFICATIONS)

  function updateNotifications(notificationToUpdate, newState) {
    setNotifications({ ...notifications, [notificationToUpdate]: newState })
  }

  useEffect(() => {
    if (notifications.itemAdded) {
      setTimeout(() => {
        updateNotifications('itemAdded', false)
      }, 3501) // animation duration + 1ms delay
    }
    if (notifications.itemRemoved) {
      setTimeout(() => {
        updateNotifications('itemRemoved', false)
      }, 3501)
    }
    if (notifications.emptyCart) {
      setTimeout(() => {
        updateNotifications('emptyCart', false)
      }, 3501)
    }
  }, [notifications])

  function getTotalItems() {
    return cart.reduce((count, item) => count + item.quantity, 0)
  }

  function addToCart(product, quantity) {
    if (!product?.id || quantity <= 0 || quantity === '') return
    if (!notifications.itemAdded) updateNotifications('itemAdded', true)

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
    if (!notifications.itemRemoved) updateNotifications('itemRemoved', true)
  }

  function clearCart() {
    setCart([])
  }

  const cartContext = {
    items: cart,
    addItem: addToCart,
    removeItem: removeFromCart,
    decreaseQuantity,
    clearCart,
    notificateEmptyCart: () => updateNotifications('emptyCart', true),
  }

  return (
    <ScrollToTop>
      <>
        <Header cartProductsCount={getTotalItems()} />
        {notifications.itemAdded && (
          <ToastNotification text={'Added to cart'}>
            <Check color="#38b000" />
          </ToastNotification>
        )}
        {notifications.itemRemoved && (
          <ToastNotification text={'Removed from cart'}>
            <X color="#ef233c" />
          </ToastNotification>
        )}
        {notifications.emptyCart && (
          <ToastNotification text={'Empty cart'}>
            <AlertTriangle color="#ff8800" />
          </ToastNotification>
        )}
        <Outlet context={cartContext} />
        <Footer />
      </>
    </ScrollToTop>
  )
}

export default App
