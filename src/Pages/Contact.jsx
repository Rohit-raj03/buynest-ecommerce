import React from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiClock,
} from "react-icons/fi";

const Contact = () => {
  return (
    <section className="min-h-screen pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
            Contact Us
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold text-white">
            We'd Love to <span className="text-orange-500">Hear From You</span>
          </h1>

          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Have a question, feedback, or need support? Our team is always ready
            to help you.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="rounded-2xl bg-orange-500/15 p-4">
                <FiMail className="text-3xl text-orange-500" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">Email</h3>
                <p className="mt-1 text-gray-400">
                  support@buynest.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="rounded-2xl bg-orange-500/15 p-4">
                <FiPhone className="text-3xl text-orange-500" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">Phone</h3>
                <p className="mt-1 text-gray-400">
                  +91 98765 43210
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="rounded-2xl bg-orange-500/15 p-4">
                <FiMapPin className="text-3xl text-orange-500" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Address
                </h3>
                <p className="mt-1 text-gray-400">
                  Patna, Bihar, India
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="rounded-2xl bg-orange-500/15 p-4">
                <FiClock className="text-3xl text-orange-500" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Working Hours
                </h3>
                <p className="mt-1 text-gray-400">
                  Mon - Sat : 9:00 AM - 8:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="text-3xl font-bold text-white">
              Send a Message
            </h2>

            <form className="mt-8 space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-orange-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-orange-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-orange-500"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-orange-500"
              />

              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-4 font-semibold text-white transition hover:bg-orange-600">
                <FiSend />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;