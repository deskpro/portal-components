import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getIn } from 'formik';
import ReactSelect from 'react-select';

import Field from '../Field';

class MultipleDropDown extends Field {
  handleChange = (form, value) => {
    const { name, handleChange } = this.props;
    const newValue = value ? value.map(e => e.value) : null;
    form.setFieldValue(name, newValue);
    handleChange(newValue);
  };

  renderCheckbox = (checked, label) => (
    <div
      className={classNames('dp-pc_checkbox')}
    >
      <span
        className="dp-pc_checkbox__checkbox"
      >
        <input type="checkbox" checked={checked} readOnly />
        <i />
        <span className="dp-pc_checkbox__label">
          {label}
        </span>
      </span>
    </div>
  );

  renderOption = (option, form) => {
    const { name } = this.props;
    const checked = form.values[name].includes(option.value);
    return this.renderCheckbox(checked, option.label);
  };

  renderField = (form) => {
    const { name, options, ...props } = this.props;
    return (
      <ReactSelect
        value={getIn(form.values, name)}
        name={name}
        clearable={false}
        onChange={value => this.handleChange(form, value)}
        onBlur={() => form.setFieldTouched(name, true)}
        options={options}
        removeSelected={false}
        optionRenderer={option => this.renderOption(option, form)}
        multi
        {...props}
      />
    );
  }
}

MultipleDropDown.propTypes = {
  ...Field.propTypes,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    value: PropTypes.any.isRequired
  })),
  handleChange: PropTypes.func,
};

MultipleDropDown.defaultProps = {
  handleChange() {},
};

export default MultipleDropDown;
