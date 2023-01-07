import React from "react";
import { ToolTipInfo } from "../ToolTipInfo/ToolTipInfo";
import { InputContainer } from "./Input.styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: string | null;
  information?: string;
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
  information,
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
      {label ? (
        <label htmlFor={props.name}>
          <span>{label}</span>
          {information ? <ToolTipInfo message={information} /> : null}
        </label>
      ) : null}
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
