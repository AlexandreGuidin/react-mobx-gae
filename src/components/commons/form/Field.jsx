import React from "react"
import PropTypes from "prop-types";
import {FORM_STATUS} from "../../../utils/enums";


const Field = ({col, label, value, name, feedback = '', help = '', placeholder = '', status = FORM_STATUS.UNCHECKED, onchange}) => {
    return (
        <div className={`${col}`}>
            <label>{label}</label>
            <input type={"text"} className={`form-control ${status.FORM}`} placeholder={placeholder} value={value} onChange={onchange}/>

            {help &&
            <small className="form-text text-muted">{help}</small>
            }

            {(feedback && status !== FORM_STATUS.UNCHECKED) &&
            <div className={status.FEEDBACK}>{feedback}</div>
            }
        </div>
    )
};

Field.propTypes = {
    col: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    feedback: PropTypes.string,
    help: PropTypes.string,
    placeholder: PropTypes.string,
    status: PropTypes.object,
    onchange: PropTypes.func.isRequired
};

export default Field