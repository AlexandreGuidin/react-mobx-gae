import React from "react"
import PropTypes from "prop-types";
import "./form.css"
import {validateSchema} from "../../../utils/Validation";


const Form = ({children, values, schema, handleSubmit, handleErrors}) => {

    const validate = (event) => {
        event.preventDefault();

        const errors = validateSchema(schema, values);
        if (errors) {
            handleErrors(errors)
        } else {
            handleSubmit(values)
        }
    };


    return (
        <form onSubmit={validate}>
            {children}
        </form>
    )
};

Form.propTypes = {
    values: PropTypes.object.isRequired,
    schema: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleErrors: PropTypes.func.isRequired
};

export default Form