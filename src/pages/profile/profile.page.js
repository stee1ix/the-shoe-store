import React, { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Divider,
  TextField,
  Typography,
} from "@mui/material";

import { fetchPastOrders } from "../../services/profile/profile.services";
import { auth } from "../../services/authentication/authentication.services";
import { updateProfile } from "firebase/auth";

import AlertdialogComponent from "./components/alertdialog.component";
import OrderItem from "./components/orderitem.component";

const ProfilePage = () => {
  const [pastOrders, setPastOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [name, setName] = useState("");
  const [nameUpdateStatus, setNameUpdateStatus] = useState(null);

  const onUpdateName = (e) => {
    e.preventDefault();

    updateProfile(auth.currentUser, { displayName: name })
      .then(() => {
        console.log("Name updated");
        setNameUpdateStatus("Name updated successfully!");
      })
      .catch((err) => {
        console.log(err);
        setNameUpdateStatus("Error in updating name!");
      });
  };

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const handleClickOpenDeleteDialog = () => {
    setOpenDeleteDialog(true);
  };

  const onDeleteAccount = () => {
    handleClickOpenDeleteDialog();
  };

  useEffect(() => {
    setIsLoading(true);
    fetchPastOrders()
      .then((r) => {
        setIsLoading(false);
        setPastOrders(r);
      })
      .then(() => console.log(pastOrders))
      .catch((err) => {
        setError(err);
      });
    return () => {
      setPastOrders([]);
    };
  }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          marginTop: 6,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <img
            src={"https://c.tenor.com/rs3suVPVRKgAAAAi/cxyduck.gif"}
            style={{ width: 250, height: 250 }}
          />
          <Box
            sx={{ display: "flex", flexDirection: "column" }}
            component={"form"}
            autoComplete="off"
          >
            <Typography
              variant={"h4"}
              fontWeight={"normal"}
              sx={{ marginBottom: 4 }}
            >
              Personal Details
            </Typography>
            <TextField
              label={"Name"}
              defaultValue={auth.currentUser.displayName}
              type={"text"}
              onChange={(e) => setName(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label={"Email"}
              type={"email"}
              InputProps={{
                readOnly: true,
              }}
              defaultValue={auth.currentUser.email}
            />
            <Box sx={{ marginBlock: 4 }}>
              <Button
                variant={"contained"}
                type={"submit"}
                onClick={onUpdateName}
                sx={{ marginRight: 2 }}
              >
                Update
              </Button>
              <Button
                variant={"outlined"}
                color={"error"}
                onClick={onDeleteAccount}
              >
                Delete Account
              </Button>
            </Box>
            {nameUpdateStatus !== null &&
              (nameUpdateStatus === "Name updated successfully!" ? (
                <Alert severity="success">{nameUpdateStatus}</Alert>
              ) : (
                <Alert severity="error">{nameUpdateStatus}</Alert>
              ))}
          </Box>
          <AlertdialogComponent
            open={openDeleteDialog}
            setOpen={setOpenDeleteDialog}
          />
        </Box>
        <Divider sx={{ marginBlock: 5 }} />
        <Box
          sx={{
            marginBottom: 10,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h4"
            sx={{ marginBottom: 4 }}
            fontWeight={"normal"}
          >
            Past Orders
          </Typography>

          {isLoading && (
            <CircularProgress
              sx={{ marginTop: 4, alignSelf: "center" }}
              size={80}
            />
          )}
          {pastOrders.length !== 0
            ? pastOrders.map((item) => {
                const {
                  id,
                  name,
                  username,
                  quantity,
                  address,
                  city,
                  country,
                  date,
                  imageurl,
                  phonenumber,
                  total,
                } = item;
                return (
                  <OrderItem
                    key={id}
                    name={name}
                    username={username}
                    quantity={quantity}
                    address={address}
                    city={city}
                    country={country}
                    date={date}
                    imageurl={imageurl}
                    phonenumber={phonenumber}
                    total={total}
                  />
                );
              })
            : !isLoading && (
                <Box sx={{ alignSelf: "center", textAlign: "center" }}>
                  <img
                    src={
                      "https://c.tenor.com/Ge1T5k9YSIwAAAAM/cxyduck-cxydck.gif"
                    }
                    width={200}
                    height={200}
                  />
                  <Typography
                    variant={"h4"}
                    fontWeight={"lighter"}
                    sx={{ marginTop: 4 }}
                  >
                    No orders made yet!
                  </Typography>
                </Box>
              )}
          {error !== null && (
            <Typography>Error in fetching past orders.</Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
