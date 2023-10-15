import { ReactNode, useReducer } from "react";
import AuthenticationContext from "./authenticationContext";

export interface AuthenticationAction {
  type: "login" | "logout";
}

const authenticationReducer = (
  user: string,
  action: AuthenticationAction
): string => {
  switch (action.type) {
    case "login":
      return "Ayra Starr";
    case "logout":
      return "";
  }
};


interface Props {
  children: ReactNode;
}

const AuthenticationProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(authenticationReducer, "");

  return (
    <AuthenticationContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
