import styled from "styled-components";

export const FormContainer = styled.form`
  margin-top: 2rem;
  width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;

  button {
    width: 100%;
    height: 3rem;
    border: 0;
    outline: 0;
    border-radius: 8px;
    padding: 0 1rem;
    background-color: ${({ theme }) => theme.colors["button-bg"]};
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors["grey-900"]};
    font-weight: 700;
    transition: all 0.2s;
    &:hover {
      background-color: ${({ theme }) => theme.colors["button-bg-hover"]};
    }
  }

  small {
    color: ${({ theme }) => theme.colors["danger-base"]};
    font-size: 1.2rem;
    text-align: center;
    display: block;
    width: 100%;
  }
`;
