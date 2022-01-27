import React from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Typography variant={"h1"}>Home</Typography>
      <Link to={"collection"}>
        <Button>Collection</Button>
      </Link>
    </div>
  );
};

export default HomePage;
