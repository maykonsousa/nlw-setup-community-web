import styled from "styled-components";

export const FormSignUpContainer = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3rem;
  gap: 1rem;
  button {
    border: solid blue 2px;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    outline: 0;
    border-radius: 8px;
    padding: 0 1rem;
    background-color: ${({ theme }) => theme.colors["button-bg"]};
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors["grey-900"]};
    font-weight: 700;
    transition: all 0.2s;

    &.reset {
      background-color: ${({ theme }) => theme.colors["danger-base"]};
      &:hover {
        background-color: ${({ theme }) => theme.colors["danger-light"]};
      }
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors["button-bg-hover"]};
    }
  }
`;
