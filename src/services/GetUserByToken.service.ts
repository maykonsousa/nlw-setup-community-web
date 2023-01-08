import { Api } from "./config";

export const GetUserByTokenService = async (token: string) => {
  const response = await Api.get("/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  delete response.data.password;

  return response.data;
};
