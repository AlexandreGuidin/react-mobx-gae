import React from "react"
import HeaderItem from "./HeaderItem";

const HeaderItemList = ({collapsed}) => {
    return (
        <div className={`navbar-collapse ${collapsed ? '' : 'collapse'}`}>
            <ul className="navbar-nav mr-auto">
                <HeaderItem text={'Home'}/>
                <HeaderItem text={'Link'}/>
                <HeaderItem text={'Disabled'} disabled={true}/>
            </ul>
        </div>
    )
};

export default HeaderItemList
