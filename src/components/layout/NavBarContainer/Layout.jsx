import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import React from "react";

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
