import React from "react";
import {
  UnderContructionContainer,
  UnderContructionContent,
} from "./UnderConstruction.styles";
import { GiBarrier } from "react-icons/gi";

export const UnderContruction = () => {
  return (
    <UnderContructionContainer>
      <UnderContructionContent>
        <h1>Feature em desenvolvimento</h1>
        <GiBarrier size={128} />
        <p>Retorne em breve para conferir as novidades</p>
      </UnderContructionContent>
    </UnderContructionContainer>
  );
};
