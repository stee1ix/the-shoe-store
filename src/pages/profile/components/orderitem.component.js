import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Typography,
} from "@mui/material";

const OrderItem = ({
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
}) => {
  return (
    <Accordion sx={{ marginBottom: 3 }}>
      <AccordionSummary sx={{ width: "100%", display: "flex" }}>
        <img
          src={imageurl}
          width={100}
          height={100}
          alt={name}
          style={{ borderRadius: 5 }}
        />
        <Box sx={{ display: "flex", flexDirection: "column", marginLeft: 4 }}>
          <Typography variant={"h6"} fontWeight={"normal"}>
            {name}
          </Typography>
          <Typography
            variant={"subtitle1"}
            sx={{ marginTop: "auto" }}
          >{`Quantity: ${quantity}`}</Typography>
          <Typography variant={"subtitle1"}>{`Order Date: ${date}`}</Typography>
        </Box>
        <Box
          sx={{
            marginLeft: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Typography variant={"h6"} fontWeight={"normal"}>
            {`Total Price: ₹${total}`}
          </Typography>
          <Typography
            variant={"subtitle2"}
            color={"dimgrey"}
            sx={{ marginTop: "auto" }}
          >
            More details ↓
          </Typography>
        </Box>
      </AccordionSummary>
      <Divider variant={"middle"} flexItem />
      <AccordionDetails sx={{ marginTop: 1 }}>
        <Typography variant={"h5"} fontWeight={"normal"}>
          Delivery Details
        </Typography>
        <Box sx={{ display: "flex", marginTop: 2 }}>
          <Box>
            <Typography variant={"subtitle1"}>{`Name: ${username}`}</Typography>
            <Typography
              variant={"subtitle1"}
            >{`Phone Number: ${phonenumber}`}</Typography>
            <Typography
              variant={"subtitle1"}
            >{`Address: ${address}`}</Typography>
          </Box>
          <Box sx={{ marginLeft: 16 }}>
            <Typography variant={"subtitle1"}>{`City: ${city}`}</Typography>
            <Typography
              variant={"subtitle1"}
            >{`Country: ${country}`}</Typography>
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default OrderItem;
