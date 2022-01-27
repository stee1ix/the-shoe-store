import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/home/home.page";
import CollectionPage from "../pages/collection/collection.page";

const RoutesOperator = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="collection">
        <Route path={":category"} element={<CollectionPage />} />
      </Route>
    </Routes>
  );
};

export default RoutesOperator;
