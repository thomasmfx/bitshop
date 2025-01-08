import { Circle } from 'react-feather'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLogo = styled.p`
  display: flex;
  align-items: center;
  gap: 0.2em;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '2rem')};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.brandPrimary};

  > svg {
    min-width: 10px;
    width: 10px;
  }

  @media (max-width: 642px) {
    > span {
      display: none;
    }

    > svg {
      width: 18px;
    }
  }
`

const Span = styled.span``

function Logo({ size }) {
  return (
    <StyledLogo fontSize={size}>
      <Span>bitShop</Span>
      <Circle fill="#188efe" />
    </StyledLogo>
  )
}

Logo.propTypes = {
  size: PropTypes.string,
}

export default Logo
