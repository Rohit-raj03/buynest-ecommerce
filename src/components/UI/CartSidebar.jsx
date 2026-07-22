import React, { useContext, useState } from "react";
import { FiX, FiTrash2, FiShoppingBag } from "react-icons/fi";
import Cart from "./Cart";
import { AppContext } from "../../context/AppContext";

const CartSidebar = ({ isOpen, setIsOpen }) => {
  const { cartItems, setCartItems } = useContext(AppContext);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-45 bg-black/60 backdrop-blur-sm"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-50 h-screen w-full max-w-md bg-black backdrop-blur-2xl border-l border-white/10 shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-orange-500/50 p-6">
          <div className="flex items-center gap-3">
            <FiShoppingBag className="text-2xl text-orange-500" />
            <h1 className="text-white font-roboto text-xl">Crat</h1>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="rounded-xl border border-white/10 bg-white/5 p-2 hover:border-orange-500"
          >
            <FiX className="text-2xl text-white" />
          </button>
        </div>

        {/* Products */}
        <div className="h-[calc(100vh-250px)] space-y-4 overflow-y-auto p-6">
          {cartItems.map((elem) => {
            return <Cart key={elem.id} item={elem} />;
          })}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-black p-6">
          <div className="mb-5 flex items-center justify-between">
            <span className="text-lg text-gray-300">Total</span>

            <span className="text-2xl font-bold text-orange-500">₹4,998</span>
          </div>

          <button className="w-full rounded-xl bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600 mb-4">
            Proceed to Checkout
          </button>
          <h1
            onClick={() => setCartItems([])}
            className="text-red-500/70 text-center hover:text-red-500 cursor-pointer"
          >
            Clear all
          </h1>
        </div>
      </aside>
    </>
  );
};

export default CartSidebar;
