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
import Image from "next/image";
import Link from "next/link";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IoRocket } from "react-icons/io5";

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
            <Link
              href={user?.githubProfile ?? ""}
              target="_blank"
              className={!user.githubProfile ? "disabled" : ""}
            >
              <FaGithubSquare size={48} />
            </Link>
          </li>

          <li>
            <Link
              href={user?.linkedinProfile ?? null}
              target="_blank"
              className={!user.linkedinProfile ? "disabled" : ""}
            >
              <FaLinkedin size={48} />
            </Link>
          </li>

          <li>
            <Link
              href={user?.rocketseatProfile ?? ""}
              target="_blank"
              className={!user.rocketseatProfile ? "disabled" : ""}
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
  );
};
