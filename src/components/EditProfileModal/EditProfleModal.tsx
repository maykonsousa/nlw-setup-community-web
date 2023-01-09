import { X } from "phosphor-react";
import React, { useContext, useState } from "react";
import ReactModal from "react-modal";
import { UserContext } from "../../contexts/UserContext";
import { Default } from "../../styles/themes/default";
import { Button } from "../Button";
import { Input } from "../Input";
import { ConfirmRequest } from "./ConfirmRequest";
import {
  EditButtonContainer,
  ModalContainer,
  ModalHeader,
} from "./EditProfileModal.styles";

const { colors } = Default;
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    backgroundColor: colors["color-background"],
    width: "30rem",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },

  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

interface Ivalues {
  fullName: string | null;
  githubProfile: string | null;
  linkedinProfile: string | null;
  rocketseatProfile: string | null;
  password: string | null;
  confirmPassword: string | null;
}

export const EditProfleModal = () => {
  const { setShowEditModal, showEditModal, user, onEditAccount } =
    useContext(UserContext);

  const { fullName, githubProfile, linkedinProfile, rocketseatProfile } = user;

  const initialErrors = {
    fullName: null,
    githubProfile: null,
    linkedinProfile: null,
    rocketseatProfile: null,
    password: null,
    confirmPassword: null,
  };

  const initilFormState = {
    fullName: fullName,
    githubProfile: githubProfile,
    linkedinProfile: linkedinProfile,
    rocketseatProfile: rocketseatProfile,
    password: "",
    confirmPassword: "",
  };

  const [formState, setFormState] = useState(initilFormState);
  const [errors, setErrors] = useState<Ivalues>(initialErrors);
  const [loading, setLoading] = useState(false);
  const [errorCall, setErrorCall] = useState<string | null>(null);
  const [successCall, setSuccessCall] = useState<boolean>(false);

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const cancelEdit = () => {
    setFormState(initilFormState);
    setShowEditModal(false);
    setErrors(initialErrors);
    setLoading(false);
    setErrorCall(null);
    setSuccessCall(false);
  };
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

    if (values.password !== values.confirmPassword) {
      newErrors.confirmPassword = "Senhas não conferem";
    }
    setErrors({ ...newErrors } as Ivalues);
    const hasError = !!Object.values(newErrors).find((error) => error);

    return hasError;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const hasError = validadteValues(formState);
    if (hasError) {
      return;
    }
    setLoading(true);
    const errorMessage = await onEditAccount(formState);
    if (errorMessage) {
      setErrorCall(errorMessage);
    }
    setLoading(false);
    setSuccessCall(true);
  };

  return (
    <ReactModal
      isOpen={showEditModal}
      style={customStyles}
      onRequestClose={cancelEdit}
      ariaHideApp={false}
    >
      <ModalContainer>
        <ModalHeader>
          <h1>Editar Perfil</h1>
          <X size={32} onClick={cancelEdit} />
        </ModalHeader>
        {loading || successCall || errorCall ? (
          <ConfirmRequest
            loading={loading}
            success={successCall}
            error={!!errorCall}
          />
        ) : (
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              label="Nome"
              placeholder="Nome"
              name="fullName"
              value={formState.fullName}
              onChange={handleChanges}
              error={errors.fullName}
            />

            <Input
              type="text"
              label="Perfil do Github"
              placeholder="https://github.com/seuusuário"
              name="githubProfile"
              value={formState.githubProfile}
              onChange={handleChanges}
              error={errors.githubProfile}
            />

            <Input
              type="text"
              label="Perfil do Linkedin"
              placeholder="https://linkedin.com/in/seuusuário"
              name="linkedinProfile"
              value={formState.linkedinProfile}
              onChange={handleChanges}
              error={errors.linkedinProfile}
            />

            <Input
              type="text"
              label="Perfil da Rocketseat"
              placeholder="https://app.rocketseat.com.br/me/seuusuário"
              name="rocketseatProfile"
              value={formState.rocketseatProfile}
              onChange={handleChanges}
              error={errors.rocketseatProfile}
            />

            <Input
              type="password"
              label="Nova Senha"
              placeholder="Digite sua nova senha"
              name="nova senha"
              value={formState.password}
              onChange={handleChanges}
              error={errors.password}
            />

            <Input
              type="password"
              label="Confirmar a nova senha"
              placeholder="Confirme sua nova senha"
              name="nova senha"
              value={formState.confirmPassword}
              onChange={handleChanges}
              error={errors.confirmPassword}
            />

            <EditButtonContainer>
              <Button type="submit" color="secondary">
                Salvar
              </Button>
              <Button type="button" color="danger" onClick={cancelEdit}>
                Cancelar
              </Button>
            </EditButtonContainer>
          </form>
        )}
      </ModalContainer>
    </ReactModal>
  );
};
