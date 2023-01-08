import { Api } from "./config";

interface UserDataCreateProps {
  username: string;
  fullName: string;
  githubProfile?: string;
  linkedinProfile?: string;
  rocketseatProfile?: string;
  password: string;
}

export const CreateUser = async (data: UserDataCreateProps) => {
  const response = await Api.post("/users", data);
  return response.data;
};
