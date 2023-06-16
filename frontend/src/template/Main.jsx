import React from "react";
import NavComp from "../components/Navbar";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <>
      <NavComp />
      <Outlet />
    </>
  );
};

export default Main;
