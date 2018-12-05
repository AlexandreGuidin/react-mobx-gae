import React from "react"
import PropTypes from "prop-types";
import "./form.css"

const Form = ({children, values, schema, className, success, handleErrors}) => {

    const validate = (event) => {
        const {success} = this.props;
        event.preventDefault();


        success();
    };


    return (
        <form onSubmit={validate} className={className}>
            {children}
        </form>
    )
};

Form.propTypes = {
};

export default Form