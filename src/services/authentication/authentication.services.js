import { Navigate, useLocation } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const auth = getAuth(app);

export const RequireAuth = ({ children }) => {
  const location = useLocation();

  if (!auth.currentUser) {
    return (
      <Navigate to={"/authentication"} state={{ from: location }} replace />
    );
  }
  console.log(auth.currentUser);
  return children;
};
