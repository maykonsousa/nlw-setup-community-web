/* eslint-disable jsx-a11y/anchor-is-valid */

import { format } from "date-fns";
import Link from "next/link";
import { MagnifyingGlass } from "phosphor-react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TableContainer } from "./TableRanking.styles";

export function TableRanking() {
  const { users } = useContext(UserContext);

  const usersSorted = users?.sort((a, b) => {
    if (a.countIndication > b.countIndication) {
      return -1;
    }
    if (a.countIndication < b.countIndication) {
      return 1;
    }
    return 0;
  });

  const { onViewTickeModal } = useContext(UserContext);

  const date = users[0]?.updatedAt;

  //fromat date to pt-BR format like 01/01/2021 00:00:00 with date-fns
  const formatDate = (date: string) => {
    if (!date) return null;
    const dateFormated = new Date(date);
    //remove 3 hours to date
    dateFormated.setHours(dateFormated.getHours() - 3);
    return format(dateFormated, "dd/MM/yyyy HH:mm:ss");
  };

  const dateUpdatedFormated = formatDate(date);

  return (
    <TableContainer>
      {dateUpdatedFormated ? (
        <p>{`Última atualização: ${dateUpdatedFormated}`}</p>
      ) : null}
      {usersSorted?.length ? (
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
            {usersSorted?.map((user, index) => (
              <tr key={user.id}>
                <td>{`${index + 1}º`}</td>
                <td>{user.username}</td>
                <td>{user.countIndication}</td>
                <td>
                  <Link
                    href="#"
                    onClick={() => onViewTickeModal(user.username)}
                  >
                    <MagnifyingGlass size={24} /> ver detalhes
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1>Nenhum usuário encontrado</h1>
      )}
    </TableContainer>
  );
}
