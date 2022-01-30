import React, { useState } from "react";

import {
  Box,
  Button,
  Divider,
  Grid,
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

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <Box sx={{ display: "flex" }}>
      <FilterbarComponent />
      <Divider
        orientation={"vertical"}
        sx={{ position: "fixed", left: 400, zIndex: 2 }}
      />
      {/*left area*/}
      <Box
        sx={{
          position: "fixed",
          left: 401,
          right: 0,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        {/*bar*/}
        <Box
          sx={{
            position: "fixed",
            display: "flex",
            padding: "0 24px",
            alignItems: "center",
            height: 100,
            backgroundColor: "#ffffff",
            zIndex: 2,
            right: 0,
            left: 401,
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
        {/*divider*/}
        <Divider
          sx={{
            position: "fixed",
            top: 164,
            left: 400,
            right: 0,
            zIndex: 2,
          }}
        />
        {/*list area*/}
        <Box
          sx={{
            position: "relative",
            top: 100,
            paddingBottom: "164px",
            zIndex: 1,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid
            container
            spacing={6}
            sx={{
              padding: 6,
            }}
          >
            {array.map(() => {
              return (
                <Grid item xs={4}>
                  <ShoecardComponent />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default CollectionPage;
