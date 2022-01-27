import React from "react";

import { Typography } from "@mui/material";
import ShoecardComponent from "./components/shoecard/shoecard.component";

const CollectionPage = () => {
  return (
    <div>
      <Typography variant={"h2"}>Collection</Typography>
      <ShoecardComponent />
    </div>
  );
};

export default CollectionPage;
