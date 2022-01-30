import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/home/home.page";
import CollectionPage from "../pages/collection/collection.page";
import { CollectionContextProvider } from "../services/collection/collection.context";

const RoutesOperator = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="collection">
        <Route
          path={":category"}
          element={
            <CollectionContextProvider>
              <CollectionPage />
            </CollectionContextProvider>
          }
        />
      </Route>
    </Routes>
  );
};

export default RoutesOperator;
