import React, { useCallback, useEffect } from "react";
import classes from "./Applications.module.css";
import TableRow from "./TableRow";
import Card from "../../../../Components/UI/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { applicationsActions } from "../../../../Reducer/Admin/Applications/ApplicationsSlice";
import Input from "../../../../Components/UI/Input/Input";
import Select from "../../../../Components/UI/Input/Select";
import InputGroup from "../../../../Components/UI/Input/InputGroup";
import Button from "../../../../Components/UI/Button/Button";
import { useSearchParams } from "react-router-dom";
const Applications = () => {
    let data = useSelector(state => state.applications.data)
    let searchData = useSelector(state => state.applications.searchApplication);
    let [searchParams, setSearchParams] = useSearchParams();
    let dispatch = useDispatch()
    let fetchApplications = useCallback(async () => {
        let response = await fetch(
            process.env.REACT_APP_ACCOUNT + "applications.json", {
        }
        );
        let data = await response.json();
        let transformData = Object.keys(data).map((key) => {
            return { ...data[key], id: key };
        });
        transformData = transformData.reverse()
        dispatch(applicationsActions.setApplications(transformData))
    },[dispatch]);
    useEffect(() => {
            fetchApplications();
        
    }, [fetchApplications])

    useEffect(() => {
        let query = searchParams.get("search")
        if (query !== "" && query) {
            if (data) {
                let searchData = data.filter(app => app.id.match(query));
                dispatch(applicationsActions.setSearchApplication(searchData))
            }
        } else {
            dispatch(applicationsActions.setSearchApplication(null))
        }
        return () => {
            dispatch(applicationsActions.setSearchApplication(null))
        }
    }, [dispatch, data, searchParams])

    let debounceSearch;
    let handleSetParams = (e) => {
        if (debounceSearch) {
            clearTimeout(debounceSearch)
        }
        debounceSearch = setTimeout(() => {
            setSearchParams(prev => {
                return {
                    ...prev,
                    search: e.target.value.trim()
                }
            })
        }, 1000)
    }
    return (
        <div className={classes.tableContainer}>
            <Card>
                <div className={classes.cardHeader}>
                    <InputGroup>
                        <Input placeholder={"Search Application By Id"} onChange={handleSetParams} />
                        <Select options={[{ name: "Date" }, { name: "application type" }]} initialSelectValue={"--Sort By--"}></Select>
                        <Select options={[{ name: "Date" }, { name: "application type" }]} initialSelectValue={"--Filter--"}></Select>
                    </InputGroup>
                </div>
                <table>
                    <caption>Received Applications</caption>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>APPLICATION TYPE</th>
                            <th>APPLICATION ID</th>
                            <th style={{ width: "10%" }}>STATUS</th>
                            <th style={{ width: "35%" }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (searchData !== null) && (searchData?.length > 0 && searchData.map((application, id) => {
                                return <TableRow key={application.id} id={id + 1} application={application} />;
                            }))
                        }
                        {!searchData && data?.map((application, id) => {
                            return <TableRow key={application.id} id={id + 1} application={application} />;
                        })}
                    </tbody>
                </table>
                <div className={classes.cardHeader}>
                    <InputGroup>
                        <div className={classes.cardHeader}>
                            <label htmlFor="">Per Page</label>
                            <Select options={[{ name: "10" }, { name: "20" }, { name: 50 }]}></Select>
                        </div>
                        <InputGroup>
                            <Button varient={"solid"}>&lt; Prev</Button>
                            <Button varient={"solid"}>Next &gt; </Button>
                        </InputGroup>
                    </InputGroup>
                </div>
            </Card>
        </div>
    );
};


export default Applications;
