import React from "react"

const HeaderTitle = ({text, className}) => {
    return (
        <a className={`navbar-brand ${className}`} href="#">{text}</a>
    )
};

export default HeaderTitle
