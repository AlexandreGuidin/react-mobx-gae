import React from "react"
import {FORM_STATUS} from "../../../utils/Enums";
import PropTypes from "prop-types";

const Select = ({options, feedback, status = FORM_STATUS.UNCHECKED, onchange}) => {

    const returnValue = (event) => {
        onchange({
            name: event.target.name,
            value: event.target.value
        })
    };

    return (
        <div className={"form-group"}>
            <select className={`custom-select ${status.FORM}`} onChange={returnValue}>
                {options.map((o, index) => {
                    return <option value={o.value} key={index}>{o.label}</option>
                })}
            </select>
            {(feedback && status !== FORM_STATUS.UNCHECKED) &&
            <div className={status.FEEDBACK}>{feedback}</div>
            }
        </div>
    )
};

Select.propTypes = {
    options: PropTypes.array.isRequired,
    feedback: PropTypes.string,
    status: PropTypes.object,
    onchange: PropTypes.func.isRequired
};

export default Select
