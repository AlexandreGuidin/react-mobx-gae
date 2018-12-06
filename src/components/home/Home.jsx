import React from "react"
import {inject} from "mobx-react";
import {USER_STORE} from "../../stores/user-store";
import Form from "../commons/form/Form";
import Field from "../commons/form/Field";
import Button from "../commons/form/Button";
import {userSchema} from "../../utils/schemas/UserSchema";

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            checked: false,
            errors: undefined,
            submitting: false,
            values: {
                name: '',
                lastName: ''
            }
        }
    }

    handleChange = (input) => {
        const {values, errors} = this.state;
        values[input.name] = input.value;

        if (errors && errors[input.name]) {
            delete errors[input.name];
        }

        this.setState({values: values, errors: errors, checked: false});
    };

    handleSubmit = (values) => {
        console.log(values)
    };

    handleErrors = (errors) => {
        this.setState({errors: errors, checked: true});
    };

    render() {
        const {name, lastName} = this.state.values;

        return (
            <div className={""}>
                <div className={"row"}>
                    <div className={"col-12"}>
                        <h2>Home</h2>
                    </div>
                </div>


                <Form handleErrors={this.handleErrors} handleSubmit={this.handleSubmit} values={this.state.values} schema={userSchema}>
                    <Field value={name}
                           col={'col-3'}
                           name={'name'}
                           label={'Name'}
                           placeholder={"PLACEHOLDER HERE"}
                           errors={this.state.errors}
                           checked={this.state.checked}
                           feedback={"Wrong"}
                           onchange={this.handleChange}/>

                    <Field value={lastName}
                           col={'col-3'}
                           name={'lastName'}
                           label={'Last Name'}
                           placeholder={"PLACEHOLDER HERE"}
                           errors={this.state.errors}
                           checked={this.state.checked}
                           feedback={"Wrong"}
                           onchange={this.handleChange}/>

                    <Button label={"SUBMIT"}/>
                </Form>


            </div>
        )
    }
}

export default inject(USER_STORE)(Home)