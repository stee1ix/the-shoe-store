import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Logout, Person } from "@mui/icons-material";
import { onLogout } from "../../../services/authentication/authentication.services";

const UsermenuComponent = ({ anchorUserEl, setUserAnchorEl }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    setUserAnchorEl(null);
  };

  const open = Boolean(anchorUserEl);
  const id = open ? "user-popover" : undefined;

  return (
    <Menu
      id={id}
      open={open}
      anchorEl={anchorUserEl}
      onClose={handleClose}
      onClick={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <MenuItem onClick={() => navigate("account")}>
        <ListItemIcon>
          <Person fontSize={"small"} />
        </ListItemIcon>
        My account
      </MenuItem>
      <MenuItem
        onClick={() => {
          onLogout();
          navigate("/", { replace: true });
        }}
      >
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
};

export default UsermenuComponent;
