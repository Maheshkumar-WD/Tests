import React, { useCallback, useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import Card from "../UI/Card/Card";
import classes from "./SingleShow.module.css";
import axios from "axios";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
const SingleShow = () => {
  let navigate = useNavigate();
  let [showForm, setShowForm] = useState(false);
  let [currData, setCurrData] = useState(null);
  let [formData, setFormData] = useState({
    phoneNumber: "",
    email: "",
    ticketCount: "",
  });
  let { showId } = useParams();
  let fetchData = useCallback(async () => {
    let response = await axios.get("https://api.tvmaze.com/search/shows?q=all");
    let data = await response.data;
    let currentData = data.filter((dt) => dt.show.id === +showId);
    console.log(currentData[0].show);
    setCurrData(currentData[0].show);
  }, [showId]);
  useEffect(() => {
    fetchData();
    return () => {
      setCurrData(null);
    };
  }, [fetchData]);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    let submitData = { ...formData, showId, show: currData };
    let localstorageData = JSON.parse(localStorage.getItem("usersData")) || [];
    localstorageData.push(submitData);
    localStorage.setItem("usersData", JSON.stringify(localstorageData));
    alert("Ticket Bought Success");
    return navigate("/");
  };
  return (
    <Card className={classes.singleShowWrapper}>
      <div className={classes.imageContainer}>
        <img src={currData?.image?.original} alt="" />
      </div>
      <div className={classes.contentWrapper}>
        <h2>{currData?.name}</h2>
        <p dangerouslySetInnerHTML={{ __html: currData?.summary }}></p>
        <div className={classes.stats}>
          <p>
            <b>Rating :</b> {currData?.rating?.average || 0}
          </p>
          <p>
            <b>Genres : </b>
            {currData?.genres}
          </p>
          <p>
            <b>Language :</b> {currData?.language || " N/A"}
          </p>
        </div>
        {!showForm && (
          <Button type={"button"} onClick={() => setShowForm(true)}>
            Buy Ticket
          </Button>
        )}
        {showForm && (
          <form onSubmit={handleSubmit}>
            <h1>Buy Ticket</h1>
            <Input
              onChange={handleChange}
              label={"Phone Number"}
              inputId={"phonenumber"}
              inputType={"text"}
              inputName={"phoneNumber"}
            />
            <Input
              onChange={handleChange}
              label={"Email"}
              inputId={"email"}
              inputType={"email"}
              inputName={"email"}
            />
            <Input
              onChange={handleChange}
              label={"Number of Tickets"}
              inputId={"ticketCount"}
              inputType={"number"}
              inputName={"ticketCount"}
            />
            <div className={classes["form-group"]}>
              <Button
                onClick={() => {
                  setShowForm(false);
                }}
                type={"button"}
              >
                Cancle
              </Button>
              <Button type={"submit"}>Confirm</Button>
            </div>
          </form>
        )}
      </div>
    </Card>
  );
};

export default SingleShow;
