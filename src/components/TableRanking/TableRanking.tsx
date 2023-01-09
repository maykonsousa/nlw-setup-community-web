/* eslint-disable jsx-a11y/anchor-is-valid */

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

  return (
    <TableContainer>
      {users ? <p>{`Última atualização: ${users?.[0]?.updatedAt}`}</p> : null}
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
