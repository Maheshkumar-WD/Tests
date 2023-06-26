import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let { isAuth, isAdmin } = useSelector((state) => state.auth);

  if (!isAuth) {
    return <Navigate to="/login" />;
  } else if (isAuth && !isAdmin) {
    return <>{children}</>;
  } else {
    return <Navigate to={"/admin"} />;
  }
};

export default PrivateRoute;
