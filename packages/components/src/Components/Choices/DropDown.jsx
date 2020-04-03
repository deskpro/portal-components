import React from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import ReactSelect, { components } from 'react-select';
import AsyncSelect from 'react-select/async';
import { deepMerge } from '@deskpro/js-utils/dist/objects';
import classNames from 'classnames';
import Field from '../Field';

const SelectContainer = ({ children, ...props }) => (
  <components.SelectContainer
    {...props}
    className={classNames(
      'react-select',
      { 'react-select__is-focused': props.isFocused, 'react-select-multi': props.isMulti }
    )}
  >
    {children}
  </components.SelectContainer>
);

SelectContainer.propTypes = components.SelectContainer.propTypes;

const DropdownIndicator = ({ closeMenu, ...props }) => (
  <components.DropdownIndicator {...props}>
    <span className="dp-react-select__dropdown-indicator" onClick={closeMenu} onKeyDown={() => true} />
  </components.DropdownIndicator>
);

DropdownIndicator.propTypes = components.DropdownIndicator.propTypes;

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
  if (data.children && data.children.length > 0) {
    return (
      <div
        ref={innerRef}
        style={getStyles('option', props)}
        className={cx(
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
  }
  if (data.value === 'select-back') {
    return (
      <div
        ref={innerRef}
        style={getStyles('option', props)}
        className={cx(
          {
            option:                true,
            'option--is-disabled': isDisabled,
            'option--is-focused':  isFocused,
            'option--is-selected': isSelected,
            'option--is-back':     true,
          },
          className,

        )}
        {...innerProps}
      >
        <span className="react-select__option--back-arrow" />
        {label}
      </div>
    );
  }
  return <components.Option {...props} />;
};

Option.propTypes = components.Option.propTypes;

const I18N = {
  back:   'Back',
  select: 'Select',
};

export class DropDownInput extends React.Component {
  static propType = {
    dataSource: PropTypes.shape({
      getOptions: PropTypes.oneOfType([PropTypes.func, PropTypes.array]).isRequired,
    }).isRequired,
    i18n:        PropTypes.object,
    onChange:    PropTypes.func,
    isClearable: PropTypes.bool,
  };

  static defaultProps = {
    i18n: {},
    onBlur() {},
    onFocus() {},
  };

  constructor(props) {
    super(props);

    this.i18n = deepMerge(I18N, props.i18n);
    this.select = React.createRef();

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
    if (value && value.children && value.children.length > 0) {
      const { children } = value;
      const options = [{
        label:   this.i18n.back,
        value:   'select-back',
        parents: this.state.options,
      }].concat(children);
      this.setState({
        value: null,
        options,
      });
      this.props.onChange(null);
      return false;
    } else if (value && value.parents && value.parents.length > 0) {
      this.setState({
        value:   null,
        options: value.parents
      });
      this.props.onChange(null);
      return false;
    }
    this.setState({
      value,
      menuIsOpen: false,
    });
    this.select.current.select.blurInput();
    const newValue = value ? value.value : null;
    this.props.onChange(newValue);
    return true;
  };

  closeMenu = () => {
    this.select.current.select.blurInput();
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
      name, dataSource, isClearable, isSearchable, value, ...props
    } = this.props;
    const { options } = this.state;
    if (Array.isArray(dataSource.getOptions)) {
      return (
        <ReactSelect
          ref={this.select}
          value={options.find(o => o.value === value) || null}
          name={name}
          isClearable={isClearable}
          isSearchable={isSearchable}
          components={{
            SelectContainer,
            Option,
            DropdownIndicator: dropdownProps =>
              <DropdownIndicator closeMenu={this.closeMenu} {...dropdownProps} />
          }}
          menuIsOpen={this.state.menuIsOpen}
          options={this.state.options}
          closeMenuOnSelect={this.closeMenuOnSelect}
          classNamePrefix="react-select"
          placeholder={`${this.i18n.select}...`}
          {...props}
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
        isClearable={isClearable}
        isSearchable={isSearchable}
        defaultOptions
        cacheOptions
        components={{
          SelectContainer,
          Option,
          DropdownIndicator: dropdownProps =>
            <DropdownIndicator closeMenu={this.closeMenu} {...dropdownProps} />
        }}
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
    const actualVale = typeof value === 'object' && value !== null ? value.value : value;
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
  onBlur:       PropTypes.func,
  onFocus:      PropTypes.func,
  isClearable:  PropTypes.bool,
  isSearchable: PropTypes.bool,
};

DropDown.defaultProps = {
  handleChange() {},
  isClearable:  false,
  isSearchable: true,
  onBlur() {},
  onFocus() {},
};

export {
  SelectContainer,
  DropdownIndicator
};
export default DropDown;
