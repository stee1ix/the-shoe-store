import React from "react";
import { Box, Button } from "@mui/material";

import SigninComponent from "./components/signin.component";
import SignupComponent from "./components/signup.component";

import { signOut } from "firebase/auth";
import { auth } from "../../services/authentication/authentication.services";

const AuthenticationPage = () => {
  const logout = () => {
    signOut(auth).then(() => console.log("logged out"));
  };

  return (
    <Box>
      <SigninComponent />
      <SignupComponent />
      <Button variant={"outlined"} onClick={logout}>
        Logout
      </Button>
    </Box>
  );
};

export default AuthenticationPage;
