import { useContext, useReducer, useState } from "react";
import authenticationReducer from "./reducers/authenticationReducer";
import AuthenticationContext from "./contexts/authenticationContext";

const LoginStatus = () => {
  const { user, dispatch: dispatchAuth } = useContext(AuthenticationContext);

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatchAuth({ type: "logout" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => dispatchAuth({ type: "login" })} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
