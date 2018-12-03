import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter} from "react-router-dom"
import * as serviceWorker from './serviceWorker';
import {Provider} from "mobx-react";
import "./style/css/bootstrap.min.css"

import userStore from "./stores/user-store"
import {isDev} from "./utils/environment-util";

const stores = {
    userStore
};

if (isDev) {
    window.state = stores;
}

class Index extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Provider {...stores}>
                    <App/>
                </Provider>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Index/>, document.getElementById('root'));
serviceWorker.unregister();