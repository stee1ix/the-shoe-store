import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/home/home.page";
import CartPage from "../pages/cart/cart.page";

import CollectionRoutes from "./collection.routes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="collection/*" element={<CollectionRoutes />} />
      <Route path="cart" element={<CartPage />} />
    </Routes>
  );
};

export default AppRoutes;
