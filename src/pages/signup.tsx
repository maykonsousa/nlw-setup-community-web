import VerticalLogo from "../assets/logoVertical.svg";
import Image from "next/image";
import {
  ActionContainer,
  SignUpContainer,
  SignUpContent,
  SignUpForm,
} from "../styles/pages/signUp.styles";
import { useState } from "react";
import axios from "axios";
import { FormRocketVerify } from "../components/FormRocketVerify";
import { FormSignUp } from "../components/FormSignUp";
import Link from "next/link";
import { GetUserByUsernameService } from "../services/GetUserByUsername.service";

const SignUp = () => {
  const [registerAuthorized, setRegisterAuthorized] = useState(false);
  const [nlwUserName, setNlwUserName] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const userExistsVerify = async () => {
    const url = `https://skylab-api.rocketseat.com.br/public/event/nlw-setup/referral/${nlwUserName}`;
    if (!nlwUserName) {
      setError("Usuário não informado");
      return;
    }

    try {
      await axios.get(url);
      setNlwUserName(nlwUserName);
      const userInBase = await GetUserByUsernameService(nlwUserName);
      if (userInBase) {
        setError("Usuário já cadastrado. Acesse a página de login");
        return;
      }
      setRegisterAuthorized(true);
    } catch {
      setRegisterAuthorized(false);
      setError("Usuário não encontrado");
    }
  };

  return (
    <SignUpContainer>
      <SignUpForm>
        <h1>Cadastrar</h1>

        {registerAuthorized ? (
          <FormSignUp user={nlwUserName} />
        ) : (
          <FormRocketVerify
            error={error}
            user={nlwUserName}
            onUserVerify={userExistsVerify}
            onChangeUser={setNlwUserName}
            onSetError={setError}
          />
        )}
        <div>
          <p>
            Já tem cadastro? <Link href="/">Fazer Login</Link>
          </p>
        </div>
      </SignUpForm>
      <SignUpContent>
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
            href="https://nlw.rocketseat.com.br/convite/maykon-236"
            target="_blank"
            rel="noreferrer"
          >
            Embarcar nesse foguete
          </a>
        </ActionContainer>
      </SignUpContent>
    </SignUpContainer>
  );
};

export default SignUp;
