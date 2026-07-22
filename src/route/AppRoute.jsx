import React from "react";
import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Shop from "../Pages/Shop";
import Contact from "../Pages/Contact";

const AppRoute = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/about"} element={<About />}></Route>
        <Route path={"/shop"} element={<Shop />}></Route>
        <Route path={"/contact"} element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default AppRoute;
