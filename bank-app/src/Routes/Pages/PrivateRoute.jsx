import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let navigate = useNavigate();
  let { isAuth } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!isAuth) {
      return navigate("/login");
    }
  }, [isAuth, navigate]);
  return <>{children}</>;
};

export default PrivateRoute;
