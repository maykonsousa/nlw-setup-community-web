import { IUser } from "../contexts/UserContext";
import { Api } from "./config";

export const GetAllUsersService = async (token: string) => {
  try {
    const { data } = await Api.get("/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const formatedData = data.map((user: IUser) => {
      const userFormated = { ...user };
      const wordOfFullname = userFormated.fullName
        .split(" ")
        .filter((word: string) => word !== "");
      userFormated.fullName =
        wordOfFullname[0] + " " + wordOfFullname[wordOfFullname.length - 1];

      return userFormated;
    });

    return { data: formatedData, error: null };
  } catch {
    return { data: null, error: "Erro ao buscar usuários" };
  }
};
