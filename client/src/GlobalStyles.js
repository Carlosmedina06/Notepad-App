// globalStyles.js
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    scroll-behavior: smooth;
    list-style: none;
    body {
      background-color: ${({ theme }) => theme.bg};
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }

`

export default GlobalStyle
