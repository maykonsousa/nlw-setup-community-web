/// <reference types="styled-components/cssprop" />
import type { AppProps } from "next/app";
import type {} from "styled-components/cssprop";
import { useRouter } from "next/router";
import { GlobalStyle } from "../styles/global";
import { ThemeProvider } from "styled-components";
import { Default } from "../styles/themes/default";
import { AppContainer, MainContainer } from "../styles/pages/app.styles";
import { UserProvider } from "../contexts/UserContext";
import Head from "next/head";
import { Footer } from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const { pathname } = router;

  return (
    <ThemeProvider theme={Default}>
      <UserProvider>
        <GlobalStyle />
        <Head>
          <title>NLW Community</title>
          <meta property="og:title" content="NLW Community" key="title" />
          <meta
            property="og:image"
            content="https://uploaddeimagens.com.br/images/004/300/801/original/Screenshot_from_2023-01-16_14-34-49.png?1673890503"
          />
          <meta property="og:image:type" content="image/jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="NLW Community" />
          <meta
            property="og:description"
            content="Plataforma independente criada exclusivamente para reunir os aluos do NLW SETUP. Cadastre-se e tenha acesso á rankind de indicações e redes sociais de outros usuários"
          />
        </Head>
        <AppContainer>
          <MainContainer>
            <Component {...pageProps} />
            {pathname !== "/about" && <Footer />}
          </MainContainer>
        </AppContainer>
      </UserProvider>
    </ThemeProvider>
  );
}
