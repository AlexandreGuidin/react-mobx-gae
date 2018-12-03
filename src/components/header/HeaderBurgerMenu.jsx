import React from "react"

const HeaderBurgerMenu = ({collapsed, toggle}) => {
    return (
        <button className={`navbar-toggler ${collapsed ? 'collapsed' : ''}`} onClick={toggle}>
            <span className="navbar-toggler-icon"/>
        </button>
    )
};

export default HeaderBurgerMenu
