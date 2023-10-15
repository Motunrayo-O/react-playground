import { Dispatch } from "react";
import { AuthenticationAction } from "../reducers/authenticationReducer";
import React from "react";

interface AuthenticationContextType {
  user: string;
  dispatchAuth: Dispatch<AuthenticationAction>;
}

const AuthenticationContext = React.createContext<AuthenticationContextType>(
  {} as AuthenticationContextType
);

export default AuthenticationContext;
