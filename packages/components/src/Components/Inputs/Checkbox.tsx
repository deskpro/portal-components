import * as React from 'react';
import classNames from 'classnames';
import { Field as FormikField, getIn } from 'formik';
import Field, { FieldProps, FieldState } from '../Field';

interface CheckBoxState extends FieldState {
  focused: boolean;
}

class Checkbox extends Field<FieldProps, CheckBoxState> {
  constructor(props) {
    super(props);
    this.type = 'checkbox';
    this.state = {
      focused: false
    };
  }

  handleKeyPress = (e, form) => {
    const { name } = this.props;
    if (e.key === ' ') {
      e.preventDefault();
      form.setFieldValue(name, !getIn(form.values, name));
    }
  };

  handleBlur = () => {
    this.setState({
      focused: false
    });
  };

  handleFocus = () => {
    this.setState({
      focused: true
    });
  };

  onChange = (e, form, name) => {
    e.preventDefault();
    e.stopPropagation();
    form.setFieldValue(name, !getIn(form.values, name));
  };

  renderField = (form) => {
    const {
      name, id, label
    } = this.props;
    return (
      <div
        className={classNames('dp-pc_checkbox', { focused: this.state.focused })}
      >
        <FormikField
          id={id}
          type="checkbox"
          name={name}
          checked={getIn(form.values, name)}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <i onClick={e => this.onChange(e, form, name)} />
        <span className="dp-pc_checkbox__label" onClick={e => this.onChange(e, form, name)} >
          {label}
        </span>
      </div>
    );
  };

  renderLabel = () => null;
}

export default Checkbox;
