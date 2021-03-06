import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { UserProvider } from 'contexts/UserContext'
import Master from 'components/pages/master'
import { Normalize } from 'styled-normalize'
import theme from 'constants/theme'
import GlobalStyle from 'constants/globalStyle'
import Head from 'next/head'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <UserProvider>
          <GlobalStyle />
          <Normalize />
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
            />
          </Head>
          <Master>
            <Component {...pageProps} />
          </Master>
        </UserProvider>
      </ThemeProvider>
    )
  }
}
