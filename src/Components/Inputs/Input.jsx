import React from "react";
import { Field } from 'formik';
import PropTypes from "prop-types";

class Input extends React.Component
{
  static propTypes = {
    error:    PropTypes.object,
    children: PropTypes.node
  };

  getError = () => {
    const { touched, errors, name } = this.props;
    if (touched[name] && errors[name]) {
      return errors[name];
    }
    return null;
  };

  render() {
    const {
      children,
      errors,
      touched,
      ...props
    } = this.props;
    return (
      <div>
        <span className="dp-pc_error">
          {this.getError()}
        </span>
        <Field type={this.type} {...props}>
          {children}
        </Field>
      </div>
    )
  }
}

export default Input;