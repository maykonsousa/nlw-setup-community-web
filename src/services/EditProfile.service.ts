import { Api } from "./config";

export interface IDataUpdateProps {
  fullName?: string;
  githubProfile?: string;
  linkedinProfile?: string;
  rocketseatProfile?: string;
  password?: string;
}

export const EditProfileService = async (
  token: string,
  data: IDataUpdateProps
) => {
  console.log(token, data);
  try {
    const response = await Api.put("/user", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return {
      data: response.data,
      error: null,
    };
  } catch {
    return {
      data: null,
      error: "Falha ao editar perfil. Tente novamente.",
    };
  }
};
