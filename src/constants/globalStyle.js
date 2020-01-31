import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {   
    box-sizing: inherit;
    border: none;
  }

  ul {
    list-style: none;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 2em;
    font-size:10px;
  }

  * {
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle
