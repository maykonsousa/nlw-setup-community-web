/* eslint-disable jsx-a11y/anchor-is-valid */

import { format } from "date-fns";
import Link from "next/link";
import { parseCookies } from "nookies";
import { MagnifyingGlass } from "phosphor-react";
import { useContext } from "react";
import { RotatingLines } from "react-loader-spinner";
import { UserContext } from "../../contexts/UserContext";
import { Button } from "../Button";
import { RegressiveTimeButton } from "../RegressiveTimeButton";
import { LoadingContainer, TableContainer } from "./TableRanking.styles";

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
            <th>Detalhes</th>
          </tr>
        </thead>
        <tbody>
          {usersSorted?.map((user, index) => {
            const words = user.fullName.split(" ");
            const firstName = words[0];
            const lastName = words[words.length - 1];

            return (
              <tr key={user.id}>
                <td>{`${index + 1}º`}</td>
                <td>{`${firstName} ${lastName}`}</td>
                <td>{user.countIndication}</td>
                <td>
                  <Link
                    href="#"
                    onClick={() => onViewTickeModal(user.username)}
                  >
                    <MagnifyingGlass size={24} /> <span>ver detalhes</span>
                  </Link>
                </td>
              </tr>
            );
          })}
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
