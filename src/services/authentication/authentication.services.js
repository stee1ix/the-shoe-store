import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { getAuth, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { AuthenticationContext } from "./authentication.context";

export const auth = getAuth(app);

export const RequireAuth = ({ children }) => {
  const location = useLocation();

  const { isLoggedIn } = useContext(AuthenticationContext);

  if (!isLoggedIn) {
    return (
      <Navigate to={"/authentication"} state={{ from: location }} replace />
    );
  }
  return children;
};

export const onLogout = () => {
  signOut(auth).then(() => {});
};
