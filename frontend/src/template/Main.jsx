import React from "react";
import NavComp from "../components/Navbar";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <>
      <NavComp />

      <footer>This is the footer</footer>
    </>
  );
};

export default Main;
