import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaDocker,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaSass,
  FaWhatsappSquare,
} from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { IoLocationSharp } from "react-icons/io5";
import { Header } from "../components/Header";
import {
  AboutPageContainer,
  Aside,
  Content,
  Cover,
  Main,
  ProfileContainer,
  TecnologiesContainer,
} from "../styles/pages/About.styles";
import { UnderContruction } from "../components/UnderContruction";

const About = () => {
  return (
    <div>
      <Header />
      <AboutPageContainer>
        <Cover />
        <Main>
          <Aside>
            <ProfileContainer>
              <div className="avatar">
                <Image
                  src="https://avatars.githubusercontent.com/u/53588064?v=4"
                  alt="avatar"
                  width={160}
                  height={160}
                />
              </div>

              <div className="informations">
                <h1>Maykon Sousa</h1>
                <p>Front-end Developer PL | Pagbank S/A</p>
                <small>
                  <IoLocationSharp /> João Pessoa, PB, Brazil
                </small>
              </div>

              <div className="socialMedias">
                <Link href={"httops://github.com/maykonsousa"} target="_blank">
                  <FaGithubSquare size={48} />
                </Link>

                <Link
                  href={"http://linkedin.com/in/maykonsousa"}
                  target="_blank"
                >
                  <FaLinkedin size={48} />
                </Link>

                <Link href={"https://wa.me/5561992943297"} target="_blank">
                  <FaWhatsappSquare size={48} />
                </Link>

                <Link href={"https://wa.me/5561992943297"} target="_blank">
                  <FaInstagramSquare size={48} />
                </Link>

                <Link href={"https://wa.me/5561992943297"} target="_blank">
                  <FaFacebookSquare size={48} />
                </Link>
              </div>

              <p>
                <a href="http://maykonsousa.github.io">
                  http://maykonsousa.github.io
                </a>
              </p>
            </ProfileContainer>
            <TecnologiesContainer>
              <h2>Tecnologias</h2>
              <div className="icons">
                <span>
                  <FaReact size={48} />
                </span>

                <span>
                  <FaNodeJs size={48} />
                </span>

                <span>
                  <FaDocker size={48} />
                </span>

                <span>
                  <SiStyledcomponents size={48} />
                </span>

                <span>
                  <FaSass size={48} />
                </span>
              </div>
            </TecnologiesContainer>
          </Aside>
          <Content>
            <UnderContruction />
          </Content>
        </Main>
      </AboutPageContainer>
    </div>
  );
};

export default About;
