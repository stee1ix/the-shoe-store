import React, { createContext, useState } from "react";

export const CategoryContext = createContext(undefined);

export const CategoryContextProvider = ({ children }) => {
  const [collectionName, setCollectionName] = useState("mens");
  const [collectionCategory, setCollectionCategory] = useState("running");

  const resetCategory = (name, category = "running") => {
    setCollectionName(name);
    setCollectionCategory(category);
  };

  return (
    <CategoryContext.Provider
      value={{
        collectionName,
        collectionCategory,
        setCollectionName,
        setCollectionCategory,
        resetCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
