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
import { UpdateAllUsersService } from "../services/UpdateAllUsers.service";

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
  updatedAt: string;
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
  onUpdateAllUsers: () => Promise<void>;
  onReloadUsers: () => Promise<void>;
  setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  setUserNameSelected: React.Dispatch<React.SetStateAction<string | null>>;
  setShowTicketModal: React.Dispatch<React.SetStateAction<boolean>>;
  setViewUser: React.Dispatch<React.SetStateAction<IUser>>;
  setPageLoad: React.Dispatch<React.SetStateAction<boolean>>;
  showEditModal: boolean;
  user: IUser;
  users: IUser[];
  usernameSelected: string | null;
  showTicketModal: boolean;
  viewUser: IUser;
  pageLoad: boolean;
}

export const UserContext = createContext({} as UserContextData);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [users, setUsers] = useState<IUser[]>([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [usernameSelected, setUserNameSelected] = useState<string | null>(null);
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [viewUser, setViewUser] = useState<IUser>({} as IUser);
  const [pageLoad, setPageLoad] = useState(false);

  const cookieToken = parseCookies().token;

  const OnLoadPage = async (): Promise<void> => {
    setPageLoad(true);
    setTimeout(() => {
      setPageLoad(false);
    }, 2000);
  };

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
      await OnLoadPage();
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
    OnLoadPage();
    await DeleteAccountService(`${cookieToken}`);

    setCookie(null, "token", "");
    Router.push("/");

    setUser({} as IUser);
  };

  const onLogoutAccount = (): void => {
    setCookie(null, "token", "");
    setCookie(null, "hasUpdated", "");
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

  const onReloadUsers = async (): Promise<void> => {
    setUsers([]);
    await GetAllUsers();
  };

  const onUpdateAllUsers = async (): Promise<void> => {
    setUsers([]);
    await UpdateAllUsersService(cookieToken);
    await GetAllUsers();
    const date = new Date();

    setCookie(null, "hasUpdated", date.toString(), {
      maxAge: 60 * 30,
      path: "/",
    });
  };

  useEffect(() => {
    if (cookieToken) {
      GetUserLoguedData();
      GetAllUsers();
      OnLoadPage();
    }
  }, [cookieToken]);

  return (
    <UserContext.Provider
      value={{
        onLogin,
        onDeleteAccount,
        onLogoutAccount,
        onEditAccount,
        onViewTickeModal,
        onUpdateAllUsers,
        onReloadUsers,
        setViewUser,
        setShowEditModal,
        setShowTicketModal,
        setUserNameSelected,
        setPageLoad,
        usernameSelected,
        showTicketModal,
        user,
        showEditModal,
        users,
        viewUser,
        pageLoad,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
