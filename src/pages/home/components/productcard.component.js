import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";

const ProductcardComponent = ({
  name = "Nike Orange Splash",
  imageurl = "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
  price = 8000,
  rating = 4,
}) => {
  return (
    <Card sx={{ width: 280 }}>
      <CardMedia
        component={"img"}
        height={"220"}
        image={imageurl}
        alt={"shoe image"}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant={"h6"} fontWeight={"bold"} gutterBottom>
          {name}
        </Typography>
        <Rating defaultValue={rating} readOnly />
        <Typography variant={"h6"} fontWeight={"normal"}>
          ₹ {price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductcardComponent;
