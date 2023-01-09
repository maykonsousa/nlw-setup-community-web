import React from "react";
import { Header } from "../../components/Header";
import { UnderContruction } from "../../components/UnderContruction";
import { CommunityPageContainer } from "./Community.styles";

export const Community = () => {
  return (
    <CommunityPageContainer>
      <Header />
      <UnderContruction />
    </CommunityPageContainer>
  );
};
