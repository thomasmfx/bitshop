import { Check, X, AlertTriangle } from 'react-feather'
import ToastNotification from '../ToastNotification/ToastNotification'
import Modal from '../Modal/Modal'
import { useEffect } from 'react'

// Modals included
function NotificationsManager({ notifications, updater }) {

  useEffect(() => {
    if (notifications.itemAdded) {
      setTimeout(() => {
        updater('itemAdded', false)
      }, 3501) // animation duration + 1ms delay
    }
    if (notifications.itemRemoved) {
      setTimeout(() => {
        updater('itemRemoved', false)
      }, 3501)
    }
    if (notifications.emptyCart) {
      setTimeout(() => {
        updater('emptyCart', false)
      }, 3501)
    }
  }, [notifications])

  return (
    <>
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
      {notifications.cartLimitReached && (
        <Modal 
          message={
            'Cart limit of 99 items reached. Please complete your current purchase to add more items.'
          }
          onCloseModal={() => updater('cartLimitReached', false)}
        />
      )}
      {notifications.actionExceedsCartLimit && (
        <Modal 
          message={
            'This action exceeds the cart limit of 99 items. Please adjust the quantity or complete your current purchase.'
          }
          onCloseModal={() => updater('actionExceedsCartLimit', false)}
        />
      )}
    </>
  )
}

export default NotificationsManager