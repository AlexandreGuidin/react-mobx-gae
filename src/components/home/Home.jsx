import React from "react"
import {Link} from "react-router-dom";
import {inject} from "mobx-react";
import {USER_STORE} from "../../stores/user-store";
import Form from "../commons/form/Form";
import Field from "../commons/form/Field";
import {FORM_STATUS} from "../../utils/enums";
import Checkbox from "../commons/form/Checkbox";
import Select from "../commons/form/Select";

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

                <div className={"row"}>
                    <div className={"col-12"}>
                        <Link to={"/user"}><h3>Logged Area</h3></Link>
                    </div>
                </div>

                <div className={"row"}>
                    <div className={"col-12"}>
                        <form onSubmit={this.handleSubmit}>
                            <input type={"text"} placeholder={"USER NAME"} onChange={this.handleChange} value={name}/>
                            <input type={"submit"} value={"LogIN"}/>
                        </form>
                    </div>
                </div>

                <Form>
                    <Field value={''}
                           col={'col-3'}
                           label={'Name'}
                           placeholder={"PLACEHOLDER HERE"}
                           status={FORM_STATUS.INVALID}
                           feedback={"Wrong"}
                    onchange={() => {}}/>

                    <Checkbox value={"yes"} feedback={"wrong"} label={"Want to continue"} name={"accept"} status={FORM_STATUS.INVALID}onchange={() => {}}/>


                    <Select status={FORM_STATUS.INVALID} feedback={"teste"} options={options}onchange={() => {}}/>


                    <div className="custom-control custom-radio">
                        <input type="radio" className="custom-control-input" id="customControlValidation2" name="radio-stacked" required/>
                        <label className="custom-control-label" htmlFor="customControlValidation2">Toggle this custom radio</label>
                    </div>
                    <div className="custom-control custom-radio mb-3">
                        <input type="radio" className="custom-control-input" id="customControlValidation3" name="radio-stacked" required/>
                        <label className="custom-control-label" htmlFor="customControlValidation3">Or toggle this other custom radio</label>
                        <div className="invalid-feedback">More example invalid feedback text</div>
                    </div>
                </Form>

                {logged &&
                <div className={"row"}>
                    <div className={"col-12"}>
                        <span>LOGGED!</span>
                    </div>
                </div>
                }
            </div>
        )
    }
}

export default inject(USER_STORE)(Home)