import React, { useEffect } from "react";
import { Box, TextField, Typography } from "@mui/material";

const FilldetailsComponent = ({
  firstname,
  lastname,
  address,
  city,
  country,
  email,
  phonenumber,
  pincode,
  setAddress,
  setCity,
  setCountry,
  setEmail,
  setFirstname,
  setLastname,
  setPhonenumber,
  setPincode,
  setArrowsDisabled,
}) => {
  useEffect(() => {
    if (
      firstname !== "" &&
      lastname !== "" &&
      email !== "" &&
      phonenumber !== "" &&
      address !== "" &&
      pincode !== "" &&
      city !== "" &&
      country !== ""
    ) {
      setArrowsDisabled(false);
    } else {
      setArrowsDisabled(true);
    }
  }, [
    address,
    city,
    country,
    email,
    firstname,
    lastname,
    phonenumber,
    pincode,
  ]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: 400 }}>
      <Box sx={{ display: "flex" }}>
        <Typography variant={"h6"} sx={{ marginRight: 6 }}>
          Personal Details
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", marginBottom: 4 }}>
            <TextField
              label={"First name"}
              type={"text"}
              sx={{ marginRight: 2 }}
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <TextField
              label={"Last name"}
              type={"text"}
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex" }}>
            <TextField
              label={"Email"}
              type={"email"}
              sx={{ marginRight: 2 }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              helperText={"abc@xyz.com"}
            />
            <TextField
              label={"Phone number"}
              type={"tel"}
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
              helperText={"+91 1234567890"}
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", marginTop: 6 }}>
        <Typography variant={"h6"} sx={{ marginRight: 6 }}>
          Shipping Details
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <TextField
            label={"Address"}
            type={"text"}
            sx={{ marginBottom: 4 }}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            helperText={"5th Block, Old Trafford, Greater Manchester"}
          />
          <Box sx={{ display: "flex" }}>
            <TextField
              label={"Pin code"}
              type={"text"}
              sx={{ marginRight: 2 }}
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
            <TextField
              label={"City"}
              type={"text"}
              sx={{ marginRight: 2 }}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <TextField
              label={"Country"}
              type={"text"}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FilldetailsComponent;
