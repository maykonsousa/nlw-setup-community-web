import styled from "styled-components";

export const SignInContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  gap: 3rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const SignInContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  > h1 {
    margin-top: -3.5rem;
    color: ${({ theme }) => theme.colors["text-title"]};
    font-weight: 900;
    text-transform: uppercase;
    font-size: clamp(3rem, 10vw, 6rem);
    line-height: 0.75em;
    text-align: center;
    text-shadow: 3px 1px 1px ${({ theme }) => theme.colors["rocketseat-light"]},
      2px 2px 1px ${({ theme }) => theme.colors["ignite-light"]},
      4px 2px 1px ${({ theme }) => theme.colors["rocketseat-light"]},
      3px 3px 1px ${({ theme }) => theme.colors["ignite-light"]},
      5px 3px 1px ${({ theme }) => theme.colors["rocketseat-light"]},
      4px 4px 1px ${({ theme }) => theme.colors["ignite-light"]},
      6px 4px 1px ${({ theme }) => theme.colors["rocketseat-light"]},
      5px 5px 1px ${({ theme }) => theme.colors["ignite-light"]},
      7px 5px 1px ${({ theme }) => theme.colors["rocketseat-light"]},
      6px 6px 1px ${({ theme }) => theme.colors["ignite-light"]},
      8px 6px 1px ${({ theme }) => theme.colors["rocketseat-light"]},
      7px 7px 1px ${({ theme }) => theme.colors["ignite-light"]},
      9px 7px 1px ${({ theme }) => theme.colors["rocketseat-light"]};

    span {
      display: block;
      position: relative;

      &:before {
        content: attr(data-text);
        position: absolute;
        text-shadow: 2px 2px 1px ${({ theme }) => theme.colors["danger-light"]},
          -1px -1px 1px ${({ theme }) => theme.colors["danger-low"]},
          -2px 2px 1px ${({ theme }) => theme.colors["danger-light"]},
          1px -1px 1px ${({ theme }) => theme.colors["danger-low"]};
        z-index: 1;
      }

      &:nth-child(1) {
        padding-right: 2.25rem;
      }

      &:nth-child(2) {
        padding-left: 2.25rem;
      }
    }
  }

  > p {
    font-size: 2rem;
    text-align: center;
    color: ${({ theme }) => theme.colors["text-base"]};
    span {
      background-image: linear-gradient(90deg, #857bf8, #54e694);
      background-clip: border-box;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 700;
    }
  }

  @media (max-width: 768px) {
    p {
      display: none;
    }

    img {
      width: 90%;
    }
  }
`;

export const SignInForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 2rem;
  p {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors["text-base"]};
  }
  > h1 {
    color: ${({ theme }) => theme.colors["text-title"]};
    font-weight: 700;
    font-size: 3.5rem;
  }
`;

export const ActionContainer = styled.div`
  margin-top: 2rem;
  p {
    font-size: 1.5rem;
  }

  a {
    display: block;
    margin-top: 1rem;
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors["grey-900"]};
    font-weight: 700;
    line-height: 1.6;
    padding: 1rem 2rem;
    border-radius: 8px;
    border: 0;
    outline: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors["button-bg"]};
    transition: all 0.2s;
    &:hover {
      background-color: ${({ theme }) => theme.colors["button-bg-hover"]};
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
