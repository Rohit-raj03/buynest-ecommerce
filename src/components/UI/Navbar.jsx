import { React, useEffect, useState, useContext } from "react";
import { NavLink, replace, useNavigate } from "react-router";
import { AppContext } from "../../context/AppContext";

import {
  FiShoppingBag,
  FiMenu,
  FiX,
  FiShoppingCart,
  FiLogOut,
} from "react-icons/fi";

const Navbar = () => {
  const {
    setIsCartOpen,
    setIsOpen,
    isOpen,
    setLoggedInUser,
    loggedInUser,
    totalAmountOfCartItems,
    numberOfCartItems,
  } = useContext(AppContext);

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  // toUpperCase();
  const navLinks = [
    { name: "Home", path: "/app" },
    { name: "Shop", path: "/app/shop" },
    { name: "About", path: "/app/about" },
    { name: "Contact", path: "/app/contact" },
  ];
  const logOut = () => {
    setLoggedInUser(null);
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };
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
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end
                className={({ isActive }) =>
                  `relative transition duration-300 ${
                    isActive
                      ? "text-orange-500"
                      : "text-gray-300 hover:text-orange-400"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </ul>

          {/* Right */}
          <div className="hidden items-center gap-4 md:flex">
            {/* User */}
            <div className="flex gap-2 rounded-xl border border-white/10 bg-white/5 p-1 pr-2 ">
              <div className="flex items-center justify-center rounded-lg bg-orange-500  text-white h-6 w-6">
                {user.name[0].toUpperCase()}
              </div>
              <div>
                <p className="text-sm my-auto font-light  text-white">{user.name}</p>
              </div>
            </div>
            {/* Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative  cursor-pointer rounded-xl border  border-white/10 bg-white/5 p-2 transition group hover:border-orange-500/40"
            >
              <FiShoppingCart className="text-xl text-white transition group-hover:text-orange-500" />

              <span className="absolute -right-1.5 -top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-orange-500 text-xs  text-white p-2">
               {numberOfCartItems}
              </span>
            </button>
            {/* Logout */}
            <button
              onClick={() => logOut()}
              className=" group cursor-pointer rounded-xl border border-white/10 bg-white/5 p-2 transition hover:text-red-500/15 hover:bg-red-500/15 hover:border-red-500/70"
            >
              <FiLogOut className="text-xl text-white group-hover:text-red-500/70" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          {/* Mobile Right */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative rounded-xl border border-white/10 bg-white/5 p-2 transition hover:border-orange-500/40 group"
            >
              <FiShoppingCart className="text-xl text-white transition group-hover:text-orange-500" />

              <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs text-white">
                {numberOfCartItems}
              </span>
            </button>

            {/* Menu */}
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
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
            <ul className="space-y-5 flex flex-col gap-2">
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end
                  className={({ isActive }) =>
                    `relative transition duration-300  ${
                      isActive
                        ? "text-orange-500"
                        : "text-gray-300 hover:text-orange-400"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </ul>

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white font-medium">
                  {user.name[0].toUpperCase()}
                </div>

                <span className="text-white ">{user.name}</span>
              </div>

              <button
                onClick={() => logOut()}
                className="group cursor-pointer rounded-xl border border-white/10 bg-white/5 p-2 transition hover:text-red-500/15 hover:bg-red-500/15 hover:border-red-500/70"
              >
                <FiLogOut className="text-xl text-white group-hover:text-red-500/70" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
