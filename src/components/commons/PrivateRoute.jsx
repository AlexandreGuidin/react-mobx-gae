import React from "react"
import {Redirect, Route} from "react-router-dom";
import UserStore from "../../stores/user-store"

const PrivateRoute = ({component: Component, ...rest}) => {
    const isLogged = UserStore.isLogged();
    const render = (props) => isLogged ? <Component {...props}/> : <Redirect to={{pathname: '/', state: {from: props.location}}}/>;

    return (
        <Route {...rest} render={props => render(props)}/>
    );
};

export default PrivateRoute