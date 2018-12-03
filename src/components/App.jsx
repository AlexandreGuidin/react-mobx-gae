import React from 'react';
import './App.css';
import {Route, Switch, withRouter} from "react-router-dom";
import Home from "./home/Home";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import PageNotFound from "./commons/PageNotFound";
import PrivateRoute from "./commons/PrivateRoute";
import User from "./user/User";

class App extends React.Component {
    render() {
        return (
            <div className={"container-fluid"}>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <PrivateRoute path={"/user"} component={User}/>
                    <Route component={PageNotFound}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(App);
