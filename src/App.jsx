import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import NotificationsManager from './components/NotificationsManager/NotificationsManager'
import ScrollToTop from './utils/ScrollToTop'

const initialNotificationState = {
  productAdded: false,
  productRemoved: false,
  cartEmpty: false,
  cartLimitReached: false,
  quantityExceedsLimit: false,
}

function App() {
  const MAX_CART_QUANTITY = 99
  const [cart, setCart] = useState([])
  const [notificationStates, setNotificationStates] = useState(
    initialNotificationState,
  )

  function updateNotificationState(notificationType, isActive) {
    setNotificationStates((prevStates) => ({
      ...prevStates,
      [notificationType]: isActive,
    }))
  }

  function getCartTotalQuantity() {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  function addProductToCart(product, quantity) {
    if (!product?.id || quantity <= 0 || quantity === '') return

    if (cart.length === 0) {
      if (quantity > MAX_CART_QUANTITY) {
        updateNotificationState('quantityExceedsLimit', true)
        return
      }

      if (!notificationStates.productAdded)
        updateNotificationState('productAdded', true)
      setCart([{ ...product, quantity }])
      return
    }

    if (getCartTotalQuantity() === MAX_CART_QUANTITY) {
      updateNotificationState('cartLimitReached', true)
      return
    }

    if (getCartTotalQuantity() + quantity > MAX_CART_QUANTITY) {
      updateNotificationState('quantityExceedsLimit', true)
      return
    }

    let isProductInCart = false
    const updatedCartItems = cart.map((item) => {
      if (item.id === product.id) {
        isProductInCart = true
        return {
          ...item,
          quantity: item.quantity + quantity,
        }
      }
      return item
    })

    if (!isProductInCart) {
      updatedCartItems.push({
        ...product,
        quantity,
      })
    }

    if (!notificationStates.productAdded)
      updateNotificationState('productAdded', true)
    setCart(updatedCartItems)
  }

  function decreaseProductQuantity(product, quantity) {
    if (quantity > product.quantity || product.quantity - quantity <= 0) return

    const updatedCartItems = cart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity - quantity }
        : item,
    )

    setCart(updatedCartItems)
  }

  function removeProductFromCart(product) {
    setCart(cart.filter((item) => item.id !== product.id))
    if (!notificationStates.productRemoved)
      updateNotificationState('productRemoved', true)
  }

  function clearCartItems() {
    setCart([])
  }

  const cartContext = {
    cartProducts: cart,
    addProduct: addProductToCart,
    removeProduct: removeProductFromCart,
    decreaseProductQuantity: decreaseProductQuantity,
    clearCart: clearCartItems,
    getCartTotalQuantity: getCartTotalQuantity,
    notifyEmptyCart: () => updateNotificationState('cartEmpty', true),
  }

  return (
    <>
      <ScrollToTop />
      <Header cartProductsCount={getCartTotalQuantity()} />
      <NotificationsManager
        notifications={notificationStates}
        updater={updateNotificationState}
      />
      <Outlet context={cartContext} />
      <Footer />
    </>
  )
}

export default App
