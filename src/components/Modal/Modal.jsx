import * as S from './Modal.styles'

function Modal({ message, onCloseModal }) {
  return (
    <S.ModalContainer>
      <S.Modal>
        <S.ModalMessage>
          {message}
        </S.ModalMessage>
        <S.ButtonCloseModal onClick={onCloseModal}>OK</S.ButtonCloseModal>
      </S.Modal>
    </S.ModalContainer>
  )
}

export default Modal