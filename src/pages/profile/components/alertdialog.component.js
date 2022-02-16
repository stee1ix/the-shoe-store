import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import { deleteUser } from "firebase/auth";
import { auth } from "../../../services/authentication/authentication.services";

import { useNavigate } from "react-router-dom";

const AlertdialogComponent = ({ open, setOpen }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const onConfirm = () => {
    deleteUser(auth.currentUser)
      .then(() => {
        console.log("user deleted");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">{"Confirm delete?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Deleting your account will remove all your data.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant={"contained"} onClick={handleClose}>
          No
        </Button>
        <Button variant={"outlined"} onClick={onConfirm}>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertdialogComponent;
