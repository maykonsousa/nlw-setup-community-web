import Router from "next/router";
import { Trash } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { CreateUser } from "../../services/PostUser.service";
import { Input } from "../Input";
import { ButtonsContainer, FormSignUpContainer } from "./FormSignUp.styles";

interface Ivalues {
  username: string | null;
  fullName: string | null;
  githubProfile: string | null;
  linkedinProfile: string | null;
  rocketseatProfile: string | null;
  password: string | null;
  passwordConfirmation: string | null;
}

const initialErrors = {
  username: null,
  fullName: null,
  githubProfile: null,
  linkedinProfile: null,
  rocketseatProfile: null,
  password: null,
  passwordConfirmation: null,
};

interface FormSignUpProps {
  user: string;
}

export const FormSignUp = ({ user }: FormSignUpProps) => {
  const initialFormState = {
    username: user,
    fullName: "",
    githubProfile: "",
    linkedinProfile: "",
    rocketseatProfile: "",
    password: "",
    passwordConfirmation: "",
  };
  const [errors, setErrors] = useState<Ivalues>(initialErrors);
  const [formState, setFormState] = useState(initialFormState);

  const validadteValues = (values: Ivalues): boolean => {
    const newErrors: Ivalues = { ...initialErrors };
    if (!values.fullName) {
      newErrors.fullName = "Nome e Sobrenome obrigatório";
    }
    if (values.githubProfile) {
      const baseurl = "https://github.com/";
      const url = values.githubProfile;
      if (!url.startsWith(baseurl)) {
        newErrors.githubProfile = "URL do Github inválida";
      }
    }
    if (values.linkedinProfile) {
      const baseurl = "https://www.linkedin.com/in/";
      const url = values.linkedinProfile;
      if (!url.startsWith(baseurl)) {
        newErrors.linkedinProfile = "URL do Linkedin inválida";
      }
    }
    if (values.rocketseatProfile) {
      const baseurl = "https://app.rocketseat.com.br/me/";
      const url = values.rocketseatProfile;
      if (!url.startsWith(baseurl)) {
        newErrors.rocketseatProfile = "URL da Rocketseat inválida";
      }
    }
    if (!values.password) {
      newErrors.password = "Senha obrigatória";
    }
    if (!values.passwordConfirmation) {
      newErrors.passwordConfirmation = "Confirmação de senha obrigatória";
    }
    if (values.password !== values.passwordConfirmation) {
      newErrors.passwordConfirmation = "Senhas não conferem";
    }
    setErrors({ ...newErrors });
    const hasError = !!Object.values(newErrors).find((error) => error);

    return hasError;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const hasError = validadteValues(formState);

    if (hasError) {
      return;
    }

    await CreateUser({
      username: formState.username,
      fullName: formState.fullName,
      githubProfile: formState.githubProfile,
      linkedinProfile: formState.linkedinProfile,
      rocketseatProfile: formState.rocketseatProfile,
      password: formState.password,
    });

    //redirect to login
    Router.push("/");
  };

  const handleClean = () => {
    setFormState({ ...initialFormState, username: user });
    setErrors({ ...initialErrors });
  };
  return (
    <FormSignUpContainer onSubmit={handleSubmit}>
      <Input
        error={errors.fullName}
        label={"Nome e Sobrenome *"}
        name={"fullName"}
        placeholder={"Nome e Sobrenome"}
        value={formState.fullName}
        onChange={(e) => handleChange(e)}
      />

      <Input
        error={errors.githubProfile}
        label={"perfil do Github "}
        name={"githubProfile"}
        placeholder={"https://github.com/seusuario"}
        value={formState.githubProfile}
        onChange={(e) => handleChange(e)}
      />

      <Input
        error={errors.linkedinProfile}
        label={"Perfil do Linkedin"}
        name={"linkedinProfile"}
        placeholder={"https://linkedin.com/in/seusuario"}
        value={formState.linkedinProfile}
        onChange={(e) => handleChange(e)}
      />

      <Input
        error={errors.rocketseatProfile}
        label={"Perfil da Rocketseat"}
        name={"rocketseatProfile"}
        placeholder={"https://app.rocketseat.com.br/me/maykonsousa"}
        value={formState.rocketseatProfile}
        onChange={(e) => handleChange(e)}
      />

      <Input
        error={errors.password}
        label={"Senha *"}
        name={"password"}
        type={"password"}
        placeholder={"Sua senha"}
        value={formState.password}
        onChange={(e) => handleChange(e)}
      />
      <Input
        error={errors.passwordConfirmation}
        label={"Confirmar Senha *"}
        name={"passwordConfirmation"}
        type={"password"}
        placeholder={"Confirme sua senha"}
        value={formState.passwordConfirmation}
        onChange={(e) => handleChange(e)}
      />

      <ButtonsContainer>
        <button type="submit">Cadastrar</button>
        <button type="reset" className="reset" onClick={handleClean}>
          <Trash />
        </button>
      </ButtonsContainer>
    </FormSignUpContainer>
  );
};
