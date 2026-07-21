import React from "react";
import { FiShoppingBag } from "react-icons/fi";

const Login = () => {
  return (
    <section className=" w-90 flex items-center justify-center p-8 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl">
      <div className=" w-full max-w-md borde">
        {/* Logo */}
        <div className="text-center">
          <div className="flex justify-center items-center">
            <div className="w-fit p-2 bg-orange-500 rounded-xl mx-2">
              <FiShoppingBag className="text-2xl text-white" />
            </div>
            <h1 className="text-2xl text-white font-clash font-display font-bold">
              Buy<span className=" text-orange-500">Nest</span>
            </h1>
          </div>
          <h2 className="text-xl font-semibold text-white my-3 font-roboto tracking-wider">Welcome Back</h2>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2 text-sm">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl
             bg-white/10
             backdrop-blur-md
             border border-white/20
             text-white
             placeholder:text-gray-400
             outline-none
             transition-all duration-300
             focus:border-orange-400
             focus:bg-white/15
             focus:ring-2
             focus:ring-orange-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-2 text-sm">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl
             bg-white/10
             backdrop-blur-md
             border border-white/20
             text-white
             placeholder:text-gray-400
             outline-none
             transition-all duration-300
             focus:border-orange-400
             focus:bg-white/15
             focus:ring-2
             focus:ring-orange-500"
            />
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
              <input type="checkbox" className="accent-orange-500" />
              Remember me
            </label>

            <button
              type="button"
              className="text-orange-500 hover:text-orange-400 transition"
            >
              Forgot Password?
            </button>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-linear-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 transition duration-300 text-white font-semibold shadow-lg cursor-pointer "
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-400 mt-6 text-sm">
          Don't have an account?{" "}
          <button className="text-orange-500 hover:text-orange-400 font-medium cursor-pointer hover:underline">
            Create Account
          </button>
        </p>
      </div>
    </section>
  );
};

export default Login;
