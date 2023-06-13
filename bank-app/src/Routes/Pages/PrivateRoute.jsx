import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let { isAuth } = useSelector((state) => state.auth);

  if (!isAuth) {
    return <Navigate to="/login" />;
  } else {
    return <>{children}</>;
  }
};

export default PrivateRoute;
