import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const FilldetailsComponent = () => {
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
            />
            <TextField label={"Last name"} type={"text"} />
          </Box>
          <Box sx={{ display: "flex" }}>
            <TextField label={"Email"} type={"email"} sx={{ marginRight: 2 }} />
            <TextField label={"Phone number"} type={"tel"} />
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", marginTop: 6 }}>
        <Typography variant={"h6"} sx={{ marginRight: 6 }}>
          Shipping Details
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <TextField label={"Address"} type={"text"} sx={{ marginBottom: 4 }} />
          <Box sx={{ display: "flex" }}>
            <TextField
              label={"Pin code"}
              type={"number"}
              sx={{ marginRight: 2 }}
            />
            <TextField label={"City"} type={"text"} sx={{ marginRight: 2 }} />
            <TextField label={"Country"} type={"text"} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FilldetailsComponent;
