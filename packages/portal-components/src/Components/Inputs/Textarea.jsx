import React from 'react';
import { Field } from 'formik';
import Input from './Input';

class Textarea extends Input {
  constructor(props) {
    super(props);
    this.type = 'textarea';
  }

  renderField = () => {
    const {
      name,
      children,
      ...props
    } = this.props;
    return (
      <Field name={name} component="textarea" {...props}>
        {children}
      </Field>
    );
  };
}

export default Textarea;
