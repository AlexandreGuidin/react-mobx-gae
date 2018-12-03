import React from "react"

const HeaderItem = ({className,text}) => {
    return (
        <li className={`nav-item  ${className}`}>
            <a className="nav-link" href="#">{text}</a>
        </li>
    )
};

export default HeaderItem
