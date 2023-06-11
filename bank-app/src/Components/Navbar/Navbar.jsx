import React from "react";
import Card from "../UI/Card/Card";
import classes from "./Navbar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../Reducer/AuthSlice/AuthSlice";
const Navbar = () => {
  let navigate = useNavigate();
  let authStore = useSelector((state) => state.auth);
  console.log(authStore)
  let dispatch = useDispatch();
  let setActive = ({ isActive }) => {
    return isActive ? "active" : "";
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
            {authStore.isAuth && (
              <>
                <li>
                  <NavLink to={"/dashboard/alltransactions"} className={setActive}>All Transations</NavLink>
                </li>
                <li>
                  <NavLink to={`/dashboard/transfer/${authStore.token}`} className={setActive}>Transfer</NavLink>
                </li>
                <li>
                  <NavLink className={setActive}>Deposit</NavLink>
                </li>
                <li>
                  <NavLink className={setActive}>Mini Statement</NavLink>
                </li>
                <li>
                  <NavLink className={setActive}>Settings</NavLink>
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
