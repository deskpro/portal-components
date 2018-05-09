import React from 'react';
import PropTypes from 'prop-types';
import { Form as FormikForm } from 'formik';
import classNames from 'classnames';

const Form = ({
  className,
  ...props
}) => <FormikForm className={classNames('dp-pc_form', className)} {...props} />;

Form.propTypes = {
  className: PropTypes.string,
};

Form.defaultProps = {
  className: ''
};

export default Form;
