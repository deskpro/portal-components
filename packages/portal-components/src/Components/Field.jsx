import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Field as FormikField, getIn } from 'formik';
import newid from '@deskpro/js-utils/dist/newid';
import ErrorMessage from './ErrorMessage';

class Field extends React.Component {
  static propTypes = {
    name:        PropTypes.string.isRequired,
    label:       PropTypes.string,
    description: PropTypes.string,
    id:          PropTypes.string,
    children:    PropTypes.node
  };

  static defaultProps = {
    label:       '',
    description: '',
    id:          null,
    children:    null,
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
      ...props
    } = this.props;

    return (
      <FormikField
        id={this.id}
        name={name}
        type={this.type}
        className="dp-pc_input"
        {...props}
      >
        {children}
      </FormikField>
    );
  };

  renderDescription = () => {
    const {
      description
    } = this.props;

    return (
      <span className="dp-pc_description">{description}</span>
    );
  };

  renderLabel = () => {
    const {
      label,
    } = this.props;
    const htmlFor = this.id;
    /* eslint-disable jsx-a11y/label-has-for */
    return (
      <label className="dp-pc_label" htmlFor={htmlFor}>
        {label}
      </label>
    );
    /* eslint-enable jsx-a11y/label-has-for */
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
          const value = getIn(form.values, name);
          return (
            <div className={classNames('dp-pc_field', { 'dp-pc_error': touch && error, 'dp-pc_empty': !value })}>
              {this.renderField(form)}
              <span className="indicator" />
              { touch && error ? <ErrorMessage name={name} form={form} /> : this.renderDescription() }
              {this.renderLabel()}
            </div>
          );
        }}
      />
    );
  }
}

export default Field;
