import styled from "styled-components";

export const UnderContructionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  h1 {
    font-size: 3rem;
  }
  svg {
    color: ${({ theme }) => theme.colors["warning-base"]};
    &:hover {
      color: ${({ theme }) => theme.colors["warning-light"]};
    }
  }

  p {
    font-size: 1.5rem;
  }
`;
