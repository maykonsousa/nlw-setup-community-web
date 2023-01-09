/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from "react";
import { AuthService, IAuthServiceProps } from "../services/Auth.service";
import { GetUserByTokenService } from "../services/GetUserByToken.service";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import Router from "next/router";
import { DeleteAccountService } from "../services/DeletAccount.service";
import {
  EditProfileService,
  IDataUpdateProps,
} from "../services/EditProfile.service";
import { GetAllUsersService } from "../services/GetAllUsers.service";
import { GetServerSideProps } from "next";

interface IUser {
  id: string;
  username: string;
  fullName: string;
  type: "USER" | "ADMIN";
  githubProfile: string;
  linkedinProfile: string;
  rocketseatProfile: string;
  avatarUrl: string;
  bio: string;
  countIndication: number;
  updatedAt: Date;
}

interface UserProviderProps {
  children: React.ReactNode;
  token: string;
}

interface ILoginData {
  data: {
    token: string;
  } | null;
  error: string | null;
}

interface UserContextData {
  onLogin: (props: IAuthServiceProps) => Promise<ILoginData>;
  onDeleteAccount: () => Promise<void>;
  onLogoutAccount: () => void;
  onEditAccount: (data: IDataUpdateProps) => Promise<string | null>;
  showEditModal: boolean;
  setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser;
  users: IUser[];
}

export const UserContext = createContext({} as UserContextData);

export const UserProvider = ({ children, token }: UserProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [users, setUsers] = useState<IUser[]>([]);
  const [showEditModal, setShowEditModal] = useState(false);

  console.log("token", token);

  const cookieToken = parseCookies().token;

  const onLogin = async ({
    username,
    password,
  }: IAuthServiceProps): Promise<ILoginData> => {
    const { data, error } = await AuthService({ username, password });
    if (data) {
      setCookie(null, "token", data.token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });

      Router.push("/ranking");
    }
    return { data, error };
  };

  const GetUserLoguedData = async () => {
    const response = await GetUserByTokenService(`${cookieToken}`);
    setUser(response);
  };

  const GetAllUsers = async () => {
    const { data, error } = await GetAllUsersService(`${cookieToken}`);
    setUsers(data);
    return error;
  };

  const onDeleteAccount = async (): Promise<void> => {
    await DeleteAccountService(`${cookieToken}`);

    setCookie(null, "token", "");
    Router.push("/");

    setUser({} as IUser);
  };

  const onLogoutAccount = (): void => {
    setCookie(null, "token", "");
    Router.push("/");
  };

  const onEditAccount = async (
    dataUpdated: IDataUpdateProps
  ): Promise<string | null> => {
    if (cookieToken) {
      const { data, error } = await EditProfileService(
        cookieToken,
        dataUpdated
      );

      if (data) {
        setUser(data);
      }
      return error;
    }
    return "Falha ao editar perfil. Saia da aplicação e tente novamente.";
  };

  useEffect(() => {
    if (cookieToken) {
      GetUserLoguedData();
      GetAllUsers();
    }
  }, [cookieToken]);

  return (
    <UserContext.Provider
      value={{
        onLogin,
        onDeleteAccount,
        onLogoutAccount,
        setShowEditModal,
        onEditAccount,
        user,
        showEditModal,
        users,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

//get static props
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      token,
    },
  };
};
