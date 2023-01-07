import { Api } from "./config";

export interface IAuthServiceProps {
  username: string;
  password: string;
}

export interface IAuthServiceResponse {
  token: string;
  userIformations: {
    id: string;
    type: "USER" | "ADMIN";
    username: string;
    fullName: string;
    countIndication: number;
    githubProfile: string;
    linkedinProfile: string;
    rocketseatProfile: string;
    updatedAt: Date;
  };
}

export const AuthService = async ({
  username,
  password,
}: IAuthServiceProps) => {
  try {
    const { data } = await Api.post<IAuthServiceResponse>("/users/auth", {
      username,
      password,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
