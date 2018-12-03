import React from "react"
import {inject, observer} from "mobx-react";
import {USER_STORE} from "../../stores/user-store";

class User extends React.Component {
    render() {
        const {name} = this.props.userStore.user;

        return (
            <div>
                Welcome {name}
            </div>
        )
    }
}

export default inject(USER_STORE)(observer(User))