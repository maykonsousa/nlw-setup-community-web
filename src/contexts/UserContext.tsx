/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from "react";
import { AuthService, IAuthServiceProps } from "../services/Auth.service";
import { GetUserByTokenService } from "../services/GetUserByToken.service";
import { setCookie, parseCookies } from "nookies";
import Router from "next/router";
import { DeleteAccountService } from "../services/DeletAccount.service";
import {
  EditProfileService,
  IDataUpdateProps,
} from "../services/EditProfile.service";
import { GetAllUsersService } from "../services/GetAllUsers.service";

export interface IUser {
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
  onViewTickeModal: (username: string) => void;
  showEditModal: boolean;
  setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser;
  users: IUser[];
  usernameSelected: string | null;
  setUserNameSelected: React.Dispatch<React.SetStateAction<string | null>>;
  showTicketModal: boolean;
  setShowTicketModal: React.Dispatch<React.SetStateAction<boolean>>;
  viewUser: IUser;
  setViewUser: React.Dispatch<React.SetStateAction<IUser>>;
}

export const UserContext = createContext({} as UserContextData);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [users, setUsers] = useState<IUser[]>([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [usernameSelected, setUserNameSelected] = useState<string | null>(null);
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [viewUser, setViewUser] = useState<IUser>({} as IUser);

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

  const onViewTickeModal = (username: string): void => {
    const user = users.find((user) => user.username === username) as IUser;
    setViewUser(user);
    setUserNameSelected(username);
    setShowTicketModal(true);
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
        onViewTickeModal,
        setShowTicketModal,
        usernameSelected,
        setUserNameSelected,
        showTicketModal,
        user,
        showEditModal,
        users,
        viewUser,
        setViewUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
