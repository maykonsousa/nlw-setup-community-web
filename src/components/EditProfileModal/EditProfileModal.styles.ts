import styled from "styled-components";

export const ModalContainer = styled.div`
  background: ${(props) => props.theme.colors["color-background"]};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.colors["ignite-light"]};
    }
  }
`;

export const EditButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 0.5rem;
`;

export const ConfirmModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  p {
    font-size: 2rem;
    text-align: center;
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  svg {
    color: ${(props) => props.theme.colors["danger-light"]};
  }
`;

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  svg {
    color: ${(props) => props.theme.colors["ignite-light"]};
  }
`;
