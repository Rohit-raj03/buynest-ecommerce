import { React, useContext } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router";
import ProductCard from "../components/UI/ProductCard";
import { AppContext } from "../context/AppContext";
import products from "../../public/products";

const Details = () => {
  const { id } = useParams();
  const { addItems } = useContext(AppContext);

  const product = products.find((item) => {
    return item.id === Number(id);
  });

  const relatedProducts = products
    .filter((val) => {
      return val.category === product.category && val.id !== id;
    })
    .slice(0, 4);
  console.log(relatedProducts);

  return (
    <div className="mx-auto  max-w-7xl px-6 pt-25 py-10 flex flex-col gap-15">
      <div className="grid gap-10 md:grid-cols-2">
        {/* Image */}
        <div className="rounded-2xl bg-zinc-900 p-8">
          <img
            src={product.image}
            alt={product.title}
            className="mx-auto h-112.5 object-contain"
          />
        </div>

        {/* Details */}
        <div className="space-y-5">
          <p className="text-orange-500 font-semibold uppercase">
            {product.category}
          </p>

          <h1 className="text-4xl font-bold">{product.title}</h1>

          <p className="text-gray-400">
            Brand: <span className="text-white">{product.brand}</span>
          </p>

          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-400" />
            <span>{product.rating}</span>
          </div>

          <div className="flex items-center gap-3">
            <h2 className="text-4xl font-bold text-orange-500">
              ${product.price}
            </h2>

            <span className="text-xl text-gray-500 line-through">
              ${product.oldPrice}
            </span>

            <span className="rounded bg-green-600 px-3 py-1 text-sm">
              {product.discountPercentage}% OFF
            </span>
          </div>

          <p className="text-gray-300">{product.description}</p>

          <p>
            Stock:
            <span className="ml-2 text-green-500">
              {product.stock} Available
            </span>
          </p>

          <div className="flex gap-2">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-800 px-3 py-1 text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          <button
            onClick={() => {
              addItems(product.id);
            }}
            className="mt-5 rounded-xl bg-orange-500 px-8 py-4 font-semibold transition hover:bg-orange-600"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {relatedProducts.map((item) => {
          return <ProductCard product={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Details;
