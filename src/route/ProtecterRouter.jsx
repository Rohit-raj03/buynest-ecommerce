import { React, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Navigate, Outlet } from "react-router";

const ProtecterRouter = () => {
  const { loggedInUser } = useContext(AppContext);

  return loggedInUser ? <Outlet /> : <Navigate to={"/"} replace />;
};

export default ProtecterRouter;
