import Link from "next/link";
import React from "react";
import { FaGithubSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { ForgotContainer, SocialMedia } from "../styles/pages/Forgot.styles";

const Forgot = () => {
  return (
    <ForgotContainer>
      <h1>Poxa! Esqueceu a senha?</h1>
      <p>
        Pior que eu tambem esqueci de criar um método para recuperar e agora eu
        não tenho muito o que fazer,
      </p>
      <p>
        Mas se quiser, me mande mensagem no Linkedin ou Whatsapp me passando o
        seu username da Rocket que eu excluo o seu cadastro e vc faz de novo
        pode ser?
      </p>
      <h3>Foi Mal!!!</h3>

      <SocialMedia>
        <Link href={"httops://github.com/maykonsousa"} target="_blank">
          <FaGithubSquare size={48} />
        </Link>

        <Link href={"http://linkedin.com/in/maykonsousa"} target="_blank">
          <FaLinkedin size={48} />
        </Link>

        <Link href={"https://wa.me/5561992943297"} target="_blank">
          <FaWhatsappSquare size={48} />
        </Link>
      </SocialMedia>
    </ForgotContainer>
  );
};

export default Forgot;
