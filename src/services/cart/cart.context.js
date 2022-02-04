import React, { createContext, useEffect, useState } from "react";
import { calculateTotal } from "./cart.services";

export const CartContext = createContext(undefined);

export const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const sum = calculateTotal(items);
    setTotal(sum);
  }, [items]);

  return (
    <CartContext.Provider value={{ items, setItems, total }}>
      {children}
    </CartContext.Provider>
  );
};
