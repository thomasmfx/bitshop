import styled from 'styled-components'
import { textColor } from '../shared/mixins'

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 2;
  background-color: rgba(108, 117, 125, 0.47);
  min-height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background-color: #fff;
  width: 250px;
  height: 250px;
  padding: 1em;
  gap: 1.5em;
`

export const ModalMessage = styled.p`
  text-align: center;
`

export const ButtonCloseModal = styled.div`
  ${textColor('brandPrimary')};
  font-weight: 600;
  cursor: pointer;
`
