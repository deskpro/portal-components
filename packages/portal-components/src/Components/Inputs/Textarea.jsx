import React from 'react';
import { Field as FormikField } from 'formik';
import Field from '../Field';

class Textarea extends Field {
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
      <FormikField name={name} component="textarea" {...props}>
        {children}
      </FormikField>
    );
  };
}

export default Textarea;
