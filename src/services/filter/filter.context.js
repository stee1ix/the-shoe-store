import React, { createContext, useState } from "react";

export const FilterContext = createContext(undefined);

export const FilterContextProvider = ({ children }) => {
  const [collectionName, setCollectionName] = useState("mens");
  const [collectionCategory, setCollectionCategory] = useState("running");

  return (
    <FilterContext.Provider
      value={{
        collectionName,
        collectionCategory,
        setCollectionName,
        setCollectionCategory,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
