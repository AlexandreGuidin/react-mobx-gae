import React from "react"
import {FORM_STATUS} from "../../../utils/Enums";
import PropTypes from "prop-types";

const Select = ({value, name, options, onchange, errors, checked}) => {

    const returnValue = (event) => {
        onchange({
            name: event.target.name,
            value: event.target.value
        })
    };

    const error = errors ? errors[name] : undefined;
    const status = error ? FORM_STATUS.INVALID : (checked ? FORM_STATUS.VALID : FORM_STATUS.UNCHECKED);

    return (
        <div className={"form-group"}>
            <select className={`custom-select ${status}`} onChange={returnValue}>
                {options.map((o, index) => {
                    return <option value={o.value} key={index}>{o.label}</option>
                })}
            </select>

            {error &&
            <div className={"invalid-feedback"}>{error}</div>
            }
        </div>
    )
};

Select.propTypes = {
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onchange: PropTypes.func.isRequired,
    errors: PropTypes.object,
    checked: PropTypes.bool
};

export default Select
