import React from "react";
import NavComp from "../components/Navbar";
import { Outlet } from "react-router-dom";
import HifiFooter from "../components/Footer/HifiFooter";
const Main = () => {
  return (
    <>
      <NavComp />
      <Outlet />
      <HifiFooter />
    </>
  );
};

export default Main;
