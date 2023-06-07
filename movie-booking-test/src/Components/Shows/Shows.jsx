import Show from "./Show";
import classes from "./Shows.module.css";
import { useLoaderData } from "react-router-dom";
const Shows = () => {
  let shows = useLoaderData();

  return (
    <div className={classes.shows}>
      {shows?.map((show) => (
        <Show key={show.show.id} show={show.show} />
      ))}
    </div>
  );
};

export default Shows;
