import styled from "styled-components";

interface ProfileButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "secondary" | "danger" | "warning";
}

export const ButtonContainer = styled.button<ProfileButtonProps>`
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
      default:
        return `
            background-color: ${theme.colors["ignite-light"]};`;
    }
  }}

  &:hover {
    filter: brightness(0.9);
  }
`;
