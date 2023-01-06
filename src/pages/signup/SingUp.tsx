import VerticalLogo from "../../assets/logoVertical.svg";
import Image from "next/image";
import {
  ActionContainer,
  SignUpContainer,
  SignUpContent,
  SignUpForm,
} from "./signUp.styles";
import { ToolTipInfo } from "../../components/ToolTipInfo/ToolTipInfo";
import { useState } from "react";
import axios from "axios";
import { FileSearch } from "phosphor-react";
import { FormRocketVerify } from "../../components/FormRocketVerify";
import { FormSignUp } from "../../components/FormSignUp";
import Link from "next/link";

const initialFormState = {
  username: "",
  password: "",
  passwordConfirmation: "",
  email: "",
  name: "",
  lastName: "",
};

export const SignUp = () => {
  const [userExists, setUserExists] = useState(false);
  const [nlwUserName, setNlwUserName] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  console.log("username", nlwUserName);
  console.log("error", error);

  const userExistsVerify = async () => {
    const url = `https://skylab-api.rocketseat.com.br/public/event/nlw-setup/referral/${nlwUserName}`;
    if (!nlwUserName) {
      setError("Usuário não informado");
      return;
    }

    try {
      await axios.get(url);
      setUserExists(true);
      setNlwUserName(nlwUserName);
    } catch {
      setUserExists(false);
      setError("Usuário não encontrado");
    }
  };

  return (
    <SignUpContainer>
      <SignUpForm>
        <h1>Cadastrar</h1>

        {userExists ? (
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
