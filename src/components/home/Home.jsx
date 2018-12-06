import React from "react"
import {inject} from "mobx-react";
import {USER_STORE} from "../../stores/user-store";
import Form from "../commons/form/Form";
import Field from "../commons/form/Field";
import {FORM_STATUS} from "../../utils/Enums";
import Button from "../commons/form/Button";
import {userSchema} from "../../utils/schemas/UserSchema";

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            errors: undefined,
            values: {
                name: '',
                lastName: ''
            }
        }
    }

    handleChange = (value) => {
        const {values} = this.state;
        values[value.name] = value.value;
        this.setState(values);
    };

    handleSubmit = (values) => {
        console.log(values)
    };

    handleErrors = (errors) => {
        console.log(errors)
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
                           status={FORM_STATUS.UNCHECKED}
                           feedback={"Wrong"}
                           onchange={this.handleChange}/>

                    <Field value={lastName}
                           col={'col-3'}
                           name={'lastName'}
                           label={'Last Name'}
                           placeholder={"PLACEHOLDER HERE"}
                           status={FORM_STATUS.UNCHECKED}
                           feedback={"Wrong"}
                           onchange={this.handleChange}/>

                    <Button label={"SUBMIT"}/>
                </Form>


            </div>
        )
    }
}

export default inject(USER_STORE)(Home)