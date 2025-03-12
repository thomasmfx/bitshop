import { useState, useEffect } from "react"
import { Check, X, AlertTriangle } from "react-feather"
import ToastNotification from "../components/ToastNotification/ToastNotification"

const NOTIFICATIONS_STATE = {
  productAdded: false,
  productRemoved: false,
  emptyCart: false
}

const NOTIFICATIONS_COMPONENTS = {
  productAdded: 
    <ToastNotification text={'Added to cart'}>
      <Check color="#38b000" />
    </ToastNotification> 
  ,
  productRemoved: 
    <ToastNotification text={'Removed from cart'}>
      <X color="#ef233c" />
    </ToastNotification>
  ,
  emptyCart: 
    <ToastNotification text={'Empty cart'}>
      <AlertTriangle color="#ff8800" />
    </ToastNotification>
  
}

export default function useNotifications(timeout = 3500) {
  const [notifications, setNotifications] = useState(NOTIFICATIONS_STATE)

  function handleSetNotifications(name, isActive) {
    setNotifications((prevState) => ({
      ...prevState,
      [name]: isActive,
    }))
  }

  function getNotificationElement(name) {
    if (notifications[name] && NOTIFICATIONS_COMPONENTS[name]) {
      return NOTIFICATIONS_COMPONENTS[name];
    }
    return null;
  }

  useEffect(() => {
    Object.entries(notifications).forEach(([name, isActive]) => {
      if (isActive) {
        setTimeout(() => {
          handleSetNotifications(name, false)
        }, timeout)
      }
    })
  }, [notifications])

  return {
    notifications,
    handleSetNotifications,
    getNotificationElement 
  }
}