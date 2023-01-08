import React from "react";
import { ButtonContainer } from "./Button.styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "secondary" | "danger" | "warning";
}

export const Button = ({ children, color, ...props }: ButtonProps) => {
  return (
    <ButtonContainer color={color} {...props}>
      {children}
    </ButtonContainer>
  );
};
