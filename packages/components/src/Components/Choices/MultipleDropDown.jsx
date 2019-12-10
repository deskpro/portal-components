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
    this.state = {
      value: null
    };
  }

  onChange = (value) => {
    this.setState({
      value
    });
    const newValue = value ? value.map(e => e.value) : null;
    this.props.onChange(newValue);
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
          value={
            dataSource.getOptions.filter(o => value && value.includes(o.value))
          }
          name={name}
          isClearable={false}
          options={dataSource.getOptions}
          hideSelectedOptions={false}
          components={{ Option, SelectContainer }}
          classNamePrefix="react-select"
          isMulti
          {...props}
          onChange={this.onChange}
        />
      );
    }

    return (
      <AsyncSelect
        value={this.state.value}
        name={name}
        isClearable={false}
        hideSelectedOptions={false}
        components={{ Option, SelectContainer }}
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
};

MultipleDropDown.defaultProps = {
  handleChange() {},
};

export default MultipleDropDown;
