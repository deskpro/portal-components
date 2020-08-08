import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Field as FormikField, getIn } from 'formik';
import newid from '@deskpro/js-utils/dist/newid';
import { deepMerge, objectKeyFilter } from '@deskpro/js-utils/dist/objects';
import ErrorMessage from './ErrorMessage';

const I18N = {
  required: 'Required',
};

class Field extends React.Component {
  static propTypes = {
    name:        PropTypes.string.isRequired,
    errorsName:  PropTypes.string,
    label:       PropTypes.string,
    description: PropTypes.string,
    id:          PropTypes.string,
    className:   PropTypes.string,
    fClassName:  PropTypes.string,
    children:    PropTypes.node,
    required:    PropTypes.bool,
    i18n:        PropTypes.object
  };

  static defaultProps = {
    label:       '',
    errorsName:  '',
    description: '',
    className:   '',
    fClassName:  '',
    id:          null,
    children:    null,
    required:    false,
    i18n:        {}
  };

  constructor(props) {
    super(props);

    this.i18n = deepMerge(I18N, props.i18n);
    this.id = props.id;
    this.className = '';
    if (!this.id) {
      this.id = newid('field_');
    }
    this.renderField = this.renderField.bind(this);
  }

  validate = (value) => {
    let error;
    const { required } = this.props;
    if (!value && required) {
      error = 'Required';
    }
    return error;
  };

  renderField() {
    const {
      name, children, className, required, ...props
    } = this.props;

    return (
      <FormikField
        id={this.id}
        name={name}
        type={this.type}
        className={classNames('dp-pc_input', className)}
        required={required}
        {...objectKeyFilter(props, Field.propTypes)}
      >
        {children}
      </FormikField>
    );
  }

  renderDescription = () => {
    const { description } = this.props;

    if (description) {
      return <span className="dp-pc_description">{description}</span>;
    }
    return null;
  };

  renderLabel = () => {
    const { label } = this.props;
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
    const { name, errorsName, fClassName } = this.props;
    return (
      <FormikField
        name={name}
        validate={this.validate}
        render={({ form }) => {
          let error;
          let searchName = errorsName;
          if (errorsName) {
            error = getIn(form.errors, errorsName.split('.'));
          }
          if (!error || typeof error !== 'string') {
            error = getIn(form.errors, name.split('.'));
            searchName = name;
          }
          const touch = getIn(form.touched, name.split('.'));
          return (
            <div
              className={classNames('dp-pc_field', this.className, fClassName, { 'dp-pc_error': touch && error })}
            >
              {this.type !== 'hidden' ? this.renderLabel() : null}
              {this.renderField(form)}
              {
                touch && error && typeof error === 'string'
                  ? <ErrorMessage name={searchName} form={form} touchName={name} />
                  : this.renderDescription()
              }
            </div>
          );
        }}
      />
    );
  }
}

export default Field;
