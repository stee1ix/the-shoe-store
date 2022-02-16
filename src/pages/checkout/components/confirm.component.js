import React from "react";
import { Box, Button, Typography } from "@mui/material";

const ConfirmComponent = ({ handleNext }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={"https://c.tenor.com/1YWH1QI9pVcAAAAi/utya-kaczka.gif"}
        style={{ width: 300, height: 300 }}
        alt="Order Confirmed"
      />
      <Typography variant={"h4"} sx={{ marginTop: 4, marginBottom: 6 }}>
        Congratulations! Your order is confirmed.
      </Typography>

      <Button variant={"contained"} onClick={handleNext}>
        Continue
      </Button>
    </Box>
  );
};

export default ConfirmComponent;
