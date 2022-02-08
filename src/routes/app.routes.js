import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/home/home.page";
import CheckoutPage from "../pages/checkout/checkout.page";

import CollectionRoutes from "./collection.routes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="collection/*" element={<CollectionRoutes />} />
      <Route path="checkout" element={<CheckoutPage />} />
    </Routes>
  );
};

export default AppRoutes;
