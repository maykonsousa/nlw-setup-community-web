import styled from "styled-components";

export const FormContainer = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.8rem;
      font-weight: 700;
    }

    div {
      display: grid;
      grid-template-columns: 1fr 3rem;
      align-items: center;
      gap: 1rem;
      input {
        height: 3rem;
        border: 0;
        outline: 0;
        border-radius: 8px;
        padding: 0 1rem;
        background-color: ${({ theme }) => theme.colors["shape-primary"]};
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors["text-base"]};
      }

      > button {
        border: solid blue 2px;
        height: 3rem;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        outline: 0;
        border-radius: 8px;

        background-color: ${({ theme }) => theme.colors["button-bg"]};
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors["grey-900"]};
        font-weight: 700;
        transition: all 0.2s;
        border: solid svg {
          width: 1.5rem;
          height: 1.5rem;
        }
        &:hover {
          background-color: ${({ theme }) => theme.colors["button-bg-hover"]};
          color: ${({ theme }) => theme.colors["rocketseat-dark"]};
        }
      }
    }

    small {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.colors["danger-base"]};
    }
  }
`;
