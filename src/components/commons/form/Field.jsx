import React from "react"
import PropTypes from "prop-types";
import {FORM_STATUS} from "../../../utils/Enums";


const Field = ({col, label, value, name, help = '', placeholder = '', onchange, checked, errors}) => {

    const returnValue = (event) => {
        onchange({
            name: event.target.name,
            value: event.target.value
        })
    };

    const error = errors ? errors[name] : undefined;
    const status = error ? FORM_STATUS.INVALID : (checked ? FORM_STATUS.VALID : FORM_STATUS.UNCHECKED);

    return (
        <div className={`${col}`}>
            <label>{label}</label>
            <input type={"text"} className={`form-control ${status}`} name={name} placeholder={placeholder} value={value} onChange={returnValue}/>

            {help &&
            <small className={"form-text text-muted"}>{help}</small>
            }

            {error &&
            <div className={"invalid-feedback"}>{error}</div>
            }
        </div>
    )
};

Field.propTypes = {
    col: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    feedback: PropTypes.string,
    help: PropTypes.string,
    placeholder: PropTypes.string,
    onchange: PropTypes.func.isRequired
};

export default Field