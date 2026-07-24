import React from "react";
import Navbar from "../components/UI/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/UI/Footer";
import CartSidebar from "../components/UI/CartSidebar";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <CartSidebar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
