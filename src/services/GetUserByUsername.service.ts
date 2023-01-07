import { Api } from "./config";

export const GetUserByUsernameService = async (username: string) => {
  try {
    const user = await Api.get(`/user/${username}`);
    return user.data;
  } catch (error) {
    return null;
  }
};
