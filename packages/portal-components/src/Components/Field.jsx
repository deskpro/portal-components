import React from 'react';
import classNames from 'classnames';
import { Field as FormikField, getIn } from 'formik';
import PropTypes from 'prop-types';
import ErrorMessage from './ErrorMessage';

class Field extends React.Component {
  static propTypes = {
    name:     PropTypes.string.isRequired,
    children: PropTypes.node
  };

  static defaultProps = {
    children: null,
  };

  renderField = () => {
    const {
      name,
      children,
      ...props
    } = this.props;

    return (
      <FormikField name={name} type={this.type} {...props}>
        {children}
      </FormikField>
    );
  };

  render() {
    const {
      name,
    } = this.props;
    return (
      <FormikField
        name={name}
        render={({ form }) => {
          const error = getIn(form.errors, name);
          const touch = getIn(form.touched, name);
          return (
            <div className={classNames('dp-pc_field', { 'dp-pc_error': touch && error })}>
              <ErrorMessage name={name} />
              {this.renderField(form)}
            </div>
          );
        }}
      />
    );
  }
}

export default Field;
