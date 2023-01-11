import { IUser } from "../contexts/UserContext";
import { Api } from "./config";

export const GetUserByTokenService = async (token: string): Promise<IUser> => {
  const response = await Api.get("/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const name = response.data.fullName
    .split(" ")
    .filter((word: string) => word !== "");
  response.data.fullName = name[0] + " " + name[name.length - 1];

  const { password, ...user } = response.data;

  return user;
};
