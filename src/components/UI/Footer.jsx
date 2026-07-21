import React from "react";
import {
  FiShoppingBag,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiGithub,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-white/5 backdrop-blur-xl mt-20">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-orange-500 p-2">
                <FiShoppingBag className="text-2xl text-white" />
              </div>

              <h2 className="font-display text-2xl font-bold text-white">
                Buy<span className="text-orange-500">Nest</span>
              </h2>
            </div>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              BuyNest is your trusted online shopping destination for fashion,
              electronics, home essentials, and much more. Shop smarter with
              premium quality and fast delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>

            <ul className="mt-5 space-y-3">
              {["Home", "Shop", "Categories", "About", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 transition hover:text-orange-500"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Customer Support
            </h3>

            <ul className="mt-5 space-y-3">
              {[
                "Help Center",
                "Shipping",
                "Returns",
                "Privacy Policy",
                "Terms & Conditions",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 transition hover:text-orange-500"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>

            <p className="mt-5 text-sm text-gray-400">
              Stay connected with us on social media.
            </p>

            <div className="mt-6 flex gap-4">
              {[FiFacebook, FiInstagram, FiTwitter, FiGithub].map(
                (Icon, index) => (
                  <button
                    key={index}
                    className="group rounded-xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:border-orange-500 hover:bg-orange-500/20"
                  >
                    <Icon className="text-xl text-white transition group-hover:text-orange-500" />
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-orange-500">BuyNest</span>. All rights
            reserved.
          </p>

          <p>
            Designed & Developed by{" "}
            <span className="font-semibold text-orange-500">
              Rohit Raj
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;