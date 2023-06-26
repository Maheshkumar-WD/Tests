import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthorizedProtectedRoute = ({ children }) => {
  let navigate = useNavigate();
  let { isAuth, isAdmin } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isAuth && !isAdmin) {
      return navigate("/dashboard");
    } else if(!isAuth){
      return navigate("/login");
    }
  }, [isAuth, isAdmin, navigate])
  return children;
};

export default AuthorizedProtectedRoute;
