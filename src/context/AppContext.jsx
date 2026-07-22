import { createContext, useState } from "react";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  return (
    <AppContext.Provider
      value={{
        productsData,
        setProductsData,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
