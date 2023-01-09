import React from "react";
import { Header } from "../components/Header";
import { UnderContruction } from "../components/UnderContruction";
import { CommunityPageContainer } from "../styles/pages/Community.styles";

const Community = () => {
  return (
    <CommunityPageContainer>
      <Header />
      <UnderContruction />
    </CommunityPageContainer>
  );
};

export default Community;
