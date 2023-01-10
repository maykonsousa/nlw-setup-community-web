import React from "react";

import { IUser } from "../../contexts/UserContext";
import {
  Body,
  Footer,
  Header,
  ProfileImageContainer,
  ViewTicketModalContainer,
} from "./UserCard.styles";
import GeneralAvatar from "../../assets/developer-icon.webp";
import GitHubIcon from "../../assets/github.svg";
import LinkedinIcon from "../../assets/linkedin.svg";
import IgniteIcon from "../../assets/ignite.svg";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

interface IuserCardProps {
  user: IUser;
}

export const UserCard = ({ user }: IuserCardProps) => {
  const URL_ROCKETSEAT = `https://nlw.rocketseat.com.br/obrigado/${user.username}`;
  const date = user.updatedAt;

  const name = user.fullName.split(" ");
  const formatedname = name.filter((item) => item !== "");
  const firstName = formatedname[0];
  const lastName = formatedname[formatedname.length - 1];

  console.log(name);

  const formatDate = (date: string) => {
    if (!date) return null;
    const dateFormated = new Date(date);
    dateFormated.setHours(dateFormated.getHours() - 3);
    return format(dateFormated, "dd/MM/yyyy HH:mm:ss");
  };

  const dateUpdatedFormated = formatDate(date);
  return (
    <ViewTicketModalContainer>
      <Header />
      <Body>
        <ProfileImageContainer>
          {user?.avatarUrl ? (
            <Image
              src={user.avatarUrl}
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
            <h2>{`${firstName} ${lastName}`}</h2>
            <small>
              {
                //reduce the size of the bio
                user.bio?.length > 50 ? user.bio.slice(0, 50) + "..." : user.bio
              }
            </small>
          </div>
          <div>
            <h3>Indicações</h3>
            <h2>{user.countIndication}</h2>
          </div>
        </div>

        <ul className="SocialMedia">
          <li>
            <Link href={user?.githubProfile ?? "#"} target="_blank">
              <Image src={GitHubIcon} width={32} height={32} alt={"Github"} />
            </Link>
          </li>

          <li>
            <Link href={user?.linkedinProfile ?? "#"} target="_blank">
              <Image
                src={LinkedinIcon}
                width={32}
                height={32}
                alt={"Linkedin"}
              />
            </Link>
          </li>

          <li>
            <Link href={user?.rocketseatProfile ?? "#"} target="_blank">
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
  );
};
