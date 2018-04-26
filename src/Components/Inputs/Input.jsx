import React from 'react';
import classNames from 'classnames';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import ErrorMessage from '../ErrorMessage';

class Input extends React.Component {
  static propTypes = {
    errors:   PropTypes.object,
    name:     PropTypes.string.isRequired,
    touched:  PropTypes.object,
    children: PropTypes.node
  };

  static defaultProps = {
    errors:   {},
    touched:  {},
    children: null,
  };

  renderField = () => {
    const {
      name,
      children,
      ...props
    } = this.props;
    return (
      <Field name={name} type={this.type} {...props}>
        {children}
      </Field>
    );
  };

  render() {
    const {
      errors,
      touched,
      name,
    } = this.props;
    return (
      <div className={classNames('dp-pc_field', { 'dp-pc_error': touched[name] && errors[name] })}>
        <ErrorMessage name={name} />
        {this.renderField()}
      </div>
    );
  }
}

export default Input;
