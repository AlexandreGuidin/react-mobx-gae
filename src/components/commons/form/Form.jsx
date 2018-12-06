import React from "react"
import PropTypes from "prop-types";
import "./form.css"
import {validateSchema} from "../../../utils/Validation";
import Field from "./Field";
import Button from "./Button";
import {FORM_INPUT_TYPE} from "../../../utils/Enums";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import Select from "./Select";


class Form extends React.Component {

    constructor(props) {
        super(props);

        const values = {};
        this.props.fields.forEach(f => values[f.name] = '');

        this.state = {
            checked: false,
            errors: undefined,
            submitting: false,
            values: values
        };
    }

    action = (values) => {
        const {success} = this.props;
        // this.setState({submitting: true});

        success(values);
    };


    handleSubmit = (event) => {
        const {schema} = this.props;
        const {values} = this.state;
        event.preventDefault();

        const errors = validateSchema(schema, values);
        this.handleErrors(errors);

        if (!errors) {
            this.action(values)
        }
    };

    handleChange = (input) => {
        const {values, errors} = this.state;
        values[input.name] = input.value;

        if (errors && errors[input.name]) {
            delete errors[input.name];
        }

        this.setState({values: values, errors: errors, checked: false});
    };

    handleErrors = (errors) => {
        this.setState({errors: errors, checked: true});
    };

    createInput = (metadata, index) => {
        return <Field value={this.state.values[metadata.name]}
                      col={'col-12'}
                      name={metadata.name}
                      label={metadata.label}
                      placeholder={metadata.placeholder}
                      errors={this.state.errors}
                      checked={this.state.checked}
                      onchange={this.handleChange}
                      key={index}/>
    };

    createCheckbox = (metadata, index) => {
        return <Checkbox label={metadata.label}
                         value={this.state.values[metadata.name]}
                         onchange={this.handleChange}
                         name={metadata.name}
                         errors={this.state.errors}
                         checked={this.state.checked}
                         key={index}/>
    };

    createRadio = (metadata, index) => {
        return <Radio label={metadata.label}
                      value={this.state.values[metadata.name]}
                      onchange={this.handleChange}
                      name={metadata.name}
                      errors={this.state.errors}
                      checked={this.state.checked}
                      key={index}/>
    };

    createSelect = (metadata, index) => {
        return <Select label={metadata.label}
                       value={this.state.values[metadata.name]}
                       onchange={this.handleChange}
                       name={metadata.name}
                       options={metadata.options}
                       errors={this.state.errors}
                       checked={this.state.checked}
                       key={index}/>
    };

    createField = (metadata, index) => {
        switch (metadata.type) {
            case FORM_INPUT_TYPE.INPUT:
                return this.createInput(metadata, index);
            case FORM_INPUT_TYPE.CHECKBOX:
                return this.createCheckbox(metadata, index);
            case FORM_INPUT_TYPE.RADIO:
                return this.createRadio(metadata, index);
            case FORM_INPUT_TYPE.SELECT:
                return this.createSelect(metadata, index);
            default:
                return null;
        }
    };

    createAction = (metadata, index) => {
        return <Button label={metadata.label} style={metadata.style} key={index}/>
    };

    render() {
        const {fields, actions, className} = this.props;

        return (
            <form onSubmit={this.handleSubmit} className={className}>
                {fields.map(this.createField)}
                {actions.map(this.createAction)}
            </form>
        )
    }
}

Form.propTypes = {
    className: PropTypes.string,
    schema: PropTypes.object.isRequired,
    success: PropTypes.func.isRequired,
    fields: PropTypes.array,
    actions: PropTypes.array
};

export default Form