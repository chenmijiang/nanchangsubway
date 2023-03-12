/** @format */

import '@/styles/reset.css'
import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'
import Header from '@/components/Header'

import theme from '@/styles/theme'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}
