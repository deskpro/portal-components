import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Field as FormikField, getIn } from 'formik';
import newid from '@deskpro/js-utils/dist/newid';
import ErrorMessage from './ErrorMessage';

class Field extends React.Component {
  static propTypes = {
    name:     PropTypes.string.isRequired,
    label:    PropTypes.string,
    id:       PropTypes.string,
    children: PropTypes.node
  };

  static defaultProps = {
    label:    '',
    id:       null,
    children: null,
  };

  constructor(props) {
    super(props);

    this.id = props.id;
    if (!this.id) {
      this.id = newid('field_');
    }
  }

  renderField = () => {
    const {
      name,
      children,
      id,
      ...props
    } = this.props;

    return (
      <FormikField
        id={this.id}
        name={name}
        type={this.type}
        {...props}
      >
        {children}
      </FormikField>
    );
  };

  render() {
    const {
      name,
      label
    } = this.props;
    return (
      <FormikField
        name={name}
        render={({ form }) => {
          const error = getIn(form.errors, name);
          const touch = getIn(form.touched, name);
          return (
            <div className={classNames('dp-pc_field', { 'dp-pc_error': touch && error })}>
              <label
                htmlFor={this.id}
              >
                {label}
              </label>
              <ErrorMessage name={name} form={form} />
              {this.renderField(form)}
            </div>
          );
        }}
      />
    );
  }
}

export default Field;
