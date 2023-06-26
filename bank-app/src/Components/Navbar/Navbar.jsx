import React, { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import classes from "./Navbar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../Reducer/AuthSlice/AuthSlice";

const Navbar = () => {
  let navigate = useNavigate();
  let authStore = useSelector((state) => state.auth);
  console.log(authStore);
  let dispatch = useDispatch();

  let setActive = ({ isActive }) => {
    return isActive ? classes.active : "";
  };
  return (
    <header className={classes.header}>
      <Card>
        <nav className={classes.navContainer}>
          <h1>Bank App</h1>
          <ul>
            {!authStore.isAuth && (
              <>
                <li>
                  <Button
                    onClick={() => {
                      return navigate("/login");
                    }}
                    type={"button"}
                    varient={"outline"}
                  >
                    Login
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => {
                      return navigate("/newaccount");
                    }}
                    varient={"solid"}
                  >
                    Open Demat Account
                  </Button>
                </li>
              </>
            )}
            {authStore.isAuth && !authStore.isAdmin && (
              <>
                <li>
                  <NavLink to={"/dashboard"} className={setActive} end>
                    All Transations
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`/dashboard/transfer/${authStore.token}`}
                    className={setActive}
                  >
                    Transfer
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/dashboard/loans`} className={setActive}>
                    Loans
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`/dashboard/deposit/${authStore.token}`}
                    className={setActive}
                  >
                    Deposit
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to={`/dashboard/account/${authStore.token}`}
                    className={setActive}
                  >
                    Account
                  </NavLink>
                </li>
                <li>
                  <Button
                    onClick={() => {
                      dispatch(authActions.logout());
                    }}
                    varient={"solid"}
                  >
                    Logout
                  </Button>
                </li>
              </>
            )}
            {authStore.isAdmin && (
              <>
                <li>
                  <NavLink
                    to={`applications/${authStore.token}`}
                    className={setActive}
                  >
                    All Applications
                  </NavLink>
                </li>
                <li>
                  <Button
                    onClick={() => {
                      return dispatch(authActions.logout());
                    }}
                    varient={"solid"}
                  >
                    Logout
                  </Button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </Card>
    </header>
  );
};

export default Navbar;
