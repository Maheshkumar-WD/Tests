import React from "react";
import Card from "../../../../Components/UI/Card/Card";
import { Link, useLoaderData } from "react-router-dom";
import classes from "./Applications.module.css";
import Button from "../../../../Components/UI/Button/Button";
const Applications = () => {
  let data = useLoaderData();
  return (
    <div className={classes.tableContainer}>
      <Card>
        <Link to="..">
          <>&#8592; Back</>
        </Link>
        {data ? (
          <table>
            <caption>Track Applications</caption>
            <thead>
              <tr>
                <th>Id</th>
                <th>Type</th>
                <th>isApproved</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(data).map((key, id) => {
                return (
                  <tr key={key}>
                    <td>{id + 1}</td>
                    <td>{data[key].type}</td>
                    <td>
                      {data[key].approved && !data[key].rejected ? (
                        <span className={classes.approved}>Approved</span>
                      ) : data[key].rejected ? (
                        <span className={classes.rejected}>Rejected</span>
                      ) : (
                        <span className={classes.pending}>Pending</span>
                      )}
                    </td>
                    <td>{data[key].amount ? data[key].amount : "-"}</td>
                    <td>
                      {!data[key].approved && !data[key].rejected && (
                        <Button varient={"solid"}>Withdrew Application</Button>
                      )}
                      {data[key].approved && !data[key].rejected && (
                        <Button varient={"solid"}>View Status</Button>
                      )}
                      {data[key].rejected && (
                        <Button varient={"solid"}>View Details</Button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot></tfoot>
          </table>
        ) : (
          <h1>No Application Found</h1>
        )}
      </Card>
    </div>
  );
};

export const loader = async ({ request, params }) => {
  let { id } = params;
  try {
    let response = await fetch(
      process.env.REACT_APP_ACCOUNT + `/applications.json`
    );
    if (!response.ok) {
      throw new Error("Something went wrong.");
    }
    let result = await response.json();
    let transformedData = Object.keys(result).map(key => result[key]).filter(ele=>ele.userId=== id);
    console.log(transformedData)
    return transformedData
  } catch (error) {
    return {};
  }
};

export default Applications;
