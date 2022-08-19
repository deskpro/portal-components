import * as React from 'react';
import { FormikProps, getIn } from 'formik';

interface ErrorMessageProps {
  name: string;
  touchName?: string;
  form: FormikProps<any>;
}

const ErrorMessage = ({ name, touchName = '', form }: ErrorMessageProps) => {
  const error = getIn(form.errors, name.split('.'));
  const touch = getIn(form.touched, (touchName || name).split('.'));

  return touch && error ? <span className="dp-pc_error_message">{error}</span> : null;
};


export default ErrorMessage;
