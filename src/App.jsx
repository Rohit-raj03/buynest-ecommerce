import React, { useState } from "react";
import { BrowserRouter } from "react-router";
import Auth from "./components/Auth";
import Navbar from "./components/UI/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/UI/Footer";
import CartSidebar from "./components/UI/CartSidebar";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import AppRoute from "./route/AppRoute";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col gap-4 ">
      <Navbar setIsCartOpen={setIsCartOpen} />
      <CartSidebar isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
      <AppRoute />
      <Footer />
    </div>
  );
};

export default App;
