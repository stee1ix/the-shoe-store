import React, { useState } from "react";
import {
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

  const signIn = (email, password) => {
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
    <Box>
      <Typography>SignIn</Typography>

      <TextField
        variant="outlined"
        label={"email"}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        variant="outlined"
        label={"password"}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Typography>{error}</Typography>

      <Button onClick={() => signIn(email, password)}>Sign In</Button>

      {isLoading && <CircularProgress />}
    </Box>
  );
};

export default SigninComponent;
