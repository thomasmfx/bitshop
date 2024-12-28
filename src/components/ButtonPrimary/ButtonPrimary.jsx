import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = styled.button`
  padding: ${(props) => (props.size === 'l' ? '0.5em 1em' : '0.3em 0.5em')};
  font-size: ${(props) => (props.size === 'l' ? '1.2rem' : '0.9rem')};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  width: 100%;

  background-color: var(--color-primary);
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--color-quaternary);
  }
`

const Span = styled.span``

function ButtonPrimary({ text, type, size, children, onClick }) {
  return (
    <Button type={type} onClick={onClick} size={size}>
      {children}
      <Span>{text}</Span>
    </Button>
  )
}

ButtonPrimary.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.element,
  onClick: PropTypes.func,
}

export default ButtonPrimary
