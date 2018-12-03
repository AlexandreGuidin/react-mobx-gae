import React from "react"
import {Link} from "react-router-dom";
import {inject} from "mobx-react";
import {USER_STORE} from "../../stores/user-store";

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            logged: false
        }
    }

    handleChange = (event) => {
        this.setState({name: event.target.value});
    };

    handleSubmit = (event) => {
        this.props.userStore.user = {name: this.state.name};
        this.setState({logged: true, name: ''});
        event.preventDefault();
    };

    render() {
        const {name, logged} = this.state;

        return (
            <div>
                <h2>Home</h2>
                <Link to={"/user"}><h3>Logged Area</h3></Link>

                <form onSubmit={this.handleSubmit}>
                    <input type={"text"} placeholder={"USER NAME"} onChange={this.handleChange} value={name}/>
                    <input type={"submit"} value={"LogIN"}/>
                </form>

                {logged &&
                <span>LOGGED!</span>
                }
            </div>
        )
    }
}

export default inject(USER_STORE)(Home)