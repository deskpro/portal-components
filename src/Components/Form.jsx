import React from 'react';
import { Form as FormikForm } from 'formik';

const Form = ({
  ...props
}) => <FormikForm {...props} />;

export default Form;
