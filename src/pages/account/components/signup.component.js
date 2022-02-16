import React, { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../services/authentication/authentication.services";
import { useLocation, useNavigate } from "react-router-dom";

const SignupComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const signUp = (name, email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => userCredential.user)
      .then((user) => {
        updateProfile(user, {
          displayName: name,
        }).then(() => {
          setIsLoading(false);
          navigate(from, { replace: true });
        });
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  };

  return (
    <Box>
      <Typography>SignUp</Typography>
      <TextField
        variant="outlined"
        label={"name"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        variant="outlined"
        label={"email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        variant="outlined"
        label={"password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Typography>{error}</Typography>

      <Button onClick={() => signUp(name, email, password)}>Sign Up</Button>

      {isLoading && <CircularProgress />}
    </Box>
  );
};

export default SignupComponent;
