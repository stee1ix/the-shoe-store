import React, { createContext, useContext, useEffect, useState } from "react";

import { filterCollection } from "./filter.services";

import { CollectionContext } from "../collection/collection.context";

export const FilterContext = createContext(undefined);

export const FilterContextProvider = ({ children }) => {
  const [filterColorIndex, setFilterColorIndex] = useState(0);
  const [filterPriceRange, setFilterPriceRange] = useState([1000, 10000]);
  const [filterSort, setFilterSort] = useState(0);

  const { collection } = useContext(CollectionContext);

  const [filteredCollection, setFilteredCollection] = useState(collection);

  const resetFilters = () => {
    setFilterColorIndex(0);
    setFilterPriceRange([1000, 10000]);
    setFilterSort(0);
  };

  // useEffect(() => {
  //   return () => setFilteredCollection(collection);
  // }, []);

  useEffect(() => {
    resetFilters();
  }, [collection]);

  const transformFilteredCollection = (
    colorIndex,
    price,
    sortType,
    collection
  ) => {
    const newCollection = filterCollection(
      colorIndex,
      price,
      sortType,
      collection
    );
    setFilteredCollection(newCollection);
  };

  useEffect(() => {
    transformFilteredCollection(
      filterColorIndex,
      filterPriceRange,
      filterSort,
      collection
    );
  }, [filterColorIndex, filterPriceRange, filterSort]);

  return (
    <FilterContext.Provider
      value={{
        filteredCollection,
        filterColorIndex,
        setFilterColorIndex,
        filterPriceRange,
        setFilterPriceRange,
        filterSort,
        setFilterSort,
        resetFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
