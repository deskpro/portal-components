import React from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';

const ErrorMessage = ({ name, touchName, form }) => {
  const error = getIn(form.errors, name.split('.'));
  const touch = getIn(form.touched, (touchName || name).split('.'));

  return touch && error ? <span className="dp-pc_error_message">{error}</span> : null;
};

ErrorMessage.propTypes = {
  name:      PropTypes.string.isRequired,
  touchName: PropTypes.string,
  form:      PropTypes.object.isRequired,
};

ErrorMessage.defaultProps = {
  touchName: '',
};


export default ErrorMessage;
