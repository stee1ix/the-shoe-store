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
import ShoecardComponent from "./components/shoecard/shoecard.component";

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
      <Divider
        orientation={"vertical"}
        sx={{ position: "fixed", left: 400, zIndex: 2 }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            position: "fixed",
            display: "flex",
            padding: "16px 24px",
            alignItems: "center",
            height: 100,
            left: 401,
            right: 0,
            backgroundColor: "#ffffff",
            zIndex: 2,
          }}
        >
          <Typography variant={"h4"} fontWeight={"light"}>
            {params.category.toUpperCase()} SHOES
          </Typography>
          <Button color={"inherit"} sx={{ marginLeft: "auto", marginRight: 2 }}>
            CLEAR FILTERS
          </Button>
          <Button
            onClick={handleClick}
            color={"inherit"}
            endIcon={<KeyboardArrowDown />}
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
        <Divider
          sx={{
            position: "fixed",
            top: 164,
            left: 400,
            right: 0,
            zIndex: 2,
          }}
        />
        <Box
          sx={{
            position: "relative",
            left: 401,
            top: 101,
            zIndex: 1,
          }}
        >
          <ShoecardComponent />
          <ShoecardComponent />
          <ShoecardComponent />
        </Box>
      </Box>
    </Box>
  );
};

export default CollectionPage;
