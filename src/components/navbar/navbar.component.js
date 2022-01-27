import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  IconButton,
  Badge,
  Tabs,
  Tab,
} from "@mui/material";
import {
  Search as SearchIcon,
  ShoppingCart,
  AccountCircle,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { styled, alpha } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.15),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
    },
  },
}));

const PAGES = ["HOME", "MEN", "WOMEN", "KIDS", "FAVOURITES"];

const Navbar = () => {
  const [tabValue, setTabValue] = useState(0);
  return (
    <AppBar position={"static"} elevation={3} color={"inherit"}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            userSelect: "none",
          }}
        >
          <ShoppingBagOutlined
            sx={{
              marginRight: 2,
            }}
          />
          <Typography
            variant={"h6"}
            noWrap
            component={"div"}
            sx={{
              marginRight: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Work Sans",
              // fontWeight: "medium",
            }}
          >
            HYPER SHOES
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            marginRight: 2,
            height: 1,
            marginLeft: "auto",
          }}
        >
          <Tabs
            value={tabValue}
            onChange={(event, value) => setTabValue(value)}
            textColor={"inherit"}
            indicatorColor={"primary"}
          >
            {PAGES.map((page) => (
              <Tab label={page} key={`page-${page}`} />
            ))}
          </Tabs>
        </Box>
        <Box
          sx={{
            marginLeft: "auto",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginLeft: 2,
            }}
          >
            <IconButton color={"inherit"} size={"large"}>
              <Badge badgeContent={17} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
            <IconButton color={"inherit"} size={"large"}>
              <AccountCircle />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
