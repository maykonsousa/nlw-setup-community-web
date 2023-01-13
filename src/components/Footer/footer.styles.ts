import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  height: 5rem;
  width: 100%;
  color: ${({ theme }) => theme.colors["text-base"]};
  position: fixed;
  bottom: 0;

  svg {
    color: ${({ theme }) => theme.colors["danger-base"]};
  }

  a {
    color: ${({ theme }) => theme.colors["rocketseat-dark"]};

    &:hover {
      color: ${({ theme }) => theme.colors["rocketseat-light"]};
    }
  }

  margin-top: 2rem;
`;
