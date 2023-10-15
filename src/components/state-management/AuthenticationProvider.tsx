import { ReactNode, useReducer } from "react";
import authenticationReducer from "./reducers/authenticationReducer";
import AuthenticationContext from "./contexts/authenticationContext";

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
