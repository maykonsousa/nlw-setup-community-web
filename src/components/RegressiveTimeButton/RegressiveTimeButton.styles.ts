import styled from "styled-components";

interface ProfileButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "secondary" | "danger" | "warning";
}

export const ButtonContainer = styled.button<ProfileButtonProps>`
  width: 6rem;
  height: 2rem;
  border-radius: 4px;
  border: none;
  color: ${({ theme }) => theme.colors["grey-100"]};
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors["grey-600"]};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
