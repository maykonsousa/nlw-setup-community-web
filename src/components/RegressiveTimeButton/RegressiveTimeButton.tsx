/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import { ButtonContainer } from "./RegressiveTimeButton.styles";
import { useTimer } from "react-timer-hook";
import { parseCookies, setCookie } from "nookies";
import { ClockCounterClockwise } from "phosphor-react";
import { UserContext } from "../../contexts/UserContext";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  expiryTimestamp: Date;
}

export const RegressiveTimeButton = ({
  expiryTimestamp,
  color = "secondary",
  ...props
}: ButtonProps) => {
  const { onReloadUsers } = useContext(UserContext);
  const { seconds, minutes, start } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      setCookie(null, "hasUpdated", "");
      onReloadUsers();
    },
  });

  const hasUpdated = parseCookies().hasUpdated;

  React.useEffect(() => {
    if (hasUpdated) {
      start();
    }
  }, [hasUpdated]);

  return (
    <ButtonContainer {...props}>
      <ClockCounterClockwise size={24} />
      <span>
        {minutes}:{seconds}
      </span>
    </ButtonContainer>
  );
};
