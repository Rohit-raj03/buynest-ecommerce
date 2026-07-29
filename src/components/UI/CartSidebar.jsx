import React, { useContext, useState } from "react";
import { FiX, FiTrash2, FiShoppingBag, FiShoppingCart } from "react-icons/fi";
import Cart from "./Cart";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const CartSidebar = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    setCartItems,
    isCartOpen,
    setIsCartOpen,
    numberOfCartItems,
    totalAmountOfCartItems,
  } = useContext(AppContext);
  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          onClick={() => setIsCartOpen(false)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-51 h-screen w-full max-w-md bg-black  border-l border-white/10 shadow-2xl transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-orange-500/50 p-6">
          <div className="flex items-center gap-3">
            <FiShoppingBag className="text-2xl text-orange-500" />
            <h1 className="text-white font-roboto text-xl">Crat</h1>
            <div className="rounded-full border border-orange-500/30 bg-orange-500/10 py-0.5 px-2.5  text-orange-400 text-xs font-medium">
              <span>{numberOfCartItems}</span> itmes
            </div>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="rounded-xl border border-white/10 bg-white/5 p-2 hover:border-orange-500"
          >
            <FiX className="text-2xl text-white" />
          </button>
        </div>
        {/* Products */}
        {numberOfCartItems ? (
          <>
            <div className="h-[calc(100vh-250px)] space-y-4 overflow-y-auto p-6">
              {cartItems.map((elem) => {
                return <Cart key={elem.id} item={elem} />;
              })}
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-black p-6">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-lg text-gray-300">Total</span>

                <span className="text-2xl font-bold text-orange-500">
                  ${totalAmountOfCartItems}
                </span>
              </div>

              <button
                onClick={() => {
                  localStorage.removeItem("cartItems");
                  setCartItems([]);
                  toast.success("Order placed successfully 🎉");
                }}
                className="w-full rounded-xl bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600 mb-4"
              >
                Proceed to Checkout
              </button>
              <h1
                onClick={() => {
                  localStorage.removeItem("cartItems");
                  setCartItems([]);
                }}
                className="text-red-500/70 text-center hover:text-red-500 cursor-pointer"
              >
                Clear all
              </h1>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center px-6 py-20 text-center">
            <div className="rounded-full bg-orange-500/10 p-6">
              <FiShoppingCart className="text-6xl text-orange-500" />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-white">
              Your Cart is Empty
            </h2>

            <p className="mt-3 max-w-sm text-gray-400">
              Looks like you haven't added anything yet. Explore our products
              and start shopping.
            </p>

            <button
              onClick={() => {
                return (navigate("/app/shop"), setIsCartOpen(false));
              }}
              className="mt-8 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Add Products
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default CartSidebar;
