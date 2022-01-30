import React, { useState } from "react";

import {
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { Circle } from "@mui/icons-material";

const FilterbarComponent = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const handleCategoryListItemClick = (event, index) => {
    setSelectedCategoryIndex(index);
  };

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const handleColorListItemClick = (event, index) => {
    setSelectedColorIndex(index);
  };

  const [sliderValue, setSliderValue] = React.useState([0, 100]);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        width: 400,
        // paddingTop: 2,
        marginTop: 2,
        overflowY: "auto",
        height: "calc(100vh - 64px)",
        // zIndex: 2,
        // backgroundColor: "#ffffff",
      }}
    >
      <List
        subheader={<ListSubheader component={"div"}>CATEGORIES</ListSubheader>}
      >
        {/*<ListItemButton*/}
        {/*  selected={selectedCategoryIndex === 0}*/}
        {/*  onClick={(event) => handleCategoryListItemClick(event, 0)}*/}
        {/*>*/}
        {/*  <ListItemText>All</ListItemText>*/}
        {/*</ListItemButton>*/}
        <ListItemButton
          selected={selectedCategoryIndex === 0}
          onClick={(event) => handleCategoryListItemClick(event, 0)}
        >
          <ListItemText>Football</ListItemText>
        </ListItemButton>
        <ListItemButton
          selected={selectedCategoryIndex === 1}
          onClick={(event) => handleCategoryListItemClick(event, 1)}
        >
          <ListItemText>Formal</ListItemText>
        </ListItemButton>
        <ListItemButton
          selected={selectedCategoryIndex === 2}
          onClick={(event) => handleCategoryListItemClick(event, 2)}
        >
          <ListItemText>Running</ListItemText>
        </ListItemButton>
      </List>

      <Divider />
      <List subheader={<ListSubheader component={"div"}>COLOR</ListSubheader>}>
        <ListItemButton
          selected={selectedColorIndex === 0}
          onClick={(event) => handleColorListItemClick(event, 0)}
        >
          <ListItemIcon>
            <Circle color={"error"} />
          </ListItemIcon>
          <ListItemText primary={"Red"} />
        </ListItemButton>
        <ListItemButton
          selected={selectedColorIndex === 1}
          onClick={(event) => handleColorListItemClick(event, 1)}
        >
          <ListItemIcon>
            <Circle color={"action"} />
          </ListItemIcon>
          <ListItemText primary={"Dark"} />
        </ListItemButton>
        <ListItemButton
          selected={selectedColorIndex === 2}
          onClick={(event) => handleColorListItemClick(event, 2)}
        >
          <ListItemIcon>
            <Circle color={"primary"} />
          </ListItemIcon>
          <ListItemText primary={"Green"} />
        </ListItemButton>
        <ListItemButton
          selected={selectedColorIndex === 3}
          onClick={(event) => handleColorListItemClick(event, 3)}
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
          value={sliderValue}
          onChange={handleSliderChange}
          valueLabelDisplay={"auto"}
          marks={[
            {
              value: 0,
              label: "100",
            },
            {
              value: 100,
              label: "10000",
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default FilterbarComponent;
