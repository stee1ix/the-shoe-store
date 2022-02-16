import React from "react";
import { Box } from "@mui/material";

import SigninComponent from "./components/signin.component";
import SignupComponent from "./components/signup.component";

const AuthenticationPage = () => {
  return (
    <Box>
      <SigninComponent />
      <SignupComponent />
    </Box>
  );
};

export default AuthenticationPage;
