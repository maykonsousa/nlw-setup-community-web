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
import { X } from "phosphor-react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

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

  const formatDate = (date: string) => {
    if (!date) return null;
    const dateFormated = new Date(date);
    //remove 3 hours to date
    dateFormated.setHours(dateFormated.getHours() - 3);
    return format(dateFormated, "dd/MM/yyyy HH:mm:ss");
  };

  const dateUpdatedFormated = formatDate(date);
  return (
    <ReactModal
      isOpen={showTicketModal}
      style={customStyles}
      onRequestClose={onCloseModal}
    >
      <ViewTicketModalContainer>
        <Header>
          <X size={24} onClick={onCloseModal} />
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
              <Link href={viewUser?.githubProfile ?? "#"} target="_blank">
                <Image src={GitHubIcon} width={32} height={32} alt={"Github"} />
              </Link>
            </li>

            <li>
              <Link href={viewUser?.linkedinProfile ?? "#"} target="_blank">
                <Image
                  src={LinkedinIcon}
                  width={32}
                  height={32}
                  alt={"Linkedin"}
                />
              </Link>
            </li>

            <li>
              <Link href={viewUser?.rocketseatProfile ?? "#"} target="_blank">
                <Image
                  src={IgniteIcon}
                  width={32}
                  height={32}
                  alt={"Rocketseat"}
                />
              </Link>
            </li>
          </ul>
          <p>{`última atualização ${dateUpdatedFormated}`}</p>
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
