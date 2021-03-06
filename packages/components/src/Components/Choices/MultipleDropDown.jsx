import React from 'react';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { getIn } from 'formik';
import ReactSelect, { components } from 'react-select';
import AsyncSelect from 'react-select/async';
import { SelectContainer, DropdownIndicator } from './DropDown';
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
      css={getStyles('option', props)}
      className={cx(
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

export class MultipleDropDownInput extends React.Component {
  static propType = {
    dataSource: PropTypes.shape({
      getOptions: PropTypes.oneOfType([PropTypes.func, PropTypes.array]).isRequired,
    }).isRequired,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    onBlur() {},
    onFocus() {},
  };

  constructor(props) {
    super(props);
    this.select = React.createRef();

    this.state = {
      value:      null,
      menuIsOpen: false
    };
  }

  onChange = (value) => {
    this.setState({
      value
    });
    const newValue = value ? value.map(e => e.value) : null;
    this.props.onChange(newValue);
  };

  onBlur = () => {
    this.props.onBlur();
    this.setState({ menuIsOpen: false });
  };

  onFocus = () => {
    this.props.onFocus();
    this.setState({ menuIsOpen: true });
  };

  closeMenu = () => {
    this.select.current.select.blurInput();
  };

  loadOptions = (inputValue) => {
    const { dataSource } = this.props;
    const propValue = this.props.value;
    return dataSource.getOptions(inputValue).then((options) => {
      const value = options.find(o => propValue && propValue.includes(o.value));
      this.setState({
        value
      });
      return options;
    });
  };

  render() {
    const {
      name, dataSource, value, ...props
    } = this.props;
    if (Array.isArray(dataSource.getOptions)) {
      return (
        <ReactSelect
          ref={this.select}
          value={
            dataSource.getOptions.filter(o => value && value.includes(o.value))
          }
          name={name}
          menuIsOpen={this.state.menuIsOpen}
          isClearable={false}
          options={dataSource.getOptions}
          hideSelectedOptions={false}
          components={{
            SelectContainer,
            Option,
            DropdownIndicator: dropdownProps => (
              <DropdownIndicator closeMenu={this.closeMenu} {...dropdownProps} />
            )
          }}
          classNamePrefix="react-select"
          isMulti
          {...props}
          className="react-select-multi"
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.onChange}
        />
      );
    }

    return (
      <AsyncSelect
        ref={this.select}
        value={this.state.value}
        name={name}
        isClearable={false}
        hideSelectedOptions={false}
        components={{
          SelectContainer,
          Option,
          DropdownIndicator: dropdownProps => (
            <DropdownIndicator closeMenu={this.closeMenu} {...dropdownProps} />
          )
        }}
        defaultOptions
        cacheOptions
        loadOptions={inputValue => this.loadOptions(inputValue)}
        classNamePrefix="react-select"
        isMulti
        {...props}
        onChange={this.onChange}
      />
    );
  }
}

class MultipleDropDown extends Field {
  onBlur = (form) => {
    const { name } = this.props;
    this.props.onBlur();
    if (form) {
      form.setFieldTouched(name, true);
    }
  };

  onChange = (form, value) => {
    const { name } = this.props;
    form.setFieldValue(name, value);
    this.props.handleChange(value);
  };

  renderField(form) {
    return (
      <MultipleDropDownInput
        onBlur={() => this.onBlur(form)}
        onChange={value => this.onChange(form, value)}
        value={getIn(form.values, this.props.name)}
        {...this.props}
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
  onBlur:       PropTypes.func,
};

MultipleDropDown.defaultProps = {
  handleChange() {},
  onBlur() {},
};

export default MultipleDropDown;
