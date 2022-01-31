import React, { createContext, useContext, useEffect, useState } from "react";

import { collectionRequestAndTransform } from "./collection.services";

import { CategoryContext } from "../category/category.context";

export const CollectionContext = createContext(undefined);

export const CollectionContextProvider = ({ children }) => {
  const [collection, setCollection] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { collectionName, collectionCategory } = useContext(CategoryContext);

  const retrieveCollection = (name, category) => {
    setIsLoading(true);
    setCollection([]);

    collectionRequestAndTransform(name, category)
      .then((result) => {
        setIsLoading(false);
        setCollection(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    retrieveCollection(collectionName, collectionCategory);
  }, [collectionName, collectionCategory]);

  return (
    <CollectionContext.Provider value={{ collection, isLoading, error }}>
      {children}
    </CollectionContext.Provider>
  );
};
