import { Check, X, AlertTriangle } from 'react-feather'
import PropTypes from 'prop-types'
import ToastNotification from '../ToastNotification/ToastNotification'
import Modal from '../Modal/Modal'
import { useEffect } from 'react'

// Modals included
function NotificationsManager({ notifications, updater }) {
  useEffect(() => {
    if (notifications.productAdded) {
      setTimeout(() => {
        updater('productAdded', false)
      }, 3500)
    }
    if (notifications.productRemoved) {
      setTimeout(() => {
        updater('productRemoved', false)
      }, 3500)
    }
    if (notifications.cartEmpty) {
      setTimeout(() => {
        updater('cartEmpty', false)
      }, 3500)
    }
  }, [notifications, updater])

  return (
    <>
      {notifications.productAdded && (
        <ToastNotification text={'Added to cart'}>
          <Check color="#38b000" />
        </ToastNotification>
      )}
      {notifications.productRemoved && (
        <ToastNotification text={'Removed from cart'}>
          <X color="#ef233c" />
        </ToastNotification>
      )}
      {notifications.cartEmpty && (
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
      {notifications.quantityExceedsLimit && (
        <Modal
          message={
            'This action exceeds the cart limit of 99 items. Please adjust the quantity or complete your current purchase.'
          }
          onCloseModal={() => updater('quantityExceedsLimit', false)}
        />
      )}
    </>
  )
}

NotificationsManager.propTypes = {
  notifications: PropTypes.object.isRequired,
  updater: PropTypes.func.isRequired,
}

export default NotificationsManager
