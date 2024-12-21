import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLogo = styled.p`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '2rem')};
  font-weight: bold;
  color: ${'var(--color-primary)'};
`

function Logo({ size, removeDot }) {
  return <StyledLogo fontSize={size}>bitShop {!removeDot && '•'}</StyledLogo>
}

Logo.propTypes = {
  size: PropTypes.string,
  removeDot: PropTypes.bool,
}

export default Logo
