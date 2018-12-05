import React from "react"
import PropTypes from "prop-types";

const Checkbox = ({show}) => {
    return (
        <div className="form-group">
            <div className="form-check">
                <input className="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required/>
                <label className="form-check-label" htmlFor="invalidCheck3">
                    Agree to terms and conditions
                </label>
                <div className="invalid-feedback">
                    You must agree before submitting.
                </div>
            </div>
        </div>
    )
};

Checkbox.propTypes = {
    show: PropTypes.string.isRequired
};

export default Checkbox