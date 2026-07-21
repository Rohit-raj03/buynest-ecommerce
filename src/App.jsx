import React, { useState } from "react";
import { BrowserRouter } from "react-router";
import Auth from "./components/Auth";
import Navbar from "./components/UI/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/UI/Footer";
import CartSidebar from "./components/UI/CartSidebar";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  console.log(isCartOpen);
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col gap-4 ">
      <Navbar setIsCartOpen={setIsCartOpen} />
      <Home />
      <Footer />
      <CartSidebar isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
    </div>
  );
};

export default App;
