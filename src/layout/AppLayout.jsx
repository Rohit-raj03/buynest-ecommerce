import React, { useContext } from "react";
import Navbar from "../components/UI/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/UI/Footer";
import CartSidebar from "../components/UI/CartSidebar";
import { AppContext } from "../context/AppContext";
import ScrollToTop from "../components/UI/ScrollTotop";

const AppLayout = () => {
  const { cartItems } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <ScrollToTop />
      <CartSidebar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
