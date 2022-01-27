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
import {
  ArrowDownward,
  ArrowUpward,
  KeyboardArrowDown,
  StarOutline,
} from "@mui/icons-material";

import FilterbarComponent from "./components/filterbar/filterbar.component";

import { useParams } from "react-router-dom";

const CollectionPage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const params = useParams();

  const [selectedSortIndex, setSelectedSortIndex] = useState(0);

  const handleSortListItemClick = (event, index) => {
    setSelectedSortIndex(index);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <FilterbarComponent />
      <Divider orientation={"vertical"} flexItem />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            padding: "16px 24px",
            alignItems: "center",
          }}
        >
          <Typography variant={"h2"}>
            {params.category.toUpperCase()} SHOES
          </Typography>
          <Button
            onClick={handleClick}
            color={"inherit"}
            endIcon={<KeyboardArrowDown />}
            sx={{ marginLeft: "auto", height: 48, padding: "0 12px" }}
          >
            SORT BY
          </Button>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem
              selected={selectedSortIndex === 0}
              onClick={(event) => {
                handleSortListItemClick(event, 0);
                handleClose();
              }}
            >
              <ListItemIcon>
                <StarOutline />
              </ListItemIcon>
              <ListItemText>Featured</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem
              selected={selectedSortIndex === 1}
              onClick={(event) => {
                handleSortListItemClick(event, 1);
                handleClose();
              }}
            >
              <ListItemIcon>
                <ArrowUpward />
              </ListItemIcon>
              <ListItemText>Price: High to Low</ListItemText>
            </MenuItem>
            <MenuItem
              selected={selectedSortIndex === 2}
              onClick={(event) => {
                handleSortListItemClick(event, 2);
                handleClose();
              }}
            >
              <ListItemIcon>
                <ArrowDownward />
              </ListItemIcon>
              <ListItemText>Price: Low to High</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
        <Divider />
      </Box>
    </Box>
  );
};

export default CollectionPage;
