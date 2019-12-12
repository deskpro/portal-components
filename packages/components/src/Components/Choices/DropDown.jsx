import React from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';
import { css } from 'emotion';
import ReactSelect, { components } from 'react-select';
import AsyncSelect from 'react-select/lib/Async';
import classNames from 'classnames';
import Field from '../Field';


export const SelectContainer = ({ children, ...props }) => (
  <components.SelectContainer
    {...props}
    className={classNames('react-select', { 'react-select__is-focused': props.isFocused })}
  >
    {children}
  </components.SelectContainer>
);

SelectContainer.propTypes = components.SelectContainer.propTypes;

const Option = (props) => {
  const {
    className,
    cx,
    data,
    getStyles,
    innerRef,
    label,
    isDisabled,
    isFocused,
    isSelected,
    innerProps
  } = props;
  if (data.children && data.children.length > 1) {
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
          className
        )}
        {...innerProps}
      >
        {label}
        <span className="react-select__option--arrow" />
      </div>
    );
  } return <components.Option {...props} />;
};

Option.propTypes = components.Option.propTypes;

export class DropDownInput extends React.Component {
  static propType = {
    dataSource: PropTypes.shape({
      getOptions: PropTypes.oneOfType([PropTypes.func, PropTypes.array]).isRequired,
    }).isRequired,
    onChange:    PropTypes.func,
    isClearable: PropTypes.bool,
  };

  static defaultProps = {
    onBlur() {},
    onFocus() {},
  };

  constructor(props) {
    super(props);
    this.state = {
      value:      null,
      menuIsOpen: false,
      options:    props.dataSource.getOptions,
    };
  }

  onBlur = () => {
    this.props.onBlur();
    this.setState({
      menuIsOpen: false
    });
  };

  onFocus = () => {
    this.props.onFocus();
    this.setState({
      menuIsOpen: true
    });
  };

  onChange = (value) => {
    if (value && value.children && value.children.length) {
      const { children } = value;
      const options = [{
        label:   'Back',
        value:   'select-back',
        parents: this.state.options,
      }].concat(children);
      this.setState({
        value: null,
        options,
      });
      return false;
    } else if (value && value.parents) {
      this.setState({
        value:   null,
        options: value.parents
      });
      return false;
    }
    this.setState({
      value,
      menuIsOpen: false,
    });
    this.select.blur();
    const newValue = value ? value.value : null;
    this.props.onChange(newValue);
    return true;
  };

  loadOptions = (inputValue) => {
    const { dataSource } = this.props;
    const propValue = this.props.value;
    return dataSource.getOptions(inputValue).then((options) => {
      const value = options.find(o => o.value === propValue);
      this.setState({
        value
      });
      return options;
    });
  };

  render() {
    const {
      name, dataSource, isClearable, value, ...props
    } = this.props;
    if (Array.isArray(dataSource.getOptions)) {
      return (
        <ReactSelect
          ref={(c) => { this.select = c; }}
          value={dataSource.getOptions.find(o => o.value === value)}
          name={name}
          isClearable={isClearable}
          components={{ SelectContainer, Option }}
          menuIsOpen={this.state.menuIsOpen}
          options={this.state.options}
          closeMenuOnSelect={this.closeMenuOnSelect}
          classNamePrefix="react-select"
          {...props}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.onChange}
        />
      );
    }
    return (
      <AsyncSelect
        ref={(c) => { this.select = c; }}
        value={this.state.value}
        name={name}
        isClearable={isClearable}
        defaultOptions
        cacheOptions
        components={{ SelectContainer, Option }}
        loadOptions={inputValue => this.loadOptions(inputValue)}
        classNamePrefix="react-select"
        {...props}
        onChange={this.onChange}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
      />
    );
  }
}

class DropDown extends Field {
  onBlur = (form) => {
    const { name } = this.props;
    this.props.onBlur();
    if (form) {
      form.setFieldTouched(name, true);
    }
  };

  onChange = (form, value) => {
    const { name, handleChange } = this.props;
    const actualVale = typeof value === 'object' ? value.value : value;
    const newValue = actualVale || null;
    form.setFieldValue(name, newValue);
    handleChange(newValue);
  };


  renderField(form) {
    return (
      <DropDownInput
        onBlur={() => this.onBlur(form)}
        onChange={value => this.onChange(form, value)}
        value={getIn(form.values, this.props.name)}
        {...this.props}
      />
    );
  }
}

DropDown.propTypes = {
  ...Field.propTypes,
  dataSource: PropTypes.shape({
    getOptions: PropTypes.oneOfType([PropTypes.func, PropTypes.array]).isRequired,
  }).isRequired,
  form:         PropTypes.object,
  handleChange: PropTypes.func,
  isClearable:  PropTypes.bool,
};

DropDown.defaultProps = {
  handleChange() {},
  isClearable: true,
  onBlur() {},
  onFocus() {},
};

export default DropDown;
