import React from "react"
import PropTypes from "prop-types";
import {FORM_STATUS} from "../../../utils/enums";

const Checkbox = ({value, name, label, feedback, status = FORM_STATUS.UNCHECKED, onchange}) => {
    return (
        <div className={"custom-control custom-checkbox"}>
            <input className={`custom-control-input`} type={"checkbox"} value={value} name={name} id={name} onChange={onchange}/>
            <label className={"custom-control-label"} htmlFor={name}>{label}</label>

            {(feedback && status !== FORM_STATUS.UNCHECKED) &&
            <div className={status.FEEDBACK}>{feedback}</div>
            }
        </div>
    )
};

Checkbox.propTypes = {
    value: PropTypes.string.isRequired,
    feedback: PropTypes.string,
    status: PropTypes.object,
    onchange: PropTypes.func.isRequired
};

export default Checkbox