/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from "react";
import { AuthService, IAuthServiceProps } from "../services/Auth.service";
import { GetUserByTokenService } from "../services/GetUserByToken.service";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import Router from "next/router";
import { DeleteAccountService } from "../services/DeletAccount.service";

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
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  token: string | null;
  user: IUser;
}

export const UserContext = createContext({} as UserContextData);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [token, setToken] = useState<string | null>(null);

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
      setToken(data.token);

      Router.push("/ranking");
    }
    return { data, error };
  };

  const GetUserLoguedData = async () => {
    const response = await GetUserByTokenService(`${token}`);
    setUser(response);
  };

  const onDeleteAccount = async (): Promise<void> => {
    await DeleteAccountService(`${token}`);

    setCookie(null, "token", "");
    setToken(null);

    setUser({} as IUser);
  };

  const onLogoutAccount = (): void => {
    setCookie(null, "token", "");
    setToken(null);
    Router.push("/");
  };

  useEffect(() => {
    if (token) {
      GetUserLoguedData();
      setCookie(null, "token", token, {
        maxAge: 60 * 60 * 24,
        path: "/",
      });
    }
  }, [token]);

  return (
    <UserContext.Provider
      value={{
        onLogin,
        onDeleteAccount,
        onLogoutAccount,
        token,
        setToken,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
