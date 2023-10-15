import { useContext } from "react";
import AuthenticationContext from "../contexts/authenticationContext";

const useAuth = () => useContext(AuthenticationContext);

export default useAuth;
