import { React, useContext } from "react";
import { FiShoppingCart, FiStar } from "react-icons/fi";
import { TiTick } from "react-icons/ti";

import { AppContext } from "../../context/AppContext";

const ProductCard = ({ product, addItems, isInCart }) => {
  const { productsData, setProductsData, cartItems, setCartItems } =
    useContext(AppContext);

  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20">
      {/* Image */}
      <div className="relative overflow-hidden bg-white p-6">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="mx-auto h-52 object-contain transition duration-500 group-hover:scale-110"
        />

        {/* Discount Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
          -{Math.round(product.discountPercentage)}%
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-medium capitalize text-orange-500">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="mt-4 line-clamp-2 text-xl font-semibold text-white">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm text-gray-400">
          {product.description}
        </p>

        {/* Rating & Stock */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <FiStar className="fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-white">{product.rating}</span>
          </div>

          <span
            className={`text-sm font-medium ${
              product.stock > 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            {product.stock > 0 ? `${product.stock} in stock` : "Out of Stock"}
          </span>
        </div>

        {/* Price */}
        <div className="mt-5 flex items-center justify-between">
          <div>
            <h3 className="text-3xl font-bold text-orange-500">
              ${product.price}
            </h3>
          </div>
          <button
            onClick={() => addItems(product.id)}
            disabled={isInCart}
            className={`flex items-center gap-2 rounded-xl border px-4 py-3 font-medium transition ${
              isInCart
                ? "btn-disabled border-green-500/20 bg-green-500/15 text-green-400"
                : "border-orange-500 bg-orange-500 text-white hover:bg-orange-600"
            }`}
          >
            {isInCart ? (
              <>{<TiTick />} Added </>
            ) : (
              <>{<FiShoppingCart />} Add</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;

// const [isAdded, setIsAdded] = useState(false)
//   return (
//     <button>{isAdded?'added':'add'}</button>
//   )
//   <button>
// {isAdded?:<card/>}</button>
// {
//   isInCart ? (
//     <button className="flex items-center gap-2 rounded-xl bg-green-500/15 px-4 py-3 font-sm text-green-400 border-green-500/20 transition cursor">
//       <TiTick /> Added
//     </button>
//   ) : (
//     <button
//       onClick={() => addItems(product.id)}
//       className="flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-3 font-medium text-white transition hover:bg-orange-600"
//     >
//       <FiShoppingCart />
//       Add
//     </button>
//   );
// }
