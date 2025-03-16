import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import { useLocation, BrowserRouter } from 'react-router-dom'
import { ThemeProvider, StyleSheetManager } from 'styled-components'
import theme from '../styles/theme'
import GlobalStyles from '../styles/globals'

function TestWrapper({ children }) {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </StyleSheetManager>
  )
}

function LocationDisplay() {
  const location = useLocation()

  return <div data-testid="location-display">{location.pathname}</div>
}

TestWrapper.propTypes = {
  children: PropTypes.node,
}

export { TestWrapper, LocationDisplay }
