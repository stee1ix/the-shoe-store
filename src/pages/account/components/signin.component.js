import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../services/authentication/authentication.services";
import { useLocation, useNavigate } from "react-router-dom";

const SigninComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const signIn = (event, email, password) => {
    event.preventDefault();

    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        setIsLoading(false);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  };

  return (
    <Box sx={{ width: 400, marginRight: 16 }}>
      <Typography variant={"h4"} fontWeight={"normal"}>
        Already have an account
      </Typography>
      <Typography variant={"subtitle1"} color={"dimgrey"} sx={{ marginTop: 1 }}>
        Login with your email and password
      </Typography>

      <Box
        component={"form"}
        onSubmit={(event) => signIn(event, email, password)}
        sx={{ display: "flex", flexDirection: "column", marginBlock: 6 }}
      >
        <TextField
          required
          type={"email"}
          variant="outlined"
          label={"Email"}
          placeholder={"abc@xyz.com"}
          sx={{ marginBottom: 4 }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          required
          variant="outlined"
          label={"Password"}
          sx={{ marginBottom: 2 }}
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <Alert severity="error">{error}</Alert>}

        <Button
          type={"submit"}
          variant={"contained"}
          sx={{ alignSelf: "flex-start", marginTop: 4 }}
        >
          Login
        </Button>
      </Box>

      {isLoading && <CircularProgress />}
    </Box>
  );
};

export default SigninComponent;
