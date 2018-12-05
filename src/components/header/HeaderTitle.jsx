import React from "react"
import {Link} from "react-router-dom";

const HeaderTitle = ({text, className, link}) => {
    return (
        <Link to={link} className={`navbar-brand ${className}`}>{text}</Link>
    )
};

export default HeaderTitle
