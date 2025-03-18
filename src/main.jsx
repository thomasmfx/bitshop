import isPropValid from '@emotion/is-prop-valid';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider, StyleSheetManager } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/globals';
import routes from './routes';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </StyleSheetManager>
  </StrictMode>,
);
