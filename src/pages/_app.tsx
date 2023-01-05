/// <reference types="styled-components/cssprop" />
import type { AppProps } from 'next/app'
import type {} from 'styled-components/cssprop'
import { GlobalStyle } from '../../styles/global'
import { ThemeProvider } from 'styled-components'
import { Default } from '../../styles/themes/default'

export default function App({ Component, pageProps }: AppProps) {
  return (<ThemeProvider theme={Default}>
    <GlobalStyle/>
    <Component {...pageProps} />
  </ThemeProvider>)
}
