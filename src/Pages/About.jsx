import { Link } from "react-router";

import { FiShoppingBag } from "react-icons/fi";

const team = [
  {
    name: "Rohit Raj",
    role: "Founder & CEO",
    letter: "A",
  },
  {
    name: "Pratham ",
    role: "Head of Product",
    letter: "P",
  },
  {
    name: "Harsh",
    role: "Lead Engineer",
    letter: "R",
  },
  {
    name: "Abhi",
    role: "Design Director",
    letter: "S",
  },
];

const values = [
  {
    title: "Trust",
    desc: "Every product is verified for quality and authenticity before listing.",
  },
  {
    title: "Speed",
    desc: "We prioritize fast performance and reliable delivery every single time.",
  },
  {
    title: "Community",
    desc: "Our platform evolves based on real customer feedback and experiences.",
  },
  {
    title: "Quality",
    desc: "Only the best products make it to our catalog—no compromises.",
  },
];

export default function About() {
  return (
    <section className="bg-black text-white min-h-screen py-20 px-6">
      <div className=" w-fit rounded-xl bg-orange-500 p-4 mx-auto my-10 animate-[float_4s_ease-in-out_infinite] shadow-xl shadow-orange-500/50">
        <FiShoppingBag className="text-3xl text-white" />
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="bg-orange-500/10 border border-orange-500/20 text-orange-400 px-4 py-1 rounded-full text-sm">
            About BuyNest
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-6">
            Shop Smarter with{" "}
            <span className=" font-display">
              Buy<span className="text-orange-500">Nest</span>
            </span>
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg">
            BuyNest is a modern e-commerce platform built to make online
            shopping faster, safer, and more enjoyable for everyone.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            ["20K+", "Products"],
            ["50K+", "Happy Customers"],
            ["4.9", "Average Rating"],
            ["99%", "On-time Delivery"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 text-center"
            >
              <h2 className="text-4xl font-bold text-orange-500">{value}</h2>
              <p className="text-gray-400 mt-2">{label}</p>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>

            <p className="text-gray-400 leading-8 mb-5">
              BuyNest started in 2022 as a small passion project by two
              developers who believed online shopping could be faster, cleaner,
              and easier to use.
            </p>

            <p className="text-gray-400 leading-8">
              Today, BuyNest proudly serves thousands of customers with
              electronics, fashion, jewelry, and everyday essentials while
              staying committed to speed, transparency, and customer
              satisfaction.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-500/20 bg-orange-500/10 p-10">
            <h3 className="text-2xl font-bold mb-4 text-orange-400">
              Our Mission
            </h3>

            <p className="text-gray-300 leading-8">
              To create an online shopping experience that's fast, trustworthy,
              affordable, and enjoyable for every customer.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-14">
            What We Stand For
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-orange-500 transition"
              >
                <h3 className="text-2xl font-semibold text-orange-500 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-14">
            Meet Our Team
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-orange-500 transition"
              >
                <div className="h-20 w-20 mx-auto rounded-full bg-orange-500 text-3xl font-bold flex items-center justify-center mb-5">
                  {member.letter}
                </div>

                <h3 className="text-xl font-semibold">{member.name}</h3>

                <p className="text-gray-400 mt-2">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-3xl bg-linear-to-r from-orange-500 to-orange-600 p-12 text-center">
          <h2 className="text-4xl font-bold mb-5">Ready to Shop?</h2>

          <p className="text-orange-100 mb-8 text-lg">
            Explore thousands of quality products at unbeatable prices.
          </p>

          <Link
            to="/products"
            className="inline-block bg-white text-orange-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </section>
  );
}
