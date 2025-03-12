import { useState } from 'react'
import Modal from '../components/Modal/Modal'

const MODALS_STATE = {
  cartLimitReached: false,
  quantityExceedsLimit: false,
}

const MODALS_COMPONENTS = {
  cartLimitReached: (onCloseModal) => (
    <Modal
      message={
        'Cart limit of 99 items reached. Please complete your current purchase to add more items.'
      }
      onCloseModal={() => onCloseModal('cartLimitReached', false)}
    />
  ),
  quantityExceedsLimit: (onCloseModal) => (
    <Modal
      message={
        'This action exceeds the cart limit of 99 items. Please adjust the quantity or complete your current purchase.'
      }
      onCloseModal={() => onCloseModal('quantityExceedsLimit', false)}
    />
  ),
}

export default function useModals() {
  const [modals, setModals] = useState(MODALS_STATE)

  function handleSetModals(name, isActive) {
    setModals((prevState) => ({
      ...prevState,
      [name]: isActive,
    }))
  }

  function getModalElement(name) {
    if (modals[name] && MODALS_COMPONENTS[name]) {
      const modalComponent = MODALS_COMPONENTS[name]
      return modalComponent(handleSetModals)
    }
    return null
  }

  return {
    modals,
    handleSetModals,
    getModalElement,
  }
}
