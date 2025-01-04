import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @charset "UTF-8";

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img, picture, svg, video, canvas {
    display: block;
    max-width: 100%;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  input, button, textarea, select {
    font: inherit;
  }

  body {
    min-height: 100vh;
    width: 100%;
    display: grid;
    grid-template-rows: min-content 1fr;
    color: ${({ theme }) => theme.colors.default};
  }
`

export default GlobalStyles