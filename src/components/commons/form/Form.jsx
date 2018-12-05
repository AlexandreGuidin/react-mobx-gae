import React from "react"
import PropTypes from "prop-types";

class Form extends React.Component {

    render() {
        const {children} = this.props;

        return (
            <form>
                {children}
            </form>
        )
    }
}

Form.propTypes = {};

export default Form