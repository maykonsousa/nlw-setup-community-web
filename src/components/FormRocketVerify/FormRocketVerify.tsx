import React from "react";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { ToolTipInfo } from "../ToolTipInfo/ToolTipInfo";
import { FormContainer } from "./FormRocketVerify.styles";

interface FormRocketVerifyProps {
  error: string | null;
  user: string;
  onUserVerify: () => void;
  onChangeUser: (user: string) => void;
  onSetError: (error: null) => void;
}

export const FormRocketVerify = ({
  error,
  user,
  onUserVerify,
  onChangeUser,
  onSetError,
}: FormRocketVerifyProps) => {
  const [username, setUsername] = React.useState("");

  return (
    <FormContainer
      onSubmit={(e) => {
        e.preventDefault();
        onUserVerify();
      }}
    >
      <div>
        <label htmlFor="">
          <span>Usuário NLW</span>
          <ToolTipInfo message="Disponível no seu link de convite" />
        </label>
        <div>
          <input
            type="text"
            placeholder="Usuário NLW"
            value={user}
            onChange={(e) => {
              onChangeUser(e.target.value);
              onSetError(null);
            }}
          />
          <button type="submit">
            <HiMagnifyingGlassPlus size={24} />
          </button>
        </div>

        {error ? <small>{error}</small> : null}
      </div>
    </FormContainer>
  );
};
