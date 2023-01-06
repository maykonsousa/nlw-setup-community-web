import React from "react";
import { InputContainer } from "./Input.styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: string | null;
  placeholder: string;
}

interface classNameProps {
  error: string | null;
  value: string | number | readonly string[] | undefined;
}

export const Input = ({
  label,
  error,
  placeholder,
  value,
  ...props
}: InputProps) => {
  const validClassName = ({ error, value }: classNameProps) => {
    if (error) {
      return "error";
    }
    if (value) {
      return "filled";
    }
    return "";
  };
  return (
    <InputContainer>
      {label ? <label htmlFor={props.name}>{label}</label> : null}
      <input
        className={validClassName({ error, value })}
        type="text"
        placeholder={placeholder}
        value={value}
        {...props}
      />
      {error ? <small>{error}</small> : null}
    </InputContainer>
  );
};
