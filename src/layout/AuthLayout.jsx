import React from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-orange-500 to-black  ">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
