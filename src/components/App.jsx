import React from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import Home from "./home/Home";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import PageNotFound from "./commons/PageNotFound";
import PrivateRoute from "./commons/PrivateRoute";
import User from "./user/User";
import "../style/css/bootstrap.min.css"
import './App.css';

const Main = () => {
    return (
        <main className={"container"}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <PrivateRoute path={"/user"} component={User}/>
                <Route component={PageNotFound}/>
            </Switch>
        </main>
    )
};

class App extends React.Component {
    render() {
        return (
            <div className={"app"}>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(App);
