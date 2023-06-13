/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import classes from "./Profile.module.css";
import Card from "../../../Components/UI/Card/Card";
import { useFetchUser } from "../../../utils/fetchUser";
import { useParams } from "react-router-dom";
const ProfilePage = () => {
  let { id } = useParams();
  let user = useFetchUser(process.env.REACT_APP_ACCOUNT + `account_holders/${id}.json`);
  
  return (
    <div className={classes.ProfileContainer}>
      <Card>
        <table>
          <caption>
            <h1>Account Details</h1>
          </caption>
          <thead></thead>
          <tbody>
            <tr>
              <th>Account Number</th>
              <td>{user?.accountNumber}</td>
            </tr>
            <tr>
              <th>Account Balance</th>
              <td>{user?.balance}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{user?.name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{user?.email}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{user?.phone}</td>
            </tr>
            <tr>
              <th>Country</th>
              <td>{user?.country}</td>
            </tr>
            <tr>
              <th>State</th>
              <td>{user?.state}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>{user?.city}</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default ProfilePage;
