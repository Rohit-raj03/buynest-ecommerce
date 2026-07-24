import React from "react";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Shop from "../Pages/Shop";
import Contact from "../Pages/Contact";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "../layout/AppLayout";
import AuthLayout from "../layout/AuthLayout";
import Login from "../auth/Login";
import Register from "../auth/Register";
import ProtecterRouter from "./ProtecterRouter";

const AppRoute = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/app",
      element: <ProtecterRouter />,
      children: [
        {
          path: "",
          element: <AppLayout />,
          children: [
            { path: "", element: <Home /> },
            { path: "shop", element: <Shop /> },
            { path: "about", element: <About /> },
            { path: "contact", element: <Contact /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoute;
