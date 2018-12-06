import React from "react"
import PropTypes from "prop-types";
import {FORM_STATUS} from "../../../utils/Enums";

const Checkbox = ({value, name, label, onchange, errors, checked}) => {

    const returnValue = (event) => {
        onchange({
            name: event.target.name,
            value: event.target.checked
        })
    };

    const error = errors ? errors[name] : undefined;
    const status = error ? FORM_STATUS.INVALID : (checked ? FORM_STATUS.VALID : FORM_STATUS.UNCHECKED);

    return (
        <div className={"custom-control custom-checkbox"}>
            <input className={`custom-control-input ${status}`} type={"checkbox"} value={value} name={name} id={name} onChange={returnValue}/>
            <label className={"custom-control-label"} htmlFor={name}>{label}</label>

            {error &&
            <div className={"invalid-feedback"}>{error}</div>
            }
        </div>
    )
};

Checkbox.propTypes = {
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onchange: PropTypes.func.isRequired,
    errors: PropTypes.object,
    checked: PropTypes.bool
};

export default Checkbox