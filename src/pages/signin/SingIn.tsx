import VerticalLogo from "../../assets/logoVertical.svg";
import Image from "next/image";
import {
  ActionContainer,
  SignInContainer,
  SignInContent,
  SignInForm,
} from "./signIn.styles";
import Link from "next/link";
import { FormSignIn } from "../../components/FormSignIn";

export const SignIn = () => {
  return (
    <SignInContainer>
      <SignInContent>
        <Image src={VerticalLogo} alt="logo" />
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
    </SignInContainer>
  );
};
