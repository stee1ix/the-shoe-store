import React from "react";
import { Route, Routes } from "react-router-dom";

import { CollectionContextProvider } from "../services/collection/collection.context";
import { FilterContextProvider } from "../services/filter/filter.context";

import CollectionPage from "../pages/collection/collection.page";

const CollectionRoutes = () => {
  return (
    <CollectionContextProvider>
      <FilterContextProvider>
        <Routes>
          <Route>
            <Route index path={":category"} element={<CollectionPage />} />
          </Route>
        </Routes>
      </FilterContextProvider>
    </CollectionContextProvider>
  );
};

export default CollectionRoutes;
