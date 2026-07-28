import React, { useContext } from "react";
import { useState } from "react";
import ProductCard from "../components/UI/ProductCard";
import axios from "axios";
import { useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import products from "../../public/products";
const Shop = () => {
  const {
    productsData,
    setProductsData,
    cartItems,
    setCartItems,
    category,
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
  } = useContext(AppContext);

  let getProductData = async () => {
    try {
      let res = await axios.get("/");
      setProductsData(products);
      console.log(products.category);
    } catch (error) {
      console.log("API error", error);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);

  const addItems = (id) => {
    let item = productsData.find((val) => {
      return val.id === id;
    });
    setCartItems((prev) => {
      const updatedItme = [...prev, { ...item, quantity: 1 }];
      localStorage.setItem("cartItems", JSON.stringify(updatedItme));
      return updatedItme;
    });

    toast.success("item add to cart");
  };

  const filteredProducts = productsData.filter((item) => {
    // Category Filter
    const matchCategory = selectedCategory === "all" || item.category === selectedCategory;

    // Search Filter
    const matchSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase());

    return matchCategory && matchSearch;
  });
  return (
    <section className="min-h-screen pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="font-display text-5xl font-bold text-white">
              All <span className="text-orange-500">Products</span>
            </h1>

            <p className="mt-3 text-gray-400">50 products found</p>
          </div>

          {/* Search */}
          <div className="w-full md:w-96">
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white placeholder:text-gray-500 outline-none backdrop-blur-xl transition focus:border-orange-500"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center">
          {/* Category */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none backdrop-blur-xl capitalize"
          >
            <option value="all" className="bg-black">
              All Categories
            </option>

            {category.map((val) => (
              <option key={val} value={val} className="bg-black capitalize">
                {val}
              </option>
            ))}
          </select>

          {/* Featured
          <select className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none backdrop-blur-xl">
            <option className="bg-black">Featured</option>
            <option className="bg-black">Newest</option>
            <option className="bg-black">Price: Low to High</option>
            <option className="bg-black">Price: High to Low</option>
            <option className="bg-black">Top Rated</option>
          </select> */}
        </div>

        {/* Products Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((item) => {
            const isInCart = cartItems.find((val) => item.id === val.id);
            return (
              <ProductCard
                key={item.id}
                product={item}
                addItems={addItems}
                isInCart={isInCart}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Shop;
