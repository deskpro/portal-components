import React from 'react';
import { Form as FormikForm } from 'formik';

const Form = ({
  ...props
}) => {
  return <FormikForm {...props} />
};

export default Form;