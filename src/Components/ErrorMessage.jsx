import React from 'react';
import PropTypes from 'prop-types';
import { Field, getIn } from 'formik';

const ErrorMessage = ({ name }) => (
  <Field
    name={name}
    render={({ form }) => {
      const error = getIn(form.errors, name);
      const touch = getIn(form.touched, name);
      return touch && error ? <span className="dp-pc_error_message">{error}</span> : null;
    }}
  />
);

ErrorMessage.propTypes = {
  name: PropTypes.string.isRequired
};

export default ErrorMessage;
