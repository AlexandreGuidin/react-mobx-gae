import React from "react"
import {Link} from "react-router-dom";

const HeaderItem = ({className, text, link}) => {
    return (
        <li className={`nav-item  ${className}`}>
            <Link to={link} className={"nav-link"}>{text}</Link>
        </li>
    )
};

export default HeaderItem
