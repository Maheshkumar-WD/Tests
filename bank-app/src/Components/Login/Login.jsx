import React, { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import classes from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../Reducer/AuthSlice/AuthSlice";
import Navbar from "../Navbar/Navbar";
const Login = () => {
  let {  isAdmin, isAuth } = useSelector((state) => state.auth);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [formData, setFormData] = useState({
    id: "",
    password: "",
  });

  useEffect(() => {
    if (isAuth && isAdmin) {
      return navigate("/admin")
    } else if (isAuth && !isAdmin) {
      return navigate("/dashboard");
    }
  }, [isAdmin, isAuth, navigate]);
  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    let sendRequest = async () => {
      try {
        let response = await fetch(process.env.REACT_APP_ACCOUNT_HOLDERS);
        if (!response.ok) {
          throw new Error("Somthing went Wrong");
        }
        let users = await response.json();
        let currUser;
        Object.keys(users).forEach((key) => {
          if (
            users[key].phone === formData.id &&
            users[key].password === formData.password &&
            users[key].userType === "admin"
          ) {
            currUser = {
              token: key,
              userType: "admin",
            };
          } else if (
            users[key].phone === formData.id &&
            users[key].password === formData.password
          ) {
            currUser = {
              token: key,
              userType: "user",
            };
          }
        });
        if (currUser) {
          dispatch(authActions.login(currUser));
          return;
        } else {
          alert("Invalid phone Number or password");
        }
      } catch (error) {
        return alert(error.message);
      }
    };
    sendRequest();
  };
  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit} className={classes.loginForm}>
        <Card>
          <h1>Login</h1>
          <Input
            label={"Phone Number"}
            inputId={"id"}
            inputName={"id"}
            onChange={handleChange}
          />
          <Input
            label={"Password"}
            inputType={"password"}
            inputId={"password"}
            inputName={"password"}
            onChange={handleChange}
          />
          <div className={classes["form-actions"]}>
            <Button varient={"solid"} type={"submit"}>
              Login
            </Button>
          </div>
        </Card>
      </form>
    </>
  );
};

export default Login;
