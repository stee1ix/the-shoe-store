import React, { useState } from "react";

import {
  Box,
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import ShoecardComponent from "./components/shoecard/shoecard.component";
import {
  ArrowDownward,
  ArrowUpward,
  KeyboardArrowDown,
  StarOutline,
} from "@mui/icons-material";

const CollectionPage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: "0 24px",
        }}
      >
        <Typography variant={"h4"}>MENS SHOES</Typography>
        <Button
          onClick={handleClick}
          color={"inherit"}
          endIcon={<KeyboardArrowDown />}
          sx={{ marginLeft: "auto" }}
        >
          SORT BY
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <StarOutline />
            </ListItemIcon>
            <ListItemText>Featured</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ArrowUpward />
            </ListItemIcon>
            <ListItemText>Price: High to Low</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ArrowDownward />
            </ListItemIcon>
            <ListItemText>Price: Low to High</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default CollectionPage;
