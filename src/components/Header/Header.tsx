import Image from "next/image";
import React, { useContext, useState } from "react";
import {
  ActionConfirmationContainer,
  HeaderContainer,
  HeaderContent,
  IconMenuMobileContainer,
  MenuMobileContainer,
  NavigattionContainer,
  ProfileContainer,
  ProfileFooter,
  ProfileHeader,
  ProfileImageContainer,
  SocialContainer,
  BrandContainer,
} from "./header.styles";
import BrandLogo from "../../assets/brand.svg";
import Link from "next/link";
import { UserContext } from "../../contexts/UserContext";
import GeneralAvatar from "../../assets/developer-icon.webp";
import { EditProfleModal } from "../EditProfileModal";
import { Button } from "../Button";
import { FiEdit, FiPower, FiTrash2, FiX } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoRocket } from "react-icons/io5";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

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
        <Button color="secondary" onClick={onConfirm}>
          Sim
        </Button>
        <Button color="danger" onClick={onSetShow}>
          Não
        </Button>
      </div>
    </ActionConfirmationContainer>
  );
};

export const Header = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const [confirmAction, setConfirAction] = useState(false);
  const [message, setMessage] = useState("");

  const { user, onDeleteAccount, onLogoutAccount, setShowEditModal } =
    useContext(UserContext);

  const GET_OUT_MESSAGE = "Tem certeza que deseja sair?";
  const DELETE_ACCOUNT_MESSAGE = "Tem certeza que deseja deletar sua conta?";

  return (
    <HeaderContainer>
      <EditProfleModal />
      <HeaderContent>
        <IconMenuMobileContainer
          onClick={() => setShowMenuMobile(!showMenuMobile)}
        >
          <GiHamburgerMenu size={32} />
        </IconMenuMobileContainer>
        {showMenuMobile && (
          <MenuMobileContainer>
            <div>
              <h1>Menu</h1>
              <FiX size={24} onClick={() => setShowMenuMobile(false)} />
            </div>
            <ul>
              <li>
                <Link href={"/ranking"}>Ranking</Link>
              </li>
              <li>
                <Link href={"/community"}>Community</Link>
              </li>
              <li>
                <Link href={"/about"}>Sobre o Autor</Link>
              </li>
            </ul>
          </MenuMobileContainer>
        )}
        <BrandContainer>
          <BrandLogo />
          <h1>COMMUNITY</h1>
        </BrandContainer>
        <NavigattionContainer>
          <ul>
            <li>
              <Link href={"/ranking"}>Ranking</Link>
            </li>
            <li>
              <Link href={"/community"}>Community</Link>
            </li>
            <li>
              <Link href={"/about"}>Sobre o Autor</Link>
            </li>
          </ul>
        </NavigattionContainer>
        <ProfileImageContainer onClick={() => setShowProfile(!showProfile)}>
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
        {showProfile && (
          <ProfileContainer>
            <ProfileHeader>
              <h2>{user?.fullName}</h2>
              <p>{user?.bio}</p>
              <FiX size={24} onClick={() => setShowProfile(false)} />
            </ProfileHeader>

            <SocialContainer>
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
                    href={user?.linkedinProfile ?? ""}
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
                <Button
                  color="secondary"
                  onClick={() => {
                    setShowEditModal(true);
                    setShowProfile(false);
                  }}
                >
                  <FiEdit size={24} />
                </Button>
                <Button
                  color="danger"
                  onClick={() => {
                    setConfirAction(true);
                    setMessage(DELETE_ACCOUNT_MESSAGE);
                  }}
                >
                  <FiTrash2 size={24} />
                </Button>
                <Button
                  color="warning"
                  onClick={() => {
                    setConfirAction(true);
                    setMessage(GET_OUT_MESSAGE);
                  }}
                >
                  <FiPower size={24} />
                </Button>
              </ProfileFooter>
            )}
          </ProfileContainer>
        )}
      </HeaderContent>
    </HeaderContainer>
  );
};
