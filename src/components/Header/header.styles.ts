import styled from "styled-components";

interface ProfileButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: "secondary" | "danger" | "warning";
}

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
`;

export const NavigattionContainer = styled.nav`
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
  border: solid 3px ${({ theme }) => theme.colors["ignite-light"]};
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

export const ProfileHeader = styled.div``;

export const SocialContainer = styled.div`
  ul {
    display: flex;
    list-style: none;
    gap: 2rem;
    li {
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      background-color: ${({ theme }) => theme.colors["grey-700"]};
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

export const ProfileButton = styled.button<ProfileButtonProps>`
  width: 100%;
  height: 2rem;
  border-radius: 4px;
  border: none;
  color: ${({ theme }) => theme.colors["grey-100"]};
  font-weight: 700;
  ${({ color, theme }) => {
    switch (color) {
      case "secondary":
        return `
          background-color: ${theme.colors["ignite-light"]};
          
        `;
      case "danger":
        return `
          background-color: ${theme.colors["danger-base"]};
        `;
      case "warning":
        return `
          background-color: ${theme.colors["warning-base"]};
        `;
    }
  }}

  &:hover {
    filter: brightness(0.9);
  }
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
