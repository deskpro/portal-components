import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Field as FormikField, getIn } from 'formik';
import { objectKeyFilter } from '@deskpro/js-utils/dist/objects';
import Field from '../Field';

class Checkbox extends Field {
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
      name, id, label, ...props
    } = this.props;
    /* eslint-disable jsx-a11y/label-has-for */
    /* eslint-disable jsx-a11y/click-events-have-key-events */
    /* eslint-disable jsx-a11y/no-noninteractive-tabindex */
    /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
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
          {...objectKeyFilter(props, Field.propTypes)}
        />
        <i onClick={e => this.onChange(e, form, name)} />
        <span className="dp-pc_checkbox__label" onClick={e => this.onChange(e, form, name)} >
          {label}
        </span>
      </div>
    );
    /* eslint-enable jsx-a11y/label-has-for */
    /* eslint-disable jsx-a11y/click-events-have-key-events */
    /* eslint-enable jsx-a11y/no-noninteractive-tabindex */
    /* eslint-enable jsx-a11y/no-noninteractive-element-interactions */
  };

  renderLabel = () => null;
}

Checkbox.propTypes = {
  ...Field.propTypes,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

export default Checkbox;
