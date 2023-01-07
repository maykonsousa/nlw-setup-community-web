import React, { createContext, useEffect, useState } from "react";
import { AuthService, IAuthServiceProps } from "../services/Auth.service";

interface IUser {
  id: string;
  username: string;
  fullName: string;
  type: "USER" | "ADMIN";
  githubProfile: string;
  linkedinProfile: string;
  rocketseatProfile: string;
  countIndication: number;
  updatedAt: Date;
}

interface UserProviderProps {
  children: React.ReactNode;
}

interface UserContextData {
  onLogin: (props: IAuthServiceProps) => Promise<void>;
}

export const UserContext = createContext({} as UserContextData);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);

  console.log(user);

  const onLogin = async ({ username, password }: IAuthServiceProps) => {
    const response = await AuthService({ username, password });
    if (response) {
      sessionStorage.setItem("token", response.token);
      setUser(response.userIformations) as unknown as IUser;
    }
  };

  return (
    <UserContext.Provider
      value={{
        onLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
