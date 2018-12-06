import React from "react"
import {BTN_STYLE} from "../../../utils/Enums";
import Field from "./Field";
import PropTypes from "prop-types";

const Button = ({label, style = BTN_STYLE.PRIMARY, size = ''}) => {
    return (
        <button type="submit" className={`${style} ${size ? size : ''} w-100`}>{label}</button>
    )
};

Field.propTypes = {
    label: PropTypes.string.isRequired,
    style: PropTypes.string,
    size: PropTypes.string
};

export default Button
