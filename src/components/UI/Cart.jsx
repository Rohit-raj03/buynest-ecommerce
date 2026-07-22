import React from "react";
import { FiTrash2 } from "react-icons/fi";

const Cart = ({ item }) => {
  return (
    <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
      {/* Product Image */}
      <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl bg-white">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="line-clamp-1 font-semibold text-white">
            {item.title}
          </h3>

          <p className="mt-1 text-lg font-bold text-orange-500">
            ${item.price}
          </p>
        </div>

        <div className="flex items-center justify-between">
          {/* Quantity */}
          <div className="flex items-center gap-3 rounded-lg border border-white/10 px-3 py-1">
            <button className="text-lg font-bold text-orange-500 hover:text-orange-400">
              -
            </button>

            <span className="text-white">1</span>

            <button className="text-lg font-bold text-orange-500 hover:text-orange-400">
              +
            </button>
          </div>

          {/* Delete */}
          <button className="rounded-lg p-2 text-red-400 transition hover:bg-red-500/10">
            <FiTrash2 className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
