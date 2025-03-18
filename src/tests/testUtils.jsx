import isPropValid from '@emotion/is-prop-valid';
import PropTypes from 'prop-types';
import { useLocation, MemoryRouter } from 'react-router-dom';
import { ThemeProvider, StyleSheetManager } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyles from '../styles/globals';

function TestWrapper({ children }) {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MemoryRouter>{children}</MemoryRouter>
      </ThemeProvider>
    </StyleSheetManager>
  );
}

function LocationDisplay() {
  const location = useLocation();

  return <div data-testid="location-display">{location.pathname}</div>;
}

TestWrapper.propTypes = {
  children: PropTypes.node,
  withOutlet: PropTypes.bool, // Nova prop para controlar o uso do Outlet
};

export { TestWrapper, LocationDisplay };
