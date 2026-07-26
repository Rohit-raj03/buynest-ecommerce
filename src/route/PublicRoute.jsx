import { React, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Navigate, Outlet } from "react-router";

const PublicRoute = () => {
  const { loggedInUser } = useContext(AppContext);
  if (loggedInUser) {
    return <Navigate to={"/app"} replace />;
  }
  return <Outlet />;
};

export default PublicRoute;
