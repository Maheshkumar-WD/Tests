import React from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Shows.module.css";
import { useNavigate } from "react-router-dom";
const Show = ({ show }) => {
  
  let navigate = useNavigate();
  const handleSetCurrentShow = () => {
    return navigate(`/show/${show.id}`);
  };
  return (
    <div className={classes.Show}>
      <Card>
        <div className={classes.imageContainer}>
          <img src={show.image.original} alt="" />
        </div>
        <h3>{show.name}</h3>
        <p>Rating: {show.rating.average || 0}/10</p>
        <p>Genres: {show.genres}</p>
        <Button onClick={handleSetCurrentShow}>More Details</Button>
      </Card>
    </div>
  );
};

export default Show;
