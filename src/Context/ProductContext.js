import React, { createContext, useState } from "react";
import { dataObj } from "../API/data";
export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const [products] = useState(dataObj);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
