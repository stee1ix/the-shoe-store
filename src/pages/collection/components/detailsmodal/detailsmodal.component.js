import React, { useContext, useEffect, useState } from "react";

import {
  Backdrop,
  Box,
  Button,
  Fade,
  FormControl,
  IconButton,
  InputLabel,
  ListItemIcon,
  MenuItem,
  Modal,
  Rating,
  Select,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import {
  Circle,
  Favorite,
  FavoriteBorder,
  ShoppingCartOutlined,
} from "@mui/icons-material";

import { CartContext } from "../../../../services/cart/cart.context";
import { removeFromCart } from "../../../../services/cart/cart.services";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 700,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 1,
  padding: 4,
};

const DetailsmodalComponent = ({ open, handleClose, data }) => {
  const { id, name, imageurl, price, rating, color } = data;

  const transformColor = (color) => {
    switch (color) {
      case "red":
        return "error";
      case "green":
        return "primary";
      case "blue":
        return "info";
      case "dark":
        return "action";
      default:
        return "action";
    }
  };

  const colorName = transformColor(color);

  const [size, setSize] = useState(7);

  const handleSizeChange = (event, newSize) => {
    setSize(newSize);
  };

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const [inCart, setInCart] = useState(false);

  const { items, setItems } = useContext(CartContext);

  const checkItemInCart = (id) => {
    const found = items.find((item) => {
      return item.id === id;
    });

    if (found !== undefined) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  };

  useEffect(() => {
    checkItemInCart(id);
  }, [id, items]);

  const addToCart = () => {
    const newItem = {
      id,
      name,
      imageurl,
      size,
      price,
      quantity,
    };
    setItems([...items, newItem]);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
            }}
          >
            <img
              src={imageurl}
              height={"100%"}
              width={"50%"}
              style={{ objectFit: "cover", borderRadius: "4px" }}
              alt={name}
            />
            <Box sx={{ width: 48 }} />
            <Box
              sx={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography variant={"h4"}>{name}</Typography>
                    <Rating
                      value={rating}
                      readOnly
                      size={"medium"}
                      sx={{ marginTop: 1 }}
                    />
                  </Box>
                  <IconButton
                    color={"error"}
                    size={"large"}
                    sx={{ alignSelf: "flex-start" }}
                  >
                    <Favorite fontSize={"large"} />
                  </IconButton>
                </Box>
                {/*color and sizes*/}
                <Box
                  sx={{
                    display: "flex",
                    marginTop: 4,
                    flexDirection: "column",
                  }}
                >
                  {/*color*/}
                  <Box sx={{ marginRight: 12, marginBottom: 4 }}>
                    <Typography
                      variant={"subtitle2"}
                      color={"dimgrey"}
                      sx={{ marginBottom: 1 }}
                    >
                      COLOR
                    </Typography>
                    <ListItemIcon>
                      <Circle color={colorName} fontSize={"large"} />
                    </ListItemIcon>
                  </Box>
                  <Box>
                    {/*sizes*/}
                    <Typography
                      variant={"subtitle2"}
                      color={"dimgrey"}
                      sx={{ marginBottom: 1 }}
                    >
                      SIZES
                    </Typography>
                    <ToggleButtonGroup
                      value={size}
                      exclusive
                      onChange={handleSizeChange}
                      size={"medium"}
                    >
                      <ToggleButton value="7">
                        <Typography variant={"h6"}>7</Typography>
                      </ToggleButton>
                      <ToggleButton value="8">
                        <Typography variant={"h6"}>8</Typography>
                      </ToggleButton>
                      <ToggleButton value="9">
                        <Typography variant={"h6"}>9</Typography>
                      </ToggleButton>
                      <ToggleButton value="10">
                        <Typography variant={"h6"}>10</Typography>
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </Box>
                </Box>

                {/*price and quantity*/}
                <Box
                  sx={{ display: "flex", marginTop: 6, alignItems: "center" }}
                >
                  {/*price*/}
                  <Box sx={{ marginRight: 12 }}>
                    <Typography
                      variant={"subtitle2"}
                      color={"dimgrey"}
                      sx={{ marginBottom: 2 }}
                    >
                      PRICE
                    </Typography>
                    <Typography variant={"h6"}>{`₹ ${price}`}</Typography>
                  </Box>
                  {/*quantity*/}
                  <FormControl variant={"outlined"} sx={{ width: 100 }}>
                    <InputLabel id="demo-simple-select-label">QTY</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={quantity}
                      label="QTY"
                      onChange={handleQuantityChange}
                      sx={{ fontSize: 20 }}
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                {/*<Button*/}
                {/*  variant={"outlined"}*/}
                {/*  size={"large"}*/}
                {/*  startIcon={<FavoriteBorder />}*/}
                {/*  sx={{ flex: 1, height: 56 }}*/}
                {/*>*/}
                {/*  ADD TO FAVOURITES*/}
                {/*</Button>*/}
                {!inCart ? (
                  <Button
                    variant={"contained"}
                    size={"large"}
                    startIcon={<ShoppingCartOutlined />}
                    sx={{ width: "100%", height: 56 }}
                    onClick={addToCart}
                  >
                    ADD TO CART
                  </Button>
                ) : (
                  <Button
                    variant={"contained"}
                    color={"error"}
                    size={"large"}
                    startIcon={<ShoppingCartOutlined />}
                    sx={{ width: "100%", height: 56 }}
                    onClick={() => removeFromCart(items, setItems, id)}
                  >
                    REMOVE FROM CART
                  </Button>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default DetailsmodalComponent;
