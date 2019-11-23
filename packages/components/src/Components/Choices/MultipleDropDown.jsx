import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import { getIn } from 'formik';
import ReactSelect, { components } from 'react-select';
import AsyncSelect from 'react-select/lib/Async';
import { SelectContainer } from './DropDown';
import Field from '../Field';

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
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  handleChange = (form, value) => {
    const { name, handleChange } = this.props;
    this.setState({
      value
    });
    const newValue = value ? value.map(e => e.value) : null;
    form.setFieldValue(name, newValue);
    handleChange(newValue);
  };

  loadOptions = (form, inputValue) => {
    const { dataSource, name } = this.props;
    return dataSource.getOptions(inputValue).then((options) => {
      const value = options.find(o => o.value === getIn(form.values, name));
      this.setState({
        value
      });
      return options;
    });
  };

  renderField = (form) => {
    const { name, dataSource, ...props } = this.props;
    if (Array.isArray(dataSource.getOptions)) {
      return (
        <ReactSelect
          value={
            dataSource.getOptions.filter(o => getIn(form.values, name) && getIn(form.values, name).includes(o.value))
          }
          name={name}
          isClearable={false}
          onChange={value => this.handleChange(form, value)}
          onBlur={() => form.setFieldTouched(name, true)}
          options={dataSource.getOptions}
          hideSelectedOptions={false}
          components={{ Option, SelectContainer }}
          classNamePrefix="react-select"
          isMulti
          {...props}
        />
      );
    }

    return (
      <AsyncSelect
        value={this.state.value}
        name={name}
        isClearable={false}
        onChange={value => this.handleChange(form, value)}
        onBlur={() => form.setFieldTouched(name, true)}
        hideSelectedOptions={false}
        components={{ Option, SelectContainer }}
        defaultOptions
        cacheOptions
        loadOptions={inputValue => this.loadOptions(form, inputValue)}
        classNamePrefix="react-select"
        isMulti
        {...props}
      />
    );
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
