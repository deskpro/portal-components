import * as React from 'react';
import classNames from 'classnames';
import { Field as FormikField, FormikProps, getIn } from 'formik';
import newid from '@deskpro/js-utils/dist/newid';
import { deepMerge } from '@deskpro/js-utils/dist/objects';
import ErrorMessage from './ErrorMessage';
import type { I18nType } from '../types/i18n';

const I18N = {
  required: 'Required',
};

export interface FieldProps {
  key?:         string;
  name?:        string;
  placeholder?: string;
  errorsName?:  string;
  label?:       string;
  description?: string;
  id?:          string;
  className?:   string;
  fClassName?:  string;
  required?:    boolean;
  i18n?:        I18nType;
  disabled?:    string;
  children?:    React.ReactElement;
  onBlur?:      () => void;
  onFocus?:     () => void;
}

export interface FieldState {
  focused?: boolean;
}

abstract class Field<
  P extends FieldProps = FieldProps,
  S extends FieldState = FieldState,
> extends React.Component<P, S> {
  protected i18n: I18nType;
  protected id: string;
  protected className: string;
  protected type: string;

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

  renderField(_form: any) {
    const {
      name, children, className, required, errorsName, label, fClassName, id, i18n, description, ...rest
    } = this.props;

    return (
      <FormikField
        id={this.id}
        name={name}
        type={this.type}
        className={classNames('dp-pc_input', className)}
        required={required}
        {...rest}
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
    return (
      <label className="dp-pc_label" htmlFor={htmlFor}>
        {label}
      </label>
    );
  };

  render() {
    const { name, errorsName, fClassName } = this.props;
    return (
      <FormikField
        name={name}
        validate={this.validate}
      >
        {(form: FormikProps<any>) => {
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
              {this.type !== 'hidden' ? this.renderDescription() : null}
              {this.renderField(form)}
              {
                touch && error && typeof error === 'string'
                  ? <ErrorMessage name={searchName} form={form} touchName={name} />
                  : null
              }
            </div>
          );
        }}
      </FormikField>
    );
  }
}

export default Field;
