import { Api } from "./config";

export const DeleteAccountService = async (token: string) => {
  const response = await Api.delete(`/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};
