import * as React from 'react';
import { components } from 'react-select';
import AsyncSelect from 'react-select/async';
import classNames from 'classnames';
import Field, { FieldProps, FieldState } from '../Field';
import { ContainerProps } from "react-select/dist/declarations/src/components/containers";

const SelectContainer = ({ children, ...props }: ContainerProps) => (
  <components.SelectContainer {...props} className={classNames({ 'react-select__is-focused': props.isFocused })}>
    {children}
  </components.SelectContainer>
);

interface DropDownProps extends FieldProps {
  dataSource: {
    url:             string;
    authMethod:      'param';
    method:          string;
    auth:            object;
    parseData:       (data: object) => object;
    inputValidation: (value: object) => boolean;
    params:          object;
  };
  defaultOptions: boolean;
  handleChange:   (value: object) => void;
  isClearable:    boolean;
}

interface DropDownState extends FieldState {
  value: string;
}

class DropDown extends Field<DropDownProps, DropDownState> {
  static defaultProps = {
    ...Field.defaultProps,
    handleChange() {},
    isClearable:    true,
    defaultOptions: false,
    dataSource:     {
      inputValidation() { return true; },

    }
  };

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
    const mode: RequestMode = "cors";
    return {
      mode,
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      ...dataSource.params
    };
  };

  loadOptions = (form, inputValue) => {
    const { dataSource, name } = this.props;
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
          form.setFieldError(name, response.statusText);
          return false;
        })
        .catch((error) => {
          form.setFieldError(name, error.toString());
        })
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

export default DropDown;
