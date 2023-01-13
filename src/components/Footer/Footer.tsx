import React from "react";
import { FooterContainer } from "./footer.styles";
import { IoWarning } from "react-icons/io5";
import Link from "next/link";

export const Footer = () => {
  return (
    <FooterContainer>
      <IoWarning size={36} />
      <p>
        <span>Obs:</span> A NLW Ranking não é aplicação oficial da Rocketseat e
        reúne dados apenas dos usuários cadastrados aqui. <br /> Para
        informações oficiais acompanhe os canais oficiais da Rocketseat na{" "}
        <Link href="http://app.rocketseat.com.br" target="_blank">
          Plataforma Oficial
        </Link>
        , no{" "}
        <Link
          href="https://www.instagram.com/rocketseat_oficial/"
          target="_blank"
        >
          Instagram
        </Link>{" "}
        ou no{" "}
        <Link href="https://discord.gg/rocketseat" target="_blank">
          Discord
        </Link>
        .
      </p>
    </FooterContainer>
  );
};
