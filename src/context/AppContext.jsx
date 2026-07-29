import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import products from "../../public/products";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [registerData, setRegisterData] = useState(
    JSON.parse(localStorage.getItem("registerData")) || [],
  );
  const [loggedInUser, setLoggedInUser] = useState(
    localStorage.getItem("loggedInUser"),
  );

  const [productsData, setProductsData] = useState(products);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || [],
  );

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const addItems = (id) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === id);
      let updatedItems;

      if (existingItem) {
        updatedItems = prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      } else {
        const product = productsData.find((item) => item.id === id);
        updatedItems = [...prev, { ...product, quantity: 1 }];
      }
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
    setIsCartOpen(true);
    toast.success("Item added to cart");
  };
  const [category, setCategory] = useState([
    "smartphones",
    "laptops",
    "audio",
    "wearables",
    "tablets",
    "accessories",
    "cameras",
    "drones",
    "televisions",
    "gaming",
    "monitors",
    "furniture",
    "components",
    "mobility",
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const numberOfCartItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );
  const totalAmountOfCartItems =
    cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2) || 0;

  const increaseQuantity = (id) => {
    setCartItems((prev) => {
      return prev.map((val) => {
        return val.id === id
          ? { ...val, quantity: val.quantity + 1, price: val.price }
          : val;
      });
    });
  };
  const decreaseQuantity = (id) => {
    setCartItems((prev) => {
      return prev.map((val) => {
        return val.id === id ? { ...val, quantity: val.quantity - 1 } : val;
      });
    });
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const removeItem = (id) => {
    const items = cartItems.filter((val) => val.id !== id);
    setCartItems(items);
    localStorage.setItem("cartItems", JSON.stringify(items));
    toast.error("item remove");
  };

  //Flash Sale Timer
  const FlashSaleTimer = () => {
    const getTimeLeft = () => {
      const now = new Date();
      const tomorrow = new Date();
      tomorrow.setHours(24, 0, 0, 0);
      const diff = tomorrow - now;
      return {
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };

    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    useEffect(() => {
      const interval = setInterval(() => {
        setTimeLeft(getTimeLeft());
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    return timeLeft;
  };

  return (
    <AppContext.Provider
      value={{
        registerData,
        setRegisterData,
        loggedInUser,
        setLoggedInUser,
        productsData,
        setProductsData,
        numberOfCartItems,
        totalAmountOfCartItems,
        cartItems,
        setCartItems,
        isCartOpen,
        setIsCartOpen,
        isOpen,
        setIsOpen,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        FlashSaleTimer,
        category,
        selectedCategory,
        setSelectedCategory,
        searchTerm,
        setSearchTerm,
        addItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
