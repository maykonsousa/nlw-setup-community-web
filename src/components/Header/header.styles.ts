import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors["grey-900"]};
  height: 5.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors["grey-600"]};
  display: flex;
`;

export const HeaderContent = styled.div`
  position: relative;
  max-width: 87rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

export const IconMenuMobileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 769px) {
    display: none;
  }
`;

export const MenuMobileContainer = styled.div`
  position: absolute;
  top: 6rem;
  left: 1rem;
  width: 15rem;
  padding: 1.5rem 1rem;
  background-color: ${({ theme }) => theme.colors["grey-600"]};
  border-radius: 8px;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    h1 {
      font-size: 1.5rem;
    }
  }
  ul {
    height: 100%;
    gap: 1.5rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    list-style: none;

    li {
      display: inline-block;
      font-size: 1.5rem;
      display: flex;
      text-align: start;
      a {
        transition: all 0.2s;
        &:hover {
          color: ${({ theme }) => theme.colors["text-base"]};
        }
      }
    }
  }
`;

export const BrandContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: -5px;
    color: ${({ theme }) => theme.colors["text-title"]};
    font-weight: 700;
    text-transform: uppercase;
    font-size: clamp(1rem, 1.5vw, 2rem);
    line-height: 0.75em;
    text-align: center;
    text-shadow: 1px 1px 1px ${({ theme }) => theme.colors["rocketseat-light"]},
      2px 2px 1px ${({ theme }) => theme.colors["ignite-light"]},
      2px 2px 1px ${({ theme }) => theme.colors["rocketseat-light"]},
      1px 1px 1px ${({ theme }) => theme.colors["ignite-light"]},
      2px 1px 1px ${({ theme }) => theme.colors["rocketseat-light"]},
      2px 2px 1px ${({ theme }) => theme.colors["ignite-light"]},
      2px 2px 1px ${({ theme }) => theme.colors["rocketseat-light"]},
      2px 2px 1px ${({ theme }) => theme.colors["ignite-light"]},
      2px 2px 1px ${({ theme }) => theme.colors["rocketseat-light"]},
      2px 2px 1px ${({ theme }) => theme.colors["ignite-light"]},
      3px 2px 1px ${({ theme }) => theme.colors["rocketseat-light"]},
      2px 2px 1px ${({ theme }) => theme.colors["ignite-light"]},
      3px 2px 1px ${({ theme }) => theme.colors["rocketseat-light"]};
  }
`;

export const NavigattionContainer = styled.nav`
  //hidden in mobile
  @media (max-width: 768px) {
    display: none;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    list-style: none;
    gap: 3rem;
    li {
      display: inline-block;
      height: 5.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 2px solid transparent;
      transition: border-bottom 0.2s;
      &:hover {
        border-bottom: 2px solid ${({ theme }) => theme.colors["ignite-light"]};
      }
    }
  }
`;

export const ProfileImageContainer = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors["grey-600"]};
  border: solid 1px ${({ theme }) => theme.colors["ignite-light"]};
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProfileContainer = styled.div`
  position: absolute;
  top: 6rem;
  right: -5.5rem;

  @media (max-width: 768px) {
    right: 1rem;
  }

  width: 15rem;
  padding: 1.5rem 1rem;
  height: 20em;
  background-color: ${({ theme }) => theme.colors["grey-600"]};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  svg {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
  }
`;

export const SocialContainer = styled.div`
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-top: 2rem;
    gap: 2rem;
    li {
      display: flex;
      align-items: center;
      justify-content: center;

      a.disabled {
        cursor: not-allowed;
        svg {
          color: ${({ theme }) => theme.colors["grey-600"]};
        }
      }

      svg {
        color: ${({ theme }) => theme.colors["rocketseat-light"]};
        border: Solid 1px ${({ theme }) => theme.colors["ignite-light"]};
        border-radius: 4px;
        transition: all 0.2s;

        &:hover {
          color: ${({ theme }) => theme.colors["ignite-light"]};
          border: Solid 1px ${({ theme }) => theme.colors["rocketseat-light"]};
        }
      }
    }
  }
`;

export const ProfileFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 0.5rem;
  gap: 0.5rem;
`;

export const ActionConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h3 {
    text-align: center;
  }
  > div {
    display: flex;
    gap: 0.5rem;
  }
`;
