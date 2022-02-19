import React, { useState } from "react";
import {
  Alert,
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

  const signUp = (event, name, email, password) => {
    event.preventDefault();

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
    <Box sx={{ width: 400, marginLeft: 16 }}>
      <Typography variant={"h4"} fontWeight={"normal"}>
        Don't have an account
      </Typography>
      <Typography variant={"subtitle1"} color={"dimgrey"} sx={{ marginTop: 1 }}>
        Sign up with your details
      </Typography>

      <Box
        component={"form"}
        onSubmit={(event) => signUp(event, name, email, password)}
        sx={{ display: "flex", flexDirection: "column", marginBlock: 6 }}
      >
        <TextField
          required
          variant="outlined"
          label={"Name"}
          value={name}
          type={"text"}
          placeholder={"Cristiano Ronaldo"}
          sx={{ marginBottom: 4 }}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          variant="outlined"
          label={"Email"}
          placeholder={"abc@xyz.com"}
          value={email}
          type={"email"}
          required
          sx={{ marginBottom: 4 }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          label={"Password"}
          value={password}
          sx={{ marginBottom: 2 }}
          type={"password"}
          helperText={"Minimum 6 characters"}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <Alert variant={"filled"} severity="error">
            {error}
          </Alert>
        )}

        <Button
          type={"submit"}
          variant={"contained"}
          sx={{ alignSelf: "flex-start", marginTop: 4 }}
        >
          Sign Up
        </Button>
      </Box>
      {isLoading && <CircularProgress />}
    </Box>
  );
};

export default SignupComponent;
