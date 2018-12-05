import React from "react"
import PropTypes from "prop-types";
import {FORM_STATUS} from "../../../utils/enums";


const Field = ({col, label, value, name, feedbackMessage = '', help = '', placeholder = '', type = "text", status = FORM_STATUS.UNCHECKED}) => {
    return (
        <div className={`${col}`}>
            <label>{label}</label>
            <input type={type} className={`form-control ${status.FORM}`} placeholder={placeholder} value={value}/>

            {help &&
            <small className="form-text text-muted">{help}</small>
            }

            {(feedbackMessage && status !== FORM_STATUS.UNCHECKED) &&
            <div className={status.FEEDBACK}>{feedbackMessage}</div>
            }
        </div>
    )
};

Field.propTypes = {
    col: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    feedbackMessage: PropTypes.string,
    help: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    status: PropTypes.string
};

export default Field