import React from 'react';
import PropTypes from 'prop-types';

export const FormHoc = (FormParent) => {

    return class FormContainer extends React.Component {
        render() {
            const {children} = this.props;
            return <FormParent>
                {children}
            </FormParent>
        }

    }

};

FormHoc.propTypes = {
};
