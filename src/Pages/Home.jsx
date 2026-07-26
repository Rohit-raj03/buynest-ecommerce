import React, { useContext } from "react";
import { FiArrowRight, FiShoppingBag } from "react-icons/fi";
import { useNavigate } from "react-router";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { numberOfCartItems, totalAmountOfCartItems, FlashSaleTimer } =
    useContext(AppContext);
  const { hours, minutes, seconds } = FlashSaleTimer();
  const navigate = useNavigate();

  return (
    <main className="bg-black text-white flex flex-col min-h-screen mx-auto max-w-7xl">
      {/* Hero */}
      <section className=" flex flex-col items-center justify-between gap-12 p-6 pt-28 lg:flex-row relative overflow-hidden z-10">
        {/* Left */}
        {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-orange-500/15 blur-[100px]" /> */}
        <div className="absolute top-0 left-1/4 -translate-x-1/2 h-100 w-100 rounded-full bg-orange-500/20 blur-[120px]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-size-[45px_45px]" />

        <div className="max-w-xl">
          <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
            🔥 New Collection 2026
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-tight md:text-7xl">
            Shop Smarter.
            <br />
            Live <span className="text-orange-500">Better.</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Discover premium fashion, electronics and lifestyle products with
            exclusive deals and lightning-fast delivery.
          </p>

          <div className="mt-8 flex gap-4">
            <button
              onClick={() => navigate("/app/shop")}
              className=" group flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold transition hover:bg-orange-600"
            >
              Shop Now
              <FiArrowRight className="group-hover:cursor-pointer" />
            </button>

            <button
              onClick={() => navigate("/app/about")}
              className="rounded-xl border border-white/10 bg-black px-6 py-3 transition hover:border-orange-500"
            >
              Explore
            </button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-7">
            <div className="border flex flex-col items-center p-4 rounded-2xl border-orange-500">
              <h2 className="text-3xl font-bold text-orange-600">20K+</h2>
              <p className="text-gray-400">Happy Customers</p>
            </div>

            <div className="border flex flex-col items-center p-4 rounded-2xl border-orange-500">
              <h2 className="text-3xl font-bold  text-orange-600">500+</h2>
              <p className="text-gray-400">Premium Products</p>
            </div>

            <div className="border flex flex-col items-center p-4 rounded-2xl border-orange-500">
              <h2 className="text-3xl font-bold  text-orange-600">4.9★</h2>
              <p className="text-gray-400">Customer Rating</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex items-center justify-center">
          {/* Glow */}
          <div className="absolute h-80 w-80 rounded-full bg-orange-500/20 blur-3xl"></div>

          {/* Glass Card */}
          <div className="relative rounded-3xl border border-white/10 bg-white/10 p-10 backdrop-blur-2xl">
            <FiShoppingBag className="mx-auto text-8xl text-orange-500" />

            <h2 className="mt-6 text-center text-3xl font-bold">BuyNest</h2>

            <p className="mt-3 text-center text-gray-400">
              Premium Shopping Experience
            </p>

            <button
              onClick={() => navigate("/app/shop")}
              className="mt-8 w-full rounded-xl bg-orange-500 py-3 font-semibold transition hover:bg-orange-600"
            >
              Start Shopping
            </button>
          </div>
        </div>
      </section>
      <hr className="h-0.5 my-4 border border-gray-50/15 " />
      <section className=" w-full mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {/* Cart Items */}
          <div className="w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 max-h-30 flex flex-col justify-center transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:bg-white/10">
            <h2 className="text-4xl font-bold text-orange-500">
              {numberOfCartItems}
            </h2>
            <h3 className="mt-3 text-sm font-semibold text-white">
              Cart Items
            </h3>

            <p className="mt-1  text-gray-400 text-xs">In your bag</p>
          </div>

          {/* Cart Value */}
          <div className="w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 max-h-30 flex flex-col justify-center transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:bg-white/10">
            <h2 className="text-4xl font-bold text-orange-500">
              ${totalAmountOfCartItems}
            </h2>

            <h3 className="mt-3 text-sm font-semibold text-white">
              Cart Value
            </h3>

            <p className="mt-1 text-gray-400 text-xs">Ready to checkout</p>
          </div>

          {/* Top Products */}
          <div className="w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 max-h-30 flex flex-col justify-center transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:bg-white/10">
            <h2 className="text-4xl font-bold text-orange-500">5</h2>

            <h3 className="mt-3 text-sm font-semibold text-white">
              Top Products
            </h3>

            <p className="mt-1 text-gray-400 text-xs">Highly rated</p>
          </div>

          {/* Categories */}
          <div className="w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 max-h-30 flex flex-col justify-center transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:bg-white/10">
            <h2 className="text-4xl font-bold text-orange-500">6</h2>

            <h3 className="mt-3 text-sm font-semibold text-white">
              Categories
            </h3>

            <p className="mt-1 text-gray-400 text-xs">To explore</p>
          </div>
        </div>
      </section>
      <section className=" w-full mx-auto px-6 py-10">
        <div className="text-center">
          <h2 className="text-4xl font-display font-bold text-white">
            Shop by <span className="text-orange-500">Category</span>
          </h2>

          <p className="text-gray-400 mt-3">
            Explore our most popular shopping categories.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-6 p-6">
          {[
            "Fashion",
            "Electronics",
            "Shoes",
            "Beauty",
            "Furniture",
            "Gaming",
          ].map((category) => (
            <div
              key={category}
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 cursor-pointer transition-all duration-300 hover:border-orange-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center text-3xl mx-auto">
                🛍️
              </div>

              <h3 className="text-white text-center mt-5 font-semibold group-hover:text-orange-500">
                {category}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full  mx-auto px-6 py-20">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-4xl font-display font-bold text-white">
              Featured <span className="text-orange-500">Products</span>
            </h2>

            <p className="text-gray-400 mt-2">
              Handpicked products just for you.
            </p>
          </div>

          <button className="text-orange-500 hover:underline">View All</button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden hover:border-orange-500 transition"
            >
              <div className="h-60 bg-gray-800 flex items-center justify-center text-gray-500">
                Product Image
              </div>

              <div className="p-5">
                <h3 className="text-white font-semibold">Premium Sneakers</h3>

                <p className="text-orange-500 font-bold text-xl mt-2">₹2,499</p>

                <button className="w-full mt-5 bg-orange-500 py-3 rounded-xl hover:bg-orange-600 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className=" w-full mx-auto px-6 py-20">
        <div className="relative overflow-hidden z-10 rounded-3xl bg-linear-to-r from-orange-500 via-orange-600 to-orange-700 p-8 md:p-12">
          {/* Background Glow */}
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-yellow-300/20 blur-3xl"></div>

          <div className="relative flex flex-col items-center justify-between gap-10 lg:flex-row">
            {/* Left */}
            <div className="max-w-xl">
              <span className="rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white">
                🔥 Limited Time Offer
              </span>

              <h2 className="mt-5 font-display text-5xl font-bold text-white">
                Flash Sale ⚡
              </h2>

              <p className="mt-4 text-lg text-orange-100">
                Grab your favorite products with up to
                <span className="font-bold text-white"> 70% OFF </span>
                before the offer ends.
              </p>

              {/* Features */}
              <div className="mt-6 flex flex-wrap gap-5 text-white">
                <span>🚚 Free Shipping</span>
                <span>💳 Secure Payment</span>
                <span>↩️ Easy Returns</span>
              </div>

              <button onClick={()=>{navigate('/app/shop')}}
               className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-orange-600 transition hover:scale-105 hover:bg-gray-100">
                Shop Now →
              </button>
            </div>

            {/* Right */}
            <div className="text-center">
              <p className="mb-4 text-lg font-semibold text-white">
                Offer Ends In
              </p>

              <div className="flex gap-4">
                <div className="rounded-2xl bg-white/20 px-5 py-4 backdrop-blur-md">
                  <h3 className="text-3xl font-bold text-white">{hours}</h3>
                  <p className="text-sm text-orange-100">Hours</p>
                </div>

                <div className="rounded-2xl bg-white/20 px-5 py-4 backdrop-blur-md">
                  <h3 className="text-3xl font-bold text-white">{minutes}</h3>
                  <p className="text-sm text-orange-100">Minutes</p>
                </div>

                <div className="rounded-2xl bg-white/20 px-5 py-4 backdrop-blur-md">
                  <h3 className="text-3xl font-bold text-white">{seconds}</h3>
                  <p className="text-sm text-orange-100">Seconds</p>
                </div>
              </div>

              <p className="mt-6 text-xl text-orange-100" >
               <span className=" inline-block animate-rotate-pause">⏳</span>  Hurry! Limited stock available.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mx-auto ">
        <div className=" px-6 ">
          {/* Heading */}
          <div className="mb-12 text-center">
            <h2 className="font-display text-4xl font-bold text-white">
              Why Choose <span className="text-orange-500">BuyNest?</span>
            </h2>

            <p className="mt-3 text-gray-400">
              Experience shopping with speed, security, and unbeatable prices.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Fast Delivery */}
            <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:bg-white/10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-4xl transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                🚚
              </div>

              <h3 className="text-2xl font-semibold text-white">
                Fast Delivery
              </h3>

              <p className="mt-3 text-gray-400">
                Same-day delivery available on selected products.
              </p>
            </div>

            {/* Secure Payments */}
            <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:bg-white/10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-4xl transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                🔒
              </div>

              <h3 className="text-2xl font-semibold text-white">
                Secure Payments
              </h3>

              <p className="mt-3 text-gray-400">
                100% encrypted checkout with trusted payment methods.
              </p>
            </div>

            {/* Best Prices */}
            <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:bg-white/10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-4xl transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                🏷️
              </div>

              <h3 className="text-2xl font-semibold text-white">Best Prices</h3>

              <p className="mt-3 text-gray-400">
                Price-match guarantee with exclusive daily offers.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" w-full  max-w-xl mx-auto px-6 py-20 -mb-15">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center">
          <h2 className="text-2xl font-display font-bold text-white">
            Stay Updated
          </h2>

          <p className="text-gray-400 mt-3">
            Subscribe to receive exclusive offers and product updates.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="md:w-96 px-5 py-4 rounded-xl bg-white/10 border border-white/10 text-white outline-none focus:border-orange-500"
            />

            <button className="px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
