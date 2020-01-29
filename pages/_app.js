import App from 'next/app'
import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { UserProvider } from 'contexts/UserContext'
import Master from 'components/pages/master'

// TODO: Move breakpoints and theme to a separate file
const smallMinWidth = 320

const mediumMinWidth = 764

const largeMinWidth = 1028

const extraLargeMinWidth = 1366
const breakpoints = ['0', '764px', '1028px', '1366px']

breakpoints.s = breakpoints[0]
breakpoints.m = breakpoints[1]
breakpoints.l = breakpoints[2]
breakpoints.xl = breakpoints[3]

const theme = {
  colors: {
    black: '#000e1a',
    white: '#fff',
    blue: '#007ce0',
    navy: '#004175'
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints
}

// TODO: Add a CSS reset / normalize here
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

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <UserProvider>
          <GlobalStyle />
          <Master>
            <Component {...pageProps} />
          </Master>
        </UserProvider>
      </ThemeProvider>
    )
  }
}
