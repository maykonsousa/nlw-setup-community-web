import React, { useContext, useEffect } from "react";
import { Header } from "../components/Header";
import { RankingContainer } from "../styles/pages/Ranking.styles";
import Router from "next/router";
import { parseCookies } from "nookies";
import { TableRanking } from "../components/TableRanking/TableRanking";
import { ViewTiketModal } from "../components/ViewTicketModal";
import { UserContext } from "../contexts/UserContext";
import { PageLoad } from "../components/PageLoad";

export const Ranking = () => {
  const cookieToken = parseCookies().token;
  const { pageLoad, user } = useContext(UserContext);

  useEffect(() => {
    if (!cookieToken || !user?.id) {
      Router.push("/");
    }
  }, [cookieToken, user]);
  return pageLoad ? (
    <PageLoad />
  ) : (
    <RankingContainer>
      <ViewTiketModal />
      <Header />
      <h1>Ranking</h1>
      <TableRanking />
    </RankingContainer>
  );
};

export default Ranking;
