import Image from "next/image";
import React, { useState } from "react";
import {
  ActionConfirmationContainer,
  HeaderContainer,
  HeaderContent,
  NavigattionContainer,
  ProfileButton,
  ProfileContainer,
  ProfileFooter,
  ProfileHeader,
  ProfileImageContainer,
  SocialContainer,
} from "./header.styles";
import BrandLogo from "../../assets/brand.svg";
import Link from "next/link";
import { UserContext } from "../../contexts/UserContext";
import { Pencil, Power, Trash } from "phosphor-react";
import IgniteIcon from "../../assets/ignite.svg";
import GitHubIcon from "../../assets/github.svg";
import LinkedinIcon from "../../assets/linkedin.svg";

interface IConfimationProps {
  message: string;
  onSetShow: () => void;
  onConfirm: () => void;
}

const ActionConfirmation = ({
  message,

  onSetShow,
  onConfirm,
}: IConfimationProps) => {
  return (
    <ActionConfirmationContainer>
      <h3>{message}</h3>
      <div>
        <ProfileButton color="secondary" onClick={onConfirm}>
          Sim
        </ProfileButton>
        <ProfileButton color="danger" onClick={onSetShow}>
          Não
        </ProfileButton>
      </div>
    </ActionConfirmationContainer>
  );
};

export const Header = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [confirmAction, setConfirAction] = useState(false);
  const [message, setMessage] = useState("");

  const { user, onDeleteAccount, onLogoutAccount } =
    React.useContext(UserContext);

  const GET_OUT_MESSAGE = "Tem certeza que deseja sair?";
  const DELETE_ACCOUNT_MESSAGE = "Tem certeza que deseja deletar sua conta?";

  return (
    <HeaderContainer>
      <HeaderContent>
        <Image src={BrandLogo} alt={"Logo NLW"} />
        <NavigattionContainer>
          <ul>
            <li>
              <Link href={"/ranking"}>Ranking</Link>
            </li>
            <li>
              <Link href={"/community"}>Community</Link>
            </li>
            <li>
              <Link href={"/ranking"}>Sobre o Autor</Link>
            </li>
          </ul>
        </NavigattionContainer>
        <ProfileImageContainer onClick={() => setShowProfile(!showProfile)}>
          <Image
            src={user.avatarUrl}
            width={120}
            height={120}
            alt={"Foto de perfil"}
          />
        </ProfileImageContainer>

        {showProfile && (
          <ProfileContainer>
            <ProfileHeader>
              <h2>{user?.fullName}</h2>
              <p>{user?.bio}</p>
            </ProfileHeader>

            <SocialContainer>
              <ul>
                <li>
                  <Link href={user?.githubProfile ?? "#"} target="_blank">
                    <Image
                      src={GitHubIcon}
                      width={32}
                      height={32}
                      alt={"Github"}
                    />
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
            </SocialContainer>

            {confirmAction ? (
              <ActionConfirmation
                message={message}
                onSetShow={() => setConfirAction(false)}
                onConfirm={() => {
                  if (message === DELETE_ACCOUNT_MESSAGE) {
                    onDeleteAccount();
                    return;
                  }
                  if (message === GET_OUT_MESSAGE) {
                    onLogoutAccount();
                    return;
                  }
                }}
              />
            ) : (
              <ProfileFooter>
                <ProfileButton color="secondary">
                  <Pencil size={24} />
                </ProfileButton>
                <ProfileButton
                  color="danger"
                  onClick={() => {
                    setConfirAction(true);
                    setMessage(DELETE_ACCOUNT_MESSAGE);
                  }}
                >
                  <Trash size={24} />
                </ProfileButton>
                <ProfileButton
                  color="warning"
                  onClick={() => {
                    setConfirAction(true);
                    setMessage(GET_OUT_MESSAGE);
                  }}
                >
                  <Power size={24} />
                </ProfileButton>
              </ProfileFooter>
            )}
          </ProfileContainer>
        )}
      </HeaderContent>
    </HeaderContainer>
  );
};
