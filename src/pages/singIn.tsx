import VerticalLogo from "../assets/logoVertical.svg";
import Image from "next/image";
import {
  ActionContainer,
  SignInContainer,
  SignInContent,
  SignInContentMobile,
  SignInForm,
} from "../styles/pages/signIn.styles";
import Link from "next/link";
import { FormSignIn } from "../components/FormSignIn";
import { parseCookies } from "nookies";
import Router from "next/router";
import { useEffect } from "react";

const SignIn = () => {
  const cookieToken = parseCookies().token;

  useEffect(() => {
    if (cookieToken) {
      Router.push("/ranking");
    }
  }, [cookieToken]);

  return (
    <SignInContainer>
      <SignInContent>
        <VerticalLogo />
        <h1>
          <span>COMMUNITY</span>
        </h1>
        <p>
          Plataforma independente para reunir a galera que tá participando do{" "}
          <span>NLW SETUP</span>
        </p>

        <ActionContainer>
          <p>Ainda não está participando do evento?</p>
          <a
            href={"https://nlw.rocketseat.com.br/convite/maykon-236"}
            target="_blank"
            rel="noreferrer"
          >
            Embarcar nesse foguete
          </a>
        </ActionContainer>
      </SignInContent>
      <SignInForm>
        <h1>Entrar</h1>

        <FormSignIn />

        <div>
          <p>
            Ainda não tem cadastro? <Link href="/signup">Cadastre-se</Link>
          </p>
          <p>
            Esqueceu a senha? <a>Recuperar</a>{" "}
          </p>
        </div>
      </SignInForm>

      <SignInContentMobile>
        <p>
          Plataforma independente para reunir a galera que tá participando do{" "}
          <span>NLW SETUP</span>
        </p>

        <p>
          Para se cadastrar{" "}
          <a
            href={"https://nlw.rocketseat.com.br/convite/maykon-236"}
            target="_blank"
            rel="noreferrer"
          >
            clique aqui
          </a>
        </p>
      </SignInContentMobile>
    </SignInContainer>
  );
};

export default SignIn;
