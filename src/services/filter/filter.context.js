import React, { createContext, useContext, useEffect, useState } from "react";

import { filterCollection } from "./filter.services";

import { CollectionContext } from "../collection/collection.context";

export const FilterContext = createContext(undefined);

export const FilterContextProvider = ({ children }) => {
  const [filterColorIndex, setFilterColorIndex] = useState(0);
  const [filterPriceRange, setFilterPriceRange] = useState([1000, 10000]);

  const { collection } = useContext(CollectionContext);

  const [filteredCollection, setFilteredCollection] = useState(collection);

  const resetFilters = () => {
    setFilterColorIndex(0);
    setFilterPriceRange([1000, 10000]);
  };

  useEffect(() => {
    resetFilters();
  }, [collection]);

  const transformFilteredCollection = (colorIndex, price, collection) => {
    const newCollection = filterCollection(colorIndex, price, collection);
    setFilteredCollection(newCollection);
  };

  useEffect(() => {
    transformFilteredCollection(filterColorIndex, filterPriceRange, collection);
  }, [filterColorIndex, filterPriceRange]);

  return (
    <FilterContext.Provider
      value={{
        filteredCollection,
        filterColorIndex,
        setFilterColorIndex,
        filterPriceRange,
        setFilterPriceRange,
        resetFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
