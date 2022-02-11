import React, { useContext } from "react";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";

import { CartContext } from "../../../services/cart/cart.context";
import { removeFromCart } from "../../../services/cart/cart.services";

import { useNavigate } from "react-router-dom";

const Item = ({ name, imageurl, size, price, quantity, color, id }) => {
  const { items, setItems } = useContext(CartContext);
  return (
    <Box sx={{ marginBottom: 4 }}>
      <Box
        sx={{
          display: "flex",
          marginBottom: 4,
          alignItems: "center",
          flexDirection: "row",
          paddingLeft: 4,
          paddingRight: 4,
        }}
      >
        <img
          src={imageurl}
          alt={name}
          style={{ width: 120, height: 120, borderRadius: "4px" }}
        />
        <Box
          sx={{
            marginLeft: 4,
            marginRight: 6,
            height: 120,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <Typography variant={"h6"}>{name}</Typography>
          <Typography
            variant={"h6"}
            color={"dimgrey"}
          >{`Size : ${size} UK, Color: ${color.toUpperCase()}, Quantity : ${quantity}`}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "space-evenly",
            flex: 1,
            height: 120,
          }}
        >
          <Typography variant={"h6"} sx={{ marginLeft: "auto" }} noWrap>{`₹ ${
            quantity * price
          }`}</Typography>
          <Button
            size={"small"}
            color={"error"}
            startIcon={<Delete />}
            sx={{ padding: 0 }}
            onClick={() => removeFromCart(items, setItems, id)}
          >
            Remove
          </Button>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};

const ReviewItemsComponent = () => {
  const navigate = useNavigate();

  const { items, total } = useContext(CartContext);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between", minHeight: 400 }}
    >
      <Box
        sx={{
          marginBottom: 4,
          flex: 1,
          marginRight: 16,
        }}
      >
        {items.length > 0 ? (
          <Typography
            variant={"h3"}
            fontWeight={"lighter"}
            sx={{ marginBottom: 6 }}
          >
            Cart Items
          </Typography>
        ) : (
          <>
            <Typography
              variant={"h3"}
              fontWeight={"lighter"}
              sx={{ marginBottom: 6 }}
            >
              No items in cart
            </Typography>
            <Button
              variant={"contained"}
              onClick={() => navigate("/collection/mens")}
            >
              Explore collection
            </Button>
          </>
        )}
        {items.map((item) => {
          const { id, name, imageurl, size, price, quantity, color } = item;

          return (
            <Item
              key={`item${id}`}
              name={name}
              imageurl={imageurl}
              size={size}
              price={price}
              quantity={quantity}
              color={color}
              id={id}
            />
          );
        })}
      </Box>
      {items.length > 0 && (
        <Paper
          sx={{
            width: 300,
            height: "fit-content",
            padding: 2,
          }}
        >
          <Typography variant={"h5"} sx={{ marginBottom: 4 }}>
            Order Summary
          </Typography>
          <Box
            sx={{
              display: "flex",
              flex: 1,
              justifyContent: "space-between",
            }}
          >
            <Typography variant={"h6"} color={"dimgrey"}>
              Subtotal
            </Typography>
            <Typography variant={"h6"}>{`₹ ${total}`}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flex: 1,
              justifyContent: "space-between",
              marginTop: 2,
              marginBottom: 2,
            }}
          >
            <Typography variant={"h6"} color={"dimgrey"}>
              Shipping
            </Typography>
            <Typography variant={"h6"}>+ ₹ 40</Typography>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              flex: 1,
              justifyContent: "space-between",
              marginTop: 2,
              alignItems: "flex-end",
            }}
          >
            <Typography variant={"h6"} color={"grey"}>
              Total
            </Typography>
            <Typography variant={"h6"}>{`₹ ${total + 40}`}</Typography>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default ReviewItemsComponent;
