import React, { createContext, useState } from "react";

export const CategoryContext = createContext(undefined);

export const CategoryContextProvider = ({ children }) => {
  const [collectionName, setCollectionName] = useState("mens");
  const [collectionCategory, setCollectionCategory] = useState("running");

  return (
    <CategoryContext.Provider
      value={{
        collectionName,
        collectionCategory,
        setCollectionName,
        setCollectionCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
