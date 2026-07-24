import { createContext, useState } from "react";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [registerData, setRegisterData] = useState(
    JSON.parse(localStorage.getItem("registerData")) || [],
  );
  const [loggedInUser, setLoggedInUser] = useState(
    localStorage.getItem("loggedInUser"),
  );
  const [productsData, setProductsData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        registerData,
        setRegisterData,
        loggedInUser,
        setLoggedInUser,
        productsData,
        setProductsData,
        cartItems,
        setCartItems,
        isCartOpen,
        setIsCartOpen,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
