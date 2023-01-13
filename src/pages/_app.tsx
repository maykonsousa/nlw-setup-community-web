/// <reference types="styled-components/cssprop" />
import type { AppProps } from "next/app";
import type {} from "styled-components/cssprop";
import { GlobalStyle } from "../styles/global";
import { ThemeProvider } from "styled-components";
import { Default } from "../styles/themes/default";
import { AppContainer, MainContainer } from "../styles/pages/app.styles";
import { UserProvider } from "../contexts/UserContext";
import Head from "next/head";
import { Footer } from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Default}>
      <UserProvider>
        <GlobalStyle />
        <Head>
          <title>NLW Community</title>
        </Head>
        <AppContainer>
          <MainContainer>
            <Component {...pageProps} />
            <Footer />
          </MainContainer>
        </AppContainer>
      </UserProvider>
    </ThemeProvider>
  );
}
