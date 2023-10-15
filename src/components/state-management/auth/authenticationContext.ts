import { Dispatch } from "react";
import React from "react";
import { AuthenticationAction } from "./AuthenticationProvider";

interface AuthenticationContextType {
  user: string;
  dispatch: Dispatch<AuthenticationAction>;
}

const AuthenticationContext = React.createContext<AuthenticationContextType>(
  {} as AuthenticationContextType
);

export default AuthenticationContext;
