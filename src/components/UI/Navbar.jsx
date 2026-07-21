import React, { useState } from "react";

import {
  FiShoppingBag,
  FiMenu,
  FiX,
  FiShoppingCart,
  FiLogOut,
} from "react-icons/fi";

const Navbar = ({ setIsCartOpen }) => {
  
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "Shop", "About", "Contact"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b  border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl">
      <nav className=" mx-auto max-w-7xl  ">
        <div className="flex items-center justify-between px-6 py-2">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-orange-500 p-2">
              <FiShoppingBag className="text-2xl text-white" />
            </div>

            <h1 className="font-display text-2xl font-bold text-white">
              Buy<span className="text-orange-500">Nest</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-10 md:flex">
            {navLinks.map((item) => (
              <li
                key={item}
                className="cursor-pointer text-gray-300 transition hover:text-orange-400"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Right */}
          <div className="hidden items-center gap-4 md:flex">
            {/* User */}
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-2 py-1.5">
              <div className="flex px-2 items-center justify-center rounded-full bg-orange-500  text-white">
                R
              </div>
              <div>
                <p className="text-sm font-light text-white">Rohit Raj</p>
              </div>
            </div>
            {/* Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative  cursor-pointer rounded-xl border  border-white/10 bg-white/5 p-2 transition group hover:border-orange-500/40"
            >
              <FiShoppingCart className="text-xl text-white transition group-hover:text-orange-500" />

              <span className="absolute -right-1.5 -top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-orange-500 text-xs  text-white p-2">
                5
              </span>
            </button>
            {/* Logout */}
            <button className=" group cursor-pointer rounded-xl border border-white/10 bg-white/5 p-2 transition hover:text-red-500/15 hover:bg-red-500/15 hover:border-red-500/70">
              <FiLogOut className="text-xl text-white group-hover:text-red-500/70" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          {/* Mobile Right */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Cart */}
            <button className="relative rounded-xl border border-white/10 bg-white/5 p-2 transition hover:border-orange-500/40 group">
              <FiShoppingCart className="text-xl text-white transition group-hover:text-orange-500" />

              <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs text-white">
                5
              </span>
            </button>

            {/* Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-xl border border-white/10 bg-white/5 p-2 transition hover:border-orange-500/40 group text-sm"
            >
              {isOpen ? (
                <FiX className="text-xl text-white group-hover:text-orange-500" />
              ) : (
                <FiMenu className="text-xl text-white group-hover:text-orange-500" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-white/10 px-6 py-5 md:hidden">
            <ul className="space-y-5">
              {navLinks.map((item) => (
                <li
                  key={item}
                  className="cursor-pointer text-gray-300 hover:text-orange-400"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white">
                  R
                </div>

                <span className="text-white">Rohit Raj</span>
              </div>

              <button className="rounded-xl bg-orange-500 p-3">
                <FiLogOut className="text-xl text-white" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
