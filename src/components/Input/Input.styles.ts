import styled from "styled-components";

export const InputContainer = styled.div`
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

  input {
    height: 3rem;
    border: 2px solid transparent;
    outline: 0;
    border-radius: 8px;
    padding: 0 1rem;
    background-color: ${({ theme }) => theme.colors["shape-primary"]};
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors["text-base"]};

    &::placeholder {
      color: ${({ theme }) => theme.colors["grey-400"]};
      font-size: 1rem;
    }

    &:focus {
      border: 2px solid ${({ theme }) => theme.colors["ignite-light"]};
    }

    &.filled {
      border: 2px solid ${({ theme }) => theme.colors["ignite-light"]};
    }

    &.error {
      border: 2px solid ${({ theme }) => theme.colors["danger-base"]};
    }
  }

  small {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors["danger-base"]};
  }
`;
