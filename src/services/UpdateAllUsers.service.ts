import { Api } from "./config";

export const UpdateAllUsersService = async (token: string) => {
  console.log("teste", token);
  try {
    await Api.put(
      "/users/all",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch {
    console.log("error");
  }
};
