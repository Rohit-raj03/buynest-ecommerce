import { React, useContext, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { AppContext } from "../../context/AppContext";

const Cart = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeItem } =
    useContext(AppContext);

  const totalAmount = item.price * item.quantity;

  return (
    <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-xl">
      {/* Product Image */}
      <div className="flex my-auto h-22 w-20 items-center justify-center overflow-hidden rounded-xl bg-white">
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
            $ {totalAmount.toFixed(2)}{" "}
          </p>
          
        </div>

        <div className="flex items-center justify-between">
          {/* Quantity */}
          <div className="flex items-center gap-3 rounded-lg border border-white/10 px-3 py-1">
            <button
              onClick={() => {
                item.quantity > 1
                  ? decreaseQuantity(item.id)
                  : removeItem(item.id);
              }}
              className="text-lg font-bold text-orange-500 transition duration-200  hover:text-orange-400 hover:scale-105"
            >
              -
            </button>

            <span className="text-white">{item.quantity}</span>

            <button
              onClick={() => increaseQuantity(item.id)}
              className="text-lg font-bold text-orange-500 transition duration-200  hover:text-orange-400 hover:scale-105"
            >
              +
            </button>
          </div>

          {/* Delete */}
          <button
            onClick={() => removeItem(item.id)}
            className="rounded-lg p-2 text-red-400 transition hover:bg-red-500/10"
          >
            <FiTrash2 className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
