import React, { useState } from "react";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import classes from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../Reducer/AuthSlice/AuthSlice";
const Login = () => {
  let { isAuth } = useSelector((state) => state.auth);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [formData, setFormData] = useState({
    id: "",
    password: "",
  });
  if (isAuth) {
    return navigate("/dashboard");
  }
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
        Object.keys(users).forEach((key) => {
          if (
            users[key].phone === formData.id &&
            users[key].password === formData.password
          ) {
            dispatch(authActions.login(key));
            return;
          }
        });
      } catch (error) {
        return alert(error.message);
      }
    };
    sendRequest();
  };
  return (
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
  );
};

export default Login;
