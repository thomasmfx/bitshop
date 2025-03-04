import styled from 'styled-components'
import PropTypes from 'prop-types'

const ToastCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  width: fit-content;
  height: 60px;
  padding-inline: 1em;
  margin: 4.5em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-inline: auto;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 2;
  animation: 3500ms dropdown;
  transform: translateY(-250%);
  opacity: 0;

  @keyframes dropdown {
    1% {
      opacity: 1;
    }

    25% {
      transform: translateY(0);
    }

    50% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const Text = styled.p`
  color: ${({ theme }) => theme.colors.default};
`

function ToastCardNotification({ text, children }) {
  return (
    <ToastCard>
      {children}
      <Text>{text}</Text>
    </ToastCard>
  )
}

ToastCardNotification.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
}

export default ToastCardNotification
