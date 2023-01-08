import Router from "next/router";
import { parseCookies } from "nookies";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Input } from "../Input";
import { FormContainer } from "./FormSignIn.styles";

export const FormSignIn = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const { onLogin } = useContext(UserContext);

  return (
    <FormContainer
      onSubmit={async (e) => {
        e.preventDefault();
        const { error } = await onLogin({ username, password });
        setErrorMessage(error);
      }}
    >
      <Input
        error={null}
        label="Usuário NLW"
        placeholder="Usuário NLW"
        value={username}
        name={"username"}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        error={null}
        label="Senha"
        placeholder="Senha"
        value={password}
        name={"username"}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Entrar</button>
      {errorMessage && <small>{errorMessage}</small>}
    </FormContainer>
  );
};
