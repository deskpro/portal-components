import React from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';
import ReactSelect, { components } from 'react-select';
import AsyncSelect from 'react-select/lib/Async';
import classNames from 'classnames';
import Field from '../Field';


const SelectContainer = ({ children, ...props }) => (
  <components.SelectContainer {...props} className={classNames({ 'react-select__is-focused': props.isFocused })}>
    {children}
  </components.SelectContainer>
);

SelectContainer.propTypes = components.SelectContainer.propTypes;

class DropDown extends Field {
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
    const newValue = value ? value.value : null;
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
    const {
      name, dataSource, isClearable, ...props
    } = this.props;
    if (Array.isArray(dataSource.getOptions)) {
      return (
        <ReactSelect
          value={dataSource.getOptions.find(o => o.value === getIn(form.values, name))}
          name={name}
          isClearable={isClearable}
          components={{ SelectContainer }}
          onChange={value => this.handleChange(form, value)}
          onBlur={() => form.setFieldTouched(name, true)}
          options={dataSource.getOptions}
          classNamePrefix="react-select"
          {...props}
        />
      );
    }
    return (
      <AsyncSelect
        value={this.state.value}
        name={name}
        isClearable={isClearable}
        onChange={value => this.handleChange(form, value)}
        onBlur={() => form.setFieldTouched(name, true)}
        defaultOptions
        cacheOptions
        components={{ SelectContainer }}
        loadOptions={inputValue => this.loadOptions(form, inputValue)}
        classNamePrefix="react-select"
        {...props}
      />
    );
  }
}

DropDown.propTypes = {
  ...Field.propTypes,
  dataSource: PropTypes.shape({
    getOptions: PropTypes.oneOfType([PropTypes.func, PropTypes.array]).isRequired,
  }).isRequired,
  handleChange: PropTypes.func,
  isClearable:  PropTypes.bool,
};

DropDown.defaultProps = {
  handleChange() {},
  isClearable: true,
};

export default DropDown;
