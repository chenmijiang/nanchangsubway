/** @format */

import '@/styles/reset.css'
import '@/styles/globals.css'

import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'
import styled from 'styled-components'
import { Provider } from 'react-redux'

import { store } from '@/store'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import theme from '@/styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Containter>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Containter>
      </Provider>
    </ThemeProvider>
  )
}

const Containter = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr 200px;
`
