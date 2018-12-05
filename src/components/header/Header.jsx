import React from "react"
import HeaderTitle from "./HeaderTitle";
import HeaderBurgerMenu from "./HeaderBurgerMenu";
import HeaderItemList from "./HeaderItemList";

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            collapsed: false
        }
    }

    toggle = () => {
        this.setState({collapsed: !this.state.collapsed})
    };

    render() {
        const {collapsed} = this.state;

        return (
            <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
                <HeaderTitle text={"React-Mobx-Gae"} link={"/"}/>
                <HeaderBurgerMenu collapsed={collapsed} toggle={this.toggle}/>
                <HeaderItemList collapsed={collapsed}/>
            </nav>
        )
    }
}

export default Header