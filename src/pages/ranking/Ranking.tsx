import React, { useContext, useEffect } from "react";
import { Header } from "../../components/Header";
import { UserContext } from "../../contexts/UserContext";
import { RankingContainer } from "./Ranking.styles";
import Router from "next/router";
import { parseCookies } from "nookies";

export const Ranking = () => {
  const cookieToken = parseCookies().token;

  useEffect(() => {
    if (!cookieToken) {
      Router.push("/");
    }
  }, [cookieToken]);
  return (
    <RankingContainer>
      <Header />
      <h1>Ranking</h1>
    </RankingContainer>
  );
};
