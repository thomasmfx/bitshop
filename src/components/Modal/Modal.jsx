import * as S from './Modal.styles'
import PropTypes from 'prop-types'

function Modal({ message, onCloseModal }) {
  return (
    <S.ModalContainer>
      <S.Modal>
        <S.ModalMessage>{message}</S.ModalMessage>
        <S.ButtonCloseModal onClick={onCloseModal}>OK</S.ButtonCloseModal>
      </S.Modal>
    </S.ModalContainer>
  )
}

Modal.propTypes = {
  message: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
}

export default Modal
