import React, { useContext } from "react";

import ReactModal from "react-modal";
import { IUser, UserContext } from "../../contexts/UserContext";
import { Default } from "../../styles/themes/default";
import {
  Body,
  Footer,
  Header,
  ProfileImageContainer,
  ViewTicketModalContainer,
} from "./ViewTiketModal.styles";
import BackGroundImage from "../../assets/teste.png";
import GeneralAvatar from "../../assets/developer-icon.webp";
import GitHubIcon from "../../assets/github.svg";
import LinkedinIcon from "../../assets/linkedin.svg";
import IgniteIcon from "../../assets/ignite.svg";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { FiX } from "react-icons/fi";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IoRocket } from "react-icons/io5";

const { colors } = Default;
const customStyles = {
  content: {
    top: "10rem",
    bottom: "2rem",
    width: "340px",
    height: "580px",
    border: "none",
    margin: "auto",
    padding: "0",
    backgroundColor: colors["color-background"],
    backgroundImage: `url(${BackGroundImage.src})`,
    backgroundRepeat: "no-repeat",
  },

  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

export const ViewTiketModal = () => {
  const {
    setShowTicketModal,
    showTicketModal,
    setUserNameSelected,
    viewUser,
    setViewUser,
  } = useContext(UserContext);

  const onCloseModal = () => {
    setShowTicketModal(false);
    setUserNameSelected(null);
    setViewUser({} as IUser);
  };

  const URL_ROCKETSEAT = `https://nlw.rocketseat.com.br/obrigado/${viewUser.username}`;
  const date = viewUser.updatedAt;

  return (
    <ReactModal
      isOpen={showTicketModal}
      style={customStyles}
      onRequestClose={onCloseModal}
    >
      <ViewTicketModalContainer>
        <Header>
          <FiX size={24} onClick={onCloseModal} />
        </Header>
        <Body>
          <ProfileImageContainer>
            {viewUser?.avatarUrl ? (
              <Image
                src={viewUser.avatarUrl}
                width={120}
                height={120}
                alt={"Foto de perfil"}
              />
            ) : (
              <Image
                src={GeneralAvatar.src}
                width={120}
                height={120}
                alt={"Foto de perfil"}
              />
            )}
          </ProfileImageContainer>
          <div className="Informations">
            <div>
              <h3>Astronauta</h3>
              <h2>{viewUser.fullName}</h2>
              <small>{viewUser.bio}</small>
            </div>
            <div>
              <h3>Indicações</h3>
              <h2>{viewUser.countIndication}</h2>
            </div>
          </div>

          <ul className="SocialMedia">
            <li>
              <Link
                href={viewUser?.githubProfile ?? ""}
                target="_blank"
                className={!viewUser.githubProfile ? "disabled" : ""}
              >
                <FaGithubSquare size={48} />
              </Link>
            </li>

            <li>
              <Link
                href={viewUser?.linkedinProfile ?? null}
                target="_blank"
                className={!viewUser.linkedinProfile ? "disabled" : ""}
              >
                <FaLinkedin size={48} />
              </Link>
            </li>

            <li>
              <Link
                href={viewUser?.rocketseatProfile ?? ""}
                target="_blank"
                className={!viewUser.rocketseatProfile ? "disabled" : ""}
              >
                <IoRocket size={48} />
              </Link>
            </li>
          </ul>
          <p>{`última atualização ${date}`}</p>
        </Body>
        <Footer>
          <Link href={URL_ROCKETSEAT} target="_blank">
            Ver ticket
          </Link>
        </Footer>
      </ViewTicketModalContainer>
    </ReactModal>
  );
};
