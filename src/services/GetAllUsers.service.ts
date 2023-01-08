import { Api } from "./config";

export const GetAllUsersService = async (token: string) => {
  try {
    const response = await Api.get("/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { data: response.data, error: null };
  } catch {
    return { data: null, error: "Erro ao buscar usuários" };
  }
};
