import React, { useContext } from "react";
import { Badge, Box, Divider, Popover, Typography } from "@mui/material";
import { CartContext } from "../../../services/cart/cart.context";

const CartItem = ({ name, imageurl, size, price, quantity }) => {
  return (
    <Box
      sx={{
        display: "flex",
        marginBottom: 2,
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Badge badgeContent={quantity} color={"primary"}>
        <img
          src={imageurl}
          alt={name}
          style={{ width: 60, height: 60, borderRadius: "4px" }}
        />
      </Badge>
      <Box sx={{ marginLeft: 2, marginRight: 6 }}>
        <Typography variant={"subtitle1"}>{name}</Typography>
        <Typography
          variant={"subtitle1"}
          color={"dimgrey"}
        >{`₹ ${price} - ${size} UK`}</Typography>
      </Box>
      <Typography
        variant={"subtitle1"}
        sx={{ marginLeft: "auto" }}
        noWrap
      >{`₹ ${quantity * price}`}</Typography>
    </Box>
  );
};

const CartComponent = ({ anchorEl, setAnchorEl }) => {
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const { items, total } = useContext(CartContext);

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      {items.length ? (
        <Box sx={{ width: "100%", height: "100%", padding: 4 }}>
          {items.map((item) => {
            const { id, name, imageurl, size, price, quantity } = item;

            return (
              <CartItem
                key={`cart${id}`}
                name={name}
                imageurl={imageurl}
                size={size}
                price={price}
                quantity={quantity}
              />
            );
          })}
          <Divider />
          <Box
            sx={{
              display: "flex",
              flex: 1,
              justifyContent: "space-between",
              marginTop: 2,
            }}
          >
            <Typography variant={"subtitle1"} color={"dimgrey"}>
              Subtotal
            </Typography>
            <Typography variant={"subtitle1"}>{`₹ ${total}`}</Typography>
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
            <Typography variant={"subtitle1"} color={"dimgrey"}>
              Shipping
            </Typography>
            <Typography variant={"subtitle1"}>₹ 40</Typography>
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
            <Typography variant={"subtitle1"} color={"grey"}>
              Total
            </Typography>
            <Typography variant={"h6"}>{`₹ ${total + 40}`}</Typography>
          </Box>
        </Box>
      ) : (
        <Box sx={{ padding: 6, textAlign: "center" }}>
          <img
            src={
              "https://cdn3.iconfinder.com/data/icons/smileys-people-smiley-essential/48/v-44-512.png"
            }
            alt="empty cart"
            style={{ width: 120, height: 120, marginBottom: "32px" }}
          />
          <Typography variant={"h6"} gutterBottom>
            Your cart is empty
          </Typography>
          <Typography variant={"subtitle1"} color={"dimgrey"}>
            Go ahead & explore categories
          </Typography>
        </Box>
      )}
    </Popover>
  );
};

export default CartComponent;
