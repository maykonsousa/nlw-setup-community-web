import styled from "styled-components";

export const ForgotContainer = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 920px;
  gap: 2rem;
  text-align: center;

  h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors["button-bg"]};
  }

  h3 {
    font-size: 2rem;
  }
  p {
    font-size: 1.5rem;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  gap: 2rem;
  a {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: ${({ theme }) => theme.colors["rocketseat-dark"]};
      border: Solid 1px ${({ theme }) => theme.colors["rocketseat-dark"]};
      border-radius: 4px;

      &:hover {
        color: ${({ theme }) => theme.colors["rocketseat-light"]};
        border: Solid 1px ${({ theme }) => theme.colors["rocketseat-light"]};
      }
    }
  }
`;
