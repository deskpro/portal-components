import React from 'react';
import PropTypes from 'prop-types';
import { components } from 'react-select';
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

  getUrl = (inputValue) => {
    const { dataSource } = this.props;
    const url = new URL(dataSource.url.replace('__FILTER__', inputValue));
    if (dataSource.method === 'param') {
      Object.keys(dataSource.auth).forEach((key) => {
        url.searchParams.append(key, dataSource.auth[key]);
      });
    }
    return url.toString();
  };

  getParams = () => {
    const { dataSource } = this.props;
    return {
      mode:    'cors',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      ...dataSource.params
    };
  };

  loadOptions = (form, inputValue) => {
    const { dataSource } = this.props;
    return new Promise((resolve) => {
      if (!dataSource.inputValidation(inputValue)) {
        resolve(false);
        return false;
      }
      return fetch(this.getUrl(inputValue), this.getParams())
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return false;
        })
        .catch(() => {})
        .then((data) => {
          resolve(dataSource.parseData(data));
        });
    });
  };

  renderField = (form) => {
    const {
      name,
      isClearable,
      defaultOptions,
      ...props
    } = this.props;
    return (
      <AsyncSelect
        value={this.state.value}
        name={name}
        isClearable={isClearable}
        onChange={value => this.handleChange(form, value)}
        onBlur={() => form.setFieldTouched(name, true)}
        defaultOptions={defaultOptions}
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
    url:             PropTypes.string,
    authMethod:      PropTypes.oneOf(['param']),
    auth:            PropTypes.object,
    parseData:       PropTypes.func,
    inputValidation: PropTypes.func,
  }).isRequired,
  defaultOptions: PropTypes.bool,
  handleChange:   PropTypes.func,
  isClearable:    PropTypes.bool,
};

DropDown.defaultProps = {
  handleChange() {},
  isClearable:    true,
  defaultOptions: false,
  dataSource:     {
    inputValidation() { return true; },

  }
};

export default DropDown;
