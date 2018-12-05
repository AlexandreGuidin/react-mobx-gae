import React from "react"
import PropTypes from "prop-types";
import {FORM_STATUS} from "../../../utils/enums";

const Radio = ({value, name, label, feedback, status = FORM_STATUS.UNCHECKED, onchange}) => {
    return (
        <div className={"custom-control custom-radio"}>
            <input className={`custom-control-input ${status.FORM}`} type={"radio"} value={value} name={name} id={name} onChange={onchange}/>
            <label className={"custom-control-label"} htmlFor={name}>{label}</label>

            {(feedback && status !== FORM_STATUS.UNCHECKED) &&
            <div className={status.FEEDBACK}>{feedback}</div>
            }
        </div>
    )
};

Radio.propTypes = {
    value: PropTypes.string.isRequired,
    feedback: PropTypes.string,
    status: PropTypes.object,
    onchange: PropTypes.func.isRequired
};

export default Radio

