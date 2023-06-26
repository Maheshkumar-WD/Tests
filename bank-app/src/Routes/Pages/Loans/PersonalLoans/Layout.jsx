import React from "react";
import { Link, Outlet } from "react-router-dom";
import classes from "./Loan.module.css";
import Card from "../../../../Components/UI/Card/Card";
const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
