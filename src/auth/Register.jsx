import { React, useContext } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { Navigate, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const Register = () => {
  const { registerData, setRegisterData, setLoggedInUser } =
    useContext(AppContext);
  const nevigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    toast.success("Registration Successful 🎉");
    let user = [...registerData, data];
    setRegisterData(user);
    localStorage.setItem("registerData", JSON.stringify(user));
    setLoggedInUser(data);
    localStorage.setItem("loggedInUser", JSON.stringify(data));
    nevigate("/app");

    reset();
  };
  return (
    <section className="w-90 flex items-center justify-center p-8 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center">
          <div className="flex justify-center items-center">
            <div className="w-fit p-2 bg-orange-500 rounded-xl mr-2">
              <FiShoppingBag className="text-2xl text-white" />
            </div>

            <h1 className="text-2xl font-bold text-white font-display">
              Buy<span className="text-orange-500">Nest</span>
            </h1>
          </div>

          <h2 className="text-xl font-semibold text-white my-3 tracking-wider">
            Create Account
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 mt-">
          {/* Full Name */}
          <div>
            <label className="block text-gray-300  text-sm mb-1">
              Full Name
            </label>

            <input
              {...register("name", {
                required: "Full Name is required",
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters",
                },
              })}
              type="text"
              placeholder="Full Name"
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
          {errors.name && (
            <p className="text-red-500 text-xs -mt-1.5">
              {errors.name.message}
            </p>
          )}
          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-1 text-sm">
              Email Address
            </label>

            <input
              {...register("email", { required: "enter vaild email" })}
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
          {errors.email && (
            <p className="text-red-500 text-xs -mt-1.5">
              {errors.email.message}
            </p>
          )}
          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-1 text-sm">Password</label>

            <input
              {...register("password", {
                required: "Enter a password ",
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters",
                },
              })}
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
          {errors.password && (
            <p className="text-red-500 text-xs -mt-1.5">
              {errors.password.message}
            </p>
          )}
          {/* Confirm Password */}
          <div>
            <label className="block text-gray-300 mb-1 text-sm">
              Confirm Password
            </label>

            <input
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
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
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs -mt-1.5">
              {errors.confirmPassword.message}
            </p>
          )}
          {/* Terms */}
          <label className="flex items-start gap-2 text-sm text-gray-400 my-4">
            <input
              required
              type="checkbox"
              className="accent-orange-500 mt-1"
            />

            <span>
              I agree to the{" "}
              <button type="button" className="text-orange-500 hover:underline">
                Terms & Conditions
              </button>
            </span>
          </label>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-linear-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 transition duration-300 text-white font-semibold shadow-lg cursor-pointer"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-400 mt-6 text-sm">
          Already have an account?{" "}
          <button
            onClick={() => nevigate("/")}
            className="text-orange-500 hover:text-orange-400 hover:underline font-medium cursor-pointer"
          >
            Sign In
          </button>
        </p>
      </div>
    </section>
  );
};

export default Register;
