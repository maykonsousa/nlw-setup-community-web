import { Barricade } from "phosphor-react";
import React from "react";
import { UnderContructionContainer } from "./UnderConstruction.styles";

export const UnderContruction = () => {
  return (
    <UnderContructionContainer>
      <h1>Feature em desenvolvimento</h1>
      <Barricade size={128} />
      <p>Retorne em breve para conferir as novidades</p>
    </UnderContructionContainer>
  );
};
