import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ScrollToTop from './utils/scrollToTop'
import NotificationsManager from './components/NotificationsManager/NotificationsManager'

const initialNotificationsState = {
  itemAdded: false,
  itemRemoved: false,
  emptyCart: false,
  cartLimitReached: false,
  actionExceedsCartLimit: false
}

function App() {
  const CART_LIMIT = 99
  const [cart, setCart] = useState([])
  const [notifications, setNotifications] = useState(initialNotificationsState)

  function updateNotifications(notification, newState) {
    setNotifications(prevState => ({ ...prevState, [notification]: newState }))
  }

  function getTotalItems() {
    return cart.reduce((count, item) => count + item.quantity, 0)
  }

  function addToCart(product, quantity) {
    if (!product?.id || quantity <= 0 || quantity === '') return

    if (!cart.length) {
      if (quantity > CART_LIMIT) {
        updateNotifications('actionExceedsCartLimit', true)
        return
      }
      
      if (!notifications.itemAdded) updateNotifications('itemAdded', true)
      setCart([{ ...product, quantity }])
      return
    }

    if (getTotalItems() === CART_LIMIT) {
      updateNotifications('cartLimitReached', true)
      return
    }

    if (getTotalItems() + quantity > CART_LIMIT) {
      updateNotifications('actionExceedsCartLimit', true)

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

    if (!notifications.itemAdded) updateNotifications('itemAdded', true)
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
        <NotificationsManager 
          notifications={notifications}
          updater={updateNotifications}

        />
        <Outlet context={cartContext} />
        <Footer />
      </>
    </ScrollToTop>
  )
}

export default App
