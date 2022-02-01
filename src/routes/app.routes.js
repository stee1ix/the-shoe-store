import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/home/home.page";

import CollectionRoutes from "./collection.routes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="collection/*" element={<CollectionRoutes />} />
    </Routes>
  );
};

export default AppRoutes;
