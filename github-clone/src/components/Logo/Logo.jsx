import React from 'react'
import { RxGithubLogo } from "react-icons/rx"
import "./Logo.css"
import { Link } from 'react-router-dom'
const Logo = () => {
    return (
        <Link to={"/"}>
            <RxGithubLogo className='logo' />
        </Link>
    )
}

export default Logo