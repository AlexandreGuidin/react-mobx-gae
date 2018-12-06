import React from "react"
import {inject} from "mobx-react";
import {USER_STORE} from "../../stores/user-store";
import Form from "../commons/form/Form";
import {userSchema} from "../../utils/schemas/UserSchema";
import {BTN_OUTLINE_STYLE, FORM_INPUT_TYPE} from "../../utils/Enums";

class Home extends React.Component {


    render() {

        const fields = [
            {
                type: FORM_INPUT_TYPE.INPUT,
                name: 'name',
                label: 'Name',
                placeholder: 'Placeholder Here'
            },
            {
                type: FORM_INPUT_TYPE.INPUT,
                name: 'lastName',
                label: 'Last Name',
                placeholder: 'Placeholder Here'
            },
            {
                type: FORM_INPUT_TYPE.SELECT,
                name: 'number',
                label: 'select a number',
                options: [{
                    key: 1,
                    label: '1'
                }, {
                    key: 2,
                    label: '2'
                }, {
                    key: 3,
                    label: '3'
                }
                ]
            },
            {
                type: FORM_INPUT_TYPE.CHECKBOX,
                name: 'accept',
                label: 'accept this check',
            }
        ];

        const actions = [
            {
                label: 'SUBMIT!'
            },
            {
                label: 'CANCEL!',
                style: BTN_OUTLINE_STYLE.SECONDARY
            }
        ];

        return (
            <div className={""}>
                <div className={"row"}>
                    <div className={"col-12"}>
                        <h2>Home</h2>
                    </div>
                </div>

                <Form success={() => {
                }} schema={userSchema} fields={fields} actions={actions}/>

            </div>
        )
    }
}

export default inject(USER_STORE)(Home)