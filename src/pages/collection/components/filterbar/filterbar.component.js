import React, { useContext, useState } from "react";

import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Slider,
} from "@mui/material";
import { Circle } from "@mui/icons-material";

import { CategoryContext } from "../../../../services/category/category.context";
import { FilterContext } from "../../../../services/filter/filter.context";

const FilterbarComponent = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const handleCategoryListItemClick = (event, index) => {
    setSelectedCategoryIndex(index);
  };

  const handleColorListItemClick = (event, index) => {
    setFilterColorIndex(index);
  };

  const handleSliderChange = (event, newValue) => {
    setFilterPriceRange(newValue);
  };

  const { setCollectionCategory } = useContext(CategoryContext);
  const {
    filterPriceRange,
    filterColorIndex,
    setFilterColorIndex,
    setFilterPriceRange,
  } = useContext(FilterContext);

  return (
    <Box
      sx={{
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        width: 400,
        marginTop: 2,
        overflowY: "auto",
        height: "calc(100vh - 64px)",
        zIndex: 2,
        backgroundColor: "#ffffff",
      }}
    >
      <List
        subheader={<ListSubheader component={"div"}>CATEGORIES</ListSubheader>}
      >
        <ListItemButton
          selected={selectedCategoryIndex === 0}
          onClick={(event) => {
            handleCategoryListItemClick(event, 0);
            setCollectionCategory("running");
          }}
        >
          <ListItemText>Running</ListItemText>
        </ListItemButton>
        <ListItemButton
          selected={selectedCategoryIndex === 1}
          onClick={(event) => {
            handleCategoryListItemClick(event, 1);
            setCollectionCategory("sneakers");
          }}
        >
          <ListItemText>Sneakers</ListItemText>
        </ListItemButton>
        <ListItemButton
          selected={selectedCategoryIndex === 2}
          onClick={(event) => {
            handleCategoryListItemClick(event, 2);
            setCollectionCategory("football");
          }}
        >
          <ListItemText>Football</ListItemText>
        </ListItemButton>
      </List>

      <Divider />

      <List subheader={<ListSubheader component={"div"}>COLOR</ListSubheader>}>
        <ListItemButton
          selected={filterColorIndex === 0}
          onClick={(event) => {
            handleColorListItemClick(event, 0);
          }}
        >
          <ListItemText primary={"All"} />
        </ListItemButton>
        <ListItemButton
          selected={filterColorIndex === 1}
          onClick={(event) => {
            handleColorListItemClick(event, 1);
          }}
        >
          <ListItemIcon>
            <Circle color={"error"} />
          </ListItemIcon>
          <ListItemText primary={"Red"} />
        </ListItemButton>
        <ListItemButton
          selected={filterColorIndex === 2}
          onClick={(event) => {
            handleColorListItemClick(event, 2);
          }}
        >
          <ListItemIcon>
            <Circle color={"action"} />
          </ListItemIcon>
          <ListItemText primary={"Dark"} />
        </ListItemButton>
        <ListItemButton
          selected={filterColorIndex === 3}
          onClick={(event) => {
            handleColorListItemClick(event, 3);
          }}
        >
          <ListItemIcon>
            <Circle color={"primary"} />
          </ListItemIcon>
          <ListItemText primary={"Green"} />
        </ListItemButton>
        <ListItemButton
          selected={filterColorIndex === 4}
          onClick={(event) => {
            handleColorListItemClick(event, 4);
          }}
        >
          <ListItemIcon>
            <Circle color={"info"} />
          </ListItemIcon>
          <ListItemText primary={"Blue"} />
        </ListItemButton>
      </List>

      <Divider />

      <ListSubheader component={"div"}>PRICE RANGE</ListSubheader>
      <Box sx={{ margin: "36px 32px" }}>
        <Slider
          value={filterPriceRange}
          onChange={handleSliderChange}
          valueLabelDisplay={"auto"}
          marks={[
            {
              value: 1000,
              label: "1000",
            },
            {
              value: 10000,
              label: "10000",
            },
          ]}
          min={1000}
          max={10000}
          step={1000}
        />
      </Box>
    </Box>
  );
};

export default FilterbarComponent;
