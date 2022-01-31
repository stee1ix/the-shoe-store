import React, { useContext, useEffect, useState } from "react";
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

import { useNavigate, useLocation } from "react-router-dom";

import { CategoryContext } from "../../services/category/category.context";

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

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { setCollectionName } = useContext(CategoryContext);

  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    switch (location.pathname) {
      case "/collection/mens":
        setTabValue(1);
        setCollectionName("mens");
        break;
      case "/collection/womens":
        setTabValue(2);
        setCollectionName("womens");
        break;
      case "/collection/kids":
        setTabValue(3);
        setCollectionName("kids");
        break;
      default:
        setTabValue(0);
    }
  }, [location.pathname]);

  return (
    <AppBar
      elevation={3}
      color={"inherit"}
    >
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            userSelect: "none",
          }}
        >
          {/*<ShoppingBagOutlined*/}
          {/*  sx={{*/}
          {/*    marginRight: 2,*/}
          {/*  }}*/}
          {/*/>*/}
          <Typography
            variant={"h6"}
            noWrap
            component={"div"}
            sx={{
              marginRight: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Work Sans",
            }}
          >
            THE SHOE STORE
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
            <Tab label={"HOME"} onClick={() => navigate("/")} />
            <Tab label={"MEN"} onClick={() => navigate("collection/mens")} />
            <Tab
              label={"WOMEN"}
              onClick={() => navigate("collection/womens")}
            />
            <Tab label={"KIDS"} onClick={() => navigate("collection/kids")} />
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
