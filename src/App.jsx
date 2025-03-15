import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import NotificationsManager from './components/NotificationsManager/NotificationsManager'
import ModalsManager from './components/ModalsManager/ModalsManager'
import useNotifications from './hooks/useNotifications'
import useModals from './hooks/useModals'

function App() {
  const MAX_CART_QUANTITY = 99
  const [cart, setCart] = useState([])
  const { modals, handleSetModals, getModalElement } = useModals()
  const { notifications, handleSetNotifications, getNotificationElement } =
    useNotifications()

  function getCartTotalQuantity() {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  function addProductToCart(product, quantity) {
    if (!product?.id || quantity <= 0 || quantity === '') return

    if (getCartTotalQuantity() === MAX_CART_QUANTITY) {
      handleSetModals('cartLimitReached', true)
      return
    }

    if (getCartTotalQuantity() + quantity > MAX_CART_QUANTITY) {
      handleSetModals('quantityExceedsLimit', true)
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

    if (!notifications.productAdded)
      handleSetNotifications('productAdded', true)
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
    if (!notifications.productRemoved)
      handleSetNotifications('productRemoved', true)
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
    notifyEmptyCart: () => handleSetNotifications('emptyCart', true),
  }

  return (
    <>
      <Header cartProductsCount={getCartTotalQuantity()} />
      <NotificationsManager
        notifications={notifications}
        getNotificationElement={getNotificationElement}
      />
      <ModalsManager modals={modals} getModalElement={getModalElement} />
      <Outlet context={cartContext} />
      <Footer />
    </>
  )
}

export default App
