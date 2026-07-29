import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { FiShoppingCart } from "react-icons/fi";

const Card = ({ item }) => {
  const { addItems } = useContext(AppContext);

  return (
    <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-orange-500 hover:bg-white/10">
      {/* Left Image */}
      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-white">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
        />
      </div>

      {/* Middle Content */}
      <div className="flex flex-1 flex-col">
        <h3 className="line-clamp-1 text-lg font-semibold text-white">
          {item.title}
        </h3>

        <div className="mt-3 flex items-center gap-3">
          <span className="rounded-full bg-yellow-500/10 px-2 py-1 text-sm text-yellow-400">
            ⭐ {item.rating}
          </span>

          <span className="text-xl font-bold text-orange-500">
            ${item.price}
          </span>
        </div>
      </div>

      {/* Right Add Cart */}
      <button
        onClick={() => {
          addItems(item.id);
        }}
        className="rounded-xl bg-orange-500 p-3 transition hover:scale-110 hover:bg-orange-600"
      >
        <FiShoppingCart className="text-xl text-white" />
      </button>
    </div>
  );
};

export default Card;
