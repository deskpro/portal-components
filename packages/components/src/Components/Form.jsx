import React from 'react';
import PropTypes from 'prop-types';
import { Form as FormikForm } from 'formik';
import classNames from 'classnames';

const Form = ({
  className,
  showHover,
  ...props
}) => (
  <FormikForm
    className={classNames('dp-pc_form', className, { 'show-hover': showHover })}
    {...props}
  />);

Form.propTypes = {
  className: PropTypes.string,
  showHover: PropTypes.bool,
};

Form.defaultProps = {
  className: '',
  showHover: true,
};

export default Form;
