import React from "react";
import { FiCheckSquare } from "react-icons/fi";
import { TiWarningOutline } from "react-icons/ti";
import { RotatingLines } from "react-loader-spinner";
import {
  ConfirmModalContainer,
  ErrorContainer,
  SuccessContainer,
} from "./EditProfileModal.styles";

interface ConfirmRequestProps {
  loading: boolean;
  success: boolean;
  error: boolean;
}

export const ConfirmRequest = ({
  loading,
  success,
  error,
}: ConfirmRequestProps) => {
  return (
    <ConfirmModalContainer>
      {loading && (
        <RotatingLines
          strokeColor="green"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}

      {success && (
        <SuccessContainer>
          <FiCheckSquare size={120} />
          <p>Dados Atualizados com sucesso!</p>
        </SuccessContainer>
      )}
      {error && (
        <ErrorContainer>
          <TiWarningOutline size={120} />
          <p>Falha ao Atualizar os dados. Tente Novamente mais tarde!</p>
        </ErrorContainer>
      )}
    </ConfirmModalContainer>
  );
};
