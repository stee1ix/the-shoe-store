import React from "react";
import { Box, Divider } from "@mui/material";

import SigninComponent from "./components/signin.component";
import SignupComponent from "./components/signup.component";

const AuthenticationPage = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          width: "fit-content",
          marginTop: 12,
        }}
      >
        <SigninComponent />
        <Divider orientation={"vertical"} flexItem />
        <SignupComponent />
      </Box>
    </Box>
  );
};

export default AuthenticationPage;
