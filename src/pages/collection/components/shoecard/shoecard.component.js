import React from "react";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Icon,
  Typography,
} from "@mui/material";
import { Star } from "@mui/icons-material";

const ShoecardComponent = ({
  name = "Nike Mercurial",
  imageurl = "https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI=",
  price = "100",
  rating = 4,
}) => {
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  const unratedStarsArray = Array.from(new Array(5 - Math.floor(rating)));

  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardActionArea>
        <CardMedia
          component={"img"}
          image={imageurl}
          height={"240"}
          alt={name}
        />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant={"subtitle1"} fontWeight={"bold"}>
              {name}
            </Typography>
            <Typography variant={"subtitle1"} fontWeight={"bold"}>
              {`₹${price}`}
            </Typography>
          </Box>
          <Box>
            {ratingArray.map((_, index) => {
              return (
                <Icon key={index}>
                  <Star fontSize={"small"} />
                </Icon>
              );
            })}
            {unratedStarsArray.map((_, index) => {
              return (
                <Icon key={index}>
                  <Star fontSize={"small"} color={"disabled"} />
                </Icon>
              );
            })}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ShoecardComponent;
