import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getIn } from 'formik';

import Field from '../Field';

class Radio extends Field {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
  }

  handleKeyPress = (e, form, value) => {
    const { name } = this.props;
    if (e.key === ' ') {
      e.preventDefault();
      form.setFieldValue(name, value);
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

  renderLabel = () => {
    const {
      label,
    } = this.props;
    const htmlFor = this.id;
    /* eslint-disable jsx-a11y/label-has-for */
    return (
      <label className="dp-pc_radio_label" htmlFor={htmlFor}>
        {label}
      </label>
    );
    /* eslint-enable jsx-a11y/label-has-for */
  };

  renderField = (form) => {
    const {
      name, options, className, ...props
    } = this.props;
    const htmlId = this.id;
    const value = getIn(form.values, name);
    /* eslint-disable jsx-a11y/no-noninteractive-tabindex */
    /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
    console.log(value);
    return (
      <div
        className={classNames('dp-pc_radios', { focused: this.state.focused }, className)}
        {...props}
      >
        {options.map(option => (
          <label
            key={option.value}
            htmlFor={`${htmlId}-${option.value}`}
            tabIndex="0"
            className="dp-pc_radio"
            onKeyPress={e => this.handleKeyPress(e, form, option.value)}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          >
            <input
              id={`${htmlId}-${option.value}`}
              name={name}
              type="radio"
              value={option.value}
              checked={value === option.value}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <i />
            {' '}
            <span className="label">
              {option.label}
            </span>
          </label>
        ))}
      </div>
    );
    /* eslint-enable jsx-a11y/no-noninteractive-tabindex */
    /* eslint-enable jsx-a11y/no-noninteractive-element-interactions */
  }
}

Radio.propTypes = {
  ...Field.propTypes,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    value: PropTypes.any.isRequired
  })),
};

export default Radio;
