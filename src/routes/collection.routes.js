import React from "react";
import { Route, Routes } from "react-router-dom";

import { CollectionContextProvider } from "../services/collection/collection.context";
import { FilterContextProvider } from "../services/filter/filter.context";

import CollectionPage from "../pages/collection/collection.page";
import FilterbarComponent from "../pages/collection/components/filterbar/filterbar.component";

const CollectionRoutes = () => {
  return (
    <CollectionContextProvider>
      <FilterContextProvider>
        <Routes>
          <Route>
            <Route index path={":category"} element={<CollectionPage />} />
            <Route
              path={":category/:shoeid"}
              element={<FilterbarComponent />}
            />
          </Route>
        </Routes>
      </FilterContextProvider>
    </CollectionContextProvider>
  );
};

export default CollectionRoutes;
