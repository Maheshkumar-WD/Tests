import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useSelector } from "react-redux";
import Login from "../../Components/Login/Login";
import { Outlet } from "react-router-dom";

const Home = () => {
  let { isAuth } = useSelector((state) => state.auth);
  
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Home;
