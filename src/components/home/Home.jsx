import React from "react"
import {Link} from "react-router-dom";
import {inject} from "mobx-react";
import {USER_STORE} from "../../stores/user-store";
import Form from "../commons/form/Form";
import Field from "../commons/form/Field";
import {BTN_OUTLINE_STYLE, BTN_STYLE, FORM_STATUS} from "../../utils/enums";
import Checkbox from "../commons/form/Checkbox";
import Select from "../commons/form/Select";
import Radio from "../commons/form/Radio";
import Button from "../commons/form/Button";
import {FormHoc} from "../commons/form/FormHoc";

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

        const options = [{
            label: "option1",
            value: "option1"
        }, {
            label: "option2",
            value: "option2"
        }, {
            label: "option3",
            value: "option3"
        }];



        return (
            <div className={""}>
                <div className={"row"}>
                    <div className={"col-12"}>
                        <h2>Home</h2>
                    </div>
                </div>


                <Form>
                    <Field value={''}
                           col={'col-3'}
                           label={'Name'}
                           placeholder={"PLACEHOLDER HERE"}
                           status={FORM_STATUS.INVALID}
                           feedback={"Wrong"}
                           onchange={() => {
                           }}/>
                </Form>



            </div>
        )
    }
}

export default inject(USER_STORE)(Home)