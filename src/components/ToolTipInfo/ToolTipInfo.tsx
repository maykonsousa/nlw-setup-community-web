import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import { ToolTipContainer, ToolTipText } from "./ToolTip.styles";

interface ToolTipInfoProps {
  message: string;
}

export const ToolTipInfo = ({ message }: ToolTipInfoProps) => {
  return (
    <ToolTipContainer>
      <FiAlertCircle />
      <ToolTipText>{message}</ToolTipText>
    </ToolTipContainer>
  );
};
