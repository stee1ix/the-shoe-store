import React from "react";
import { Routes, Route } from "react-router-dom";

import CollectionRoutes from "./collection.routes";

import HomePage from "../pages/home/home.page";
import CheckoutPage from "../pages/checkout/checkout.page";
import AuthenticationPage from "../pages/account/authentication.page";
import ProfilePage from "../pages/profile/profile.page";

import { RequireAuth } from "../services/authentication/authentication.services";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="authentication" element={<AuthenticationPage />} />
      <Route path="collection/*" element={<CollectionRoutes />} />
      <Route
        path="account"
        element={
          <RequireAuth>
            <ProfilePage />
          </RequireAuth>
        }
      />
      <Route
        path="checkout"
        element={
          <RequireAuth>
            <CheckoutPage />
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
