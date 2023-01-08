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
    avatarUrl: string;
    bio: string;
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
    return {
      data,
      error: null,
    };
  } catch (err) {
    return {
      data: null,
      error: "Falha no login. Verifique suas credenciais e tente novamente.",
    };
  }
};
