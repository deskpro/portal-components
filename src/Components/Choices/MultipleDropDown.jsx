import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { css } from 'emotion';
import { getIn } from 'formik';
import ReactSelect, { components } from 'react-select';

import Field from '../Field';

const SelectContainer = ({ children, ...props }) => (
  <components.SelectContainer {...props} className={classNames({ 'react-select__is-focused': props.isFocused })}>
    {children}
  </components.SelectContainer>
);

SelectContainer.propTypes = components.SelectContainer.propTypes;

const Option = (props) => {
  const {
    className,
    cx,
    getStyles,
    label,
    isDisabled,
    isFocused,
    isSelected,
    innerRef,
    innerProps
  } = props;
  return (
    <div
      ref={innerRef}
      className={cx(
        css(getStyles('option', props)),
        {
          option:                true,
          'option--is-disabled': isDisabled,
          'option--is-focused':  isFocused,
          'option--is-selected': isSelected,
        },
        'dp-pc_checkbox',
        className
      )}
      {...innerProps}
    >
      <span
        className="dp-pc_checkbox__checkbox"
      >
        <input type="checkbox" checked={isSelected} readOnly />
        <i />
        <span className="dp-pc_checkbox__label">
          {label}
        </span>
      </span>
    </div>
  );
};

Option.propTypes = components.Option.propTypes;

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
    const { name, dataSource, ...props } = this.props;
    if (Array.isArray(dataSource.getOptions)) {
      return (
        <ReactSelect
          value={dataSource.getOptions.filter(o => getIn(form.values, name).includes(o.value))}
          name={name}
          isClearable={false}
          onChange={value => this.handleChange(form, value)}
          onBlur={() => form.setFieldTouched(name, true)}
          options={dataSource.getOptions}
          hideSelectedOptions={false}
          menuIsOpen
          components={{ Option, SelectContainer }}
          optionRenderer={option => this.renderOption(option, form)}
          classNamePrefix="react-select"
          isMulti
          {...props}
        />
      );
    }
    return null;
  }
}

MultipleDropDown.propTypes = {
  ...Field.propTypes,
  dataSource: PropTypes.shape({
    getOptions: PropTypes.oneOfType([PropTypes.func, PropTypes.array]).isRequired,
  }).isRequired,
  handleChange: PropTypes.func,
};

MultipleDropDown.defaultProps = {
  handleChange() {},
};

export default MultipleDropDown;
