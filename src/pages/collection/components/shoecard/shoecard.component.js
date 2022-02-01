import React from "react";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Icon,
  Rating,
  Typography,
} from "@mui/material";

const ShoecardComponent = ({
  name = "Default Name",
  imageurl = "https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI=",
  price = "100",
  rating = 4,
  color = "blue",
  id,
  onClick,
}) => {
  return (
    <Card
      sx={{ maxWidth: "100%" }}
      elevation={3}
      onClick={() => onClick(id, name, imageurl, price, rating, color)}
    >
      <CardActionArea>
        <CardMedia
          component={"img"}
          image={imageurl}
          height={"320"}
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
            <Typography
              variant={"subtitle1"}
              fontWeight={"bold"}
              fontSize={"large"}
            >
              {`₹ ${price}`}
            </Typography>
          </Box>
          <Rating
            value={rating}
            readOnly
            size={"small"}
            sx={{ marginTop: 1 }}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ShoecardComponent;
