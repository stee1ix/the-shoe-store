import React, { useContext, useState } from "react";

import {
  Box,
  Button,
  CircularProgress,
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

import { useParams } from "react-router-dom";

import { CollectionContext } from "../../services/collection/collection.context";
import { FilterContext } from "../../services/filter/filter.context";

import FilterbarComponent from "./components/filterbar/filterbar.component";
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

  const { isLoading } = useContext(CollectionContext);

  const {
    filteredCollection,
    resetFilters,
    filterColorIndex,
    filterPriceRange,
  } = useContext(FilterContext);

  console.log(filteredCollection);

  const arrayEquals = (a, b) => {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index])
    );
  };

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
        {/*top bar*/}
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
          <Button
            variant={"outlined"}
            color={"success"}
            sx={{ marginLeft: "auto", marginRight: 2 }}
            onClick={resetFilters}
            disabled={
              filterColorIndex === 0 &&
              arrayEquals(filterPriceRange, [1000, 10000])
            }
          >
            CLEAR FILTERS
          </Button>
          <Button
            onClick={handleClick}
            color={"inherit"}
            variant={"outlined"}
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
            marginBottom: "164px",
            zIndex: 1,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {!isLoading ? (
            <Grid
              container
              spacing={6}
              sx={{
                padding: 6,
              }}
            >
              {filteredCollection.map((shoe, index) => {
                const { name, imageurl, price, rating } = shoe;
                return (
                  <Grid item xs={4} key={`${index}${shoe.name}`}>
                    <ShoecardComponent
                      name={name}
                      imageurl={imageurl}
                      price={price}
                      rating={rating}
                    />
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <Box
              sx={{
                height: "60vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress size={80} />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default CollectionPage;
