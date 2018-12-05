import React from "react"
import {FORM_STATUS} from "../../../utils/enums";
import PropTypes from "prop-types";

const Select = ({options, feedback, status = FORM_STATUS.UNCHECKED, onchange}) => {
    return (
        <div className={"form-group"}>
            <select className={"custom-select"} onChange={onchange}>
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
