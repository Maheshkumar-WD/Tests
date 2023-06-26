import React, { useCallback, useEffect, useState } from "react";
import Button from "../../../../Components/UI/Button/Button";
import InputGroup from "../../../../Components/UI/Input/InputGroup";
import classes from "./Applications.module.css"
import { useDispatch, useSelector } from "react-redux";
import { applicationsActions } from "../../../../Reducer/Admin/Applications/ApplicationsSlice";
const TableRow = ({ application, id }) => {
    let data = useSelector(state => state.applications.data);
    let dispatch = useDispatch();
    let [userInfo, setUserInfo] = useState(null);
    console.log(data);
    let fetchUser = async () => {
        try {
            let response = await fetch(
                process.env.REACT_APP_ACCOUNT + `account_holders/${application.userId}.json`
            );
            let result = await response.json();
            setUserInfo(result);
            return;
        } catch (error) {
            return error;
        }
    };
    let handleReject = async()=>{
        try {
            let response = await fetch(process.env.REACT_APP_ACCOUNT + `applications/${application.id}.json`, { method: "PATCH", body: JSON.stringify({ rejected: true }), headers: { "Content-Type": "application/json" } })
            if (!response.ok) {
                throw new Error("Server Error");
            }
            alert("Rejected");
        } catch (error) {
            return alert(error.message)
        }
        dispatch(applicationsActions.reject(application.id));
    }

    let handleApprove = async () => {
        try {
            let response = await fetch(process.env.REACT_APP_ACCOUNT + `applications/${application.id}.json`, { method: "PATCH", body: JSON.stringify({ approved: true }), headers: { "Content-Type": "application/json" } })
            if (!response.ok) {
                throw new Error("Server Error");
            }
            alert("Approved");
        } catch (error) {
            return alert(error.message)
        }
        dispatch(applicationsActions.approve(application.id));
    }

    useEffect(() => {
        fetchUser();
    }, []);
    return <tr>
        <td>{id}</td>
        <td>{application.type}</td>
        <td>{application.id}</td>
        <td>{application.approved ? <span className={"success"}>Approved</span> : (!application.approved && application.rejected) ? <span className="danger">Rejected</span> : <span className="warning">Pending</span>}</td>
        <td className={classes.actionTd}><InputGroup><Button varient={"solid"}>User Info</Button>{application.approved || application.rejected ? <></> : <><Button varient={"solid"} onClick={handleApprove} >Approve</Button><Button varient={"outline"} onClick={handleReject}>Reject</Button></>}</InputGroup></td>
    </tr>;
};

export default TableRow;
