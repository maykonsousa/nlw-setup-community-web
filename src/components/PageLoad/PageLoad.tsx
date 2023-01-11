import React from "react";
import { RotatingLines } from "react-loader-spinner";
import { PageLoadContainer } from "./pageLoad.styles";

export const PageLoad = () => {
  return (
    <PageLoadContainer>
      <RotatingLines
        strokeColor="green"
        strokeWidth="5"
        animationDuration="0.75"
        width="192"
        visible={true}
      />
    </PageLoadContainer>
  );
};
