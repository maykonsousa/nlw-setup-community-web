import React, { useEffect } from "react";
import { Header } from "../components/Header";
import { RankingContainer } from "../styles/pages/Ranking.styles";
import Router from "next/router";
import { parseCookies } from "nookies";
import { TableRanking } from "../components/TableRanking/TableRanking";
import { ViewTiketModal } from "../components/ViewTicketModal";

export const Ranking = () => {
  const cookieToken = parseCookies().token;

  useEffect(() => {
    if (!cookieToken) {
      Router.push("/");
    }
  }, [cookieToken]);
  return (
    <RankingContainer>
      <ViewTiketModal />
      <Header />
      <h1>Ranking</h1>
      <TableRanking />
    </RankingContainer>
  );
};

export default Ranking;
