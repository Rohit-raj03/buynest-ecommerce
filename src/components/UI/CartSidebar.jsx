import React from "react";
import { FiX, FiTrash2 } from "react-icons/fi";

const CartSidebar = ({ isOpen, setIsOpen }) => {
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
        <div className="flex items-center justify-between border-b border-white/10 p-6">
          <h2 className="text-xl font-display font-bold text-orange-500">
            Shopping Cart
          </h2>

          <button
            onClick={() => setIsOpen(false)}
            className="rounded-xl border border-white/10 bg-white/5 p-2 hover:border-orange-500"
          >
            <FiX className="text-2xl text-white" />
          </button>
        </div>

        {/* Products */}
        <div className="h-[calc(100vh-250px)] space-y-4 overflow-y-auto p-6">
          {[1, 2, 3,4,5].map((item) => (
            <div
              key={item}
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              {/* Product Image */}
              <div className="h-20 w-20 rounded-xl bg-gray-800"></div>

              {/* Info */}
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-white">Premium Sneakers</h3>

                  <p className="mt-1 text-sm text-gray-400">₹2,499</p>
                </div>

                <div className="flex items-center justify-between">
                  {/* Qty */}
                  <div className="flex items-center gap-3 rounded-lg border border-white/10 px-3 py-1">
                    <button className="text-orange-500">-</button>

                    <span className="text-white">1</span>

                    <button className="text-orange-500">+</button>
                  </div>

                  {/* Delete */}
                  <button className="rounded-lg p-2 text-red-400 hover:bg-red-500/10">
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-black p-6">
          <div className="mb-5 flex items-center justify-between">
            <span className="text-lg text-gray-300">Total</span>

            <span className="text-2xl font-bold text-orange-500">₹4,998</span>
          </div>

          <button className="w-full rounded-xl bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600">
            Proceed to Checkout
          </button>
        </div>
      </aside>
    </>
  );
};

export default CartSidebar;
