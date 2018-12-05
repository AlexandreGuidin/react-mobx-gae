import React from "react"
import HeaderItem from "./HeaderItem";

const HeaderItemList = ({collapsed}) => {
    return (
        <div className={`navbar-collapse ${collapsed ? '' : 'collapse'}`}>
            <ul className="navbar-nav mr-auto">
                <HeaderItem text={'Home'} link={"/"}/>
                <HeaderItem text={'Link'} link={"/"}/>
                <HeaderItem text={'Disabled'} disabled={true} link={"/"}/>
            </ul>
        </div>
    )
};

export default HeaderItemList
