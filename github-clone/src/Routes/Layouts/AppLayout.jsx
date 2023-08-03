import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import { Outlet } from 'react-router-dom'
const AppLayout = () => {
    return (
        <>
            <Outlet />
        </>
    )
}

export default AppLayout