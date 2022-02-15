import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { fetchPastOrders } from "../../services/profile/profile.services";

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
    <Box sx={{ width: "100%", display: "flex" }}>
      <img src={imageurl} width={200} height={200} alt={name} />
      <Box>
        <Typography>{name}</Typography>
        <Typography>{quantity}</Typography>
        <Typography>{address}</Typography>
        <Typography>{city}</Typography>
        <Typography>{country}</Typography>
        <Typography>{date}</Typography>
        <Typography>{username}</Typography>
        <Typography>{phonenumber}</Typography>
        <Typography>{total}</Typography>
      </Box>
    </Box>
  );
};

const ProfilePage = () => {
  const [pastOrders, setPastOrders] = useState([]);

  useEffect(() => {
    fetchPastOrders().then((r) => setPastOrders(r));
  }, []);

  return (
    <Box>
      <Typography variant="h4" fontWeight={"lighter"}>
        Past Orders
      </Typography>

      {pastOrders.map((item) => {
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
      })}
    </Box>
  );
};

export default ProfilePage;
