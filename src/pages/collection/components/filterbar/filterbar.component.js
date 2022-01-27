import React, { useState } from "react";

import {
  Box,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Circle } from "@mui/icons-material";

const FilterbarComponent = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        width: 480,
        paddingTop: 2,
      }}
    >
      <Typography variant={"h5"} sx={{ paddingLeft: 2 }} gutterBottom>
        CATEGORIES
      </Typography>
      <List>
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemText>All</ListItemText>
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemText>Football</ListItemText>
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemText>Formal</ListItemText>
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemText>Running</ListItemText>
        </ListItemButton>
      </List>
      <Divider />
      <Typography
        variant={"h5"}
        sx={{ paddingLeft: 2, paddingTop: 2 }}
        gutterBottom
      >
        COLOR
      </Typography>
      <Stack direction={"row"} sx={{ paddingLeft: 1 }} spacing={1}>
        <IconButton color={"error"}>
          <Circle />
        </IconButton>
        <IconButton color={"default"}>
          <Circle />
        </IconButton>
        <IconButton color={"secondary"}>
          <Circle />
        </IconButton>
        <IconButton color={"info"}>
          <Circle />
        </IconButton>
        <IconButton color={"warning"}>
          <Circle />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default FilterbarComponent;
