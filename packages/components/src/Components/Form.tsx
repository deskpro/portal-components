import * as React from 'react';
import { Form as FormikForm } from 'formik';
import classNames from 'classnames';

interface IProps {
  className?: string;
  showHover?: boolean;
  children:   React.ReactNode;
}

const Form = ({
  className = '',
  showHover = true,
  ...props
}: IProps) => (
  <FormikForm
    className={classNames('dp-pc_form', className, { 'show-hover': showHover })}
    {...props}
  />);



export default Form;
