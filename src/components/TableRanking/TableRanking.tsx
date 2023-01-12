/* eslint-disable jsx-a11y/anchor-is-valid */

import { format } from "date-fns";
import Link from "next/link";
import { parseCookies } from "nookies";
import { useContext } from "react";
import { RotatingLines } from "react-loader-spinner";
import { UserContext } from "../../contexts/UserContext";
import { Button } from "../Button";
import { RegressiveTimeButton } from "../RegressiveTimeButton";
import {
  LoadingContainer,
  ProfileImageContainer,
  TableContainer,
} from "./TableRanking.styles";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import GeneralAvatar from "../../assets/developer-icon.webp";
import Image from "next/image";

export function TableRanking() {
  const { users } = useContext(UserContext);
  const HasUpdated = parseCookies().hasUpdated;

  const usersSorted = users?.sort((a, b) => {
    if (a.countIndication > b.countIndication) {
      return -1;
    }
    if (a.countIndication < b.countIndication) {
      return 1;
    }
    return 0;
  });

  const { onViewTickeModal, onUpdateAllUsers } = useContext(UserContext);

  const onExpireDate = (): Date => {
    if (HasUpdated) {
      const date = new Date(HasUpdated);
      date.setSeconds(date.getSeconds() + 1800);
      return date;
    }
    return new Date();
  };

  const date = users[0]?.updatedAt;

  const formatDate = (date: string) => {
    if (!date) return null;
    const dateFormated = new Date(date);
    //remove 3 hours to date
    dateFormated.setHours(dateFormated.getHours() - 3);
    return format(dateFormated, "dd/MM/yyyy HH:mm:ss");
  };

  const dateUpdatedFormated = formatDate(date);

  return users.length ? (
    <TableContainer>
      <div>
        {dateUpdatedFormated ? (
          <p>{`Última atualização: ${dateUpdatedFormated}`}</p>
        ) : null}

        {HasUpdated ? (
          <RegressiveTimeButton expiryTimestamp={onExpireDate()} />
        ) : (
          <Button
            color="warning"
            onClick={onUpdateAllUsers}
            disabled={Boolean(HasUpdated)}
          >
            Atualizar
          </Button>
        )}
      </div>

      <table>
        <thead>
          <tr>
            <th>Posição</th>
            <th>Usuário</th>
            <th>Indicações</th>
          </tr>
        </thead>
        <tbody>
          {usersSorted?.map((user, index) => (
            <tr key={user.id}>
              <td>{`${index + 1}º`}</td>
              <td className="profile">
                <ProfileImageContainer
                  onClick={() => onViewTickeModal(user.username)}
                >
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
                {user.fullName}
              </td>
              <td>{user.countIndication}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  ) : (
    <LoadingContainer>
      <RotatingLines
        strokeColor="green"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </LoadingContainer>
  );
}
