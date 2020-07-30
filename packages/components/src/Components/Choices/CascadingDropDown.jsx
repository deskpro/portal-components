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
        css={getStyles('option', props)}
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
  return <components.Option {...props} />;
};

Option.propTypes = components.Option.propTypes;

const I18N = {
  select: 'Select',
};

export class CascadingDropDownInput extends React.Component {
  static propType = {
    dataSource: PropTypes.shape({
      getOptions: PropTypes.oneOfType([PropTypes.func, PropTypes.array]).isRequired,
    }).isRequired,
    i18n:        PropTypes.object,
    onChange:    PropTypes.func,
    isClearable: PropTypes.bool,
    value:       PropTypes.oneOfType([PropTypes.number, PropTypes.string])
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
      menuIsOpen: false,
      options:    props.dataSource.getOptions,
    };
    this.childInput = React.createRef();
  }

  componentDidMount() {
    this.setStateValue();
  }

  componentDidUpdate() {
    this.setStateValue();
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
    if (this.childInput && this.childInput.current) {
      this.childInput.current.clearValue();
    }
    if (value && value.children && value.children.length > 0) {
      this.setState({
        value,
        menuIsOpen: false,
        subChoice:  true
      });
      this.select.current.select.blurInput();
      this.props.onChange(null);
      return true;
    }
    this.setState({
      value,
      menuIsOpen: false,
      subChoice:  false
    });
    this.select.current.select.blurInput();
    const newValue = value ? value.value : null;
    this.props.onChange(newValue);
    return true;
  };

  handleChildrenChange = (value) => {
    this.props.onChange(value);
  }

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

  clearValue = () => {
    this.setState({
      value: null
    });
  }

  setStateValue = () => {
    const { value: stateValue, options, subChoice } = this.state;
    const { value: propValue } = this.props;
    if (subChoice) {
      return;
    }

    const findValue = opts => (Array.isArray(opts)
      ? opts.find(o => o.value === propValue || !!findValue(o.children))
      : null
    );
    const newValue = findValue(options) || null;

    if (Array.isArray(options)
      && JSON.stringify(newValue) !== JSON.stringify(stateValue)
      && !(stateValue && stateValue.children)
    ) {
      this.setState({ value: newValue });
    }
  };

  render() {
    const {
      name, dataSource, isClearable, isSearchable, value: propValue, ...props
    } = this.props;
    const { value: stateValue } = this.state;

    if (Array.isArray(dataSource.getOptions)) {
      return (
        <div className="dp-cascading-dropdown">
          <ReactSelect
            ref={this.select}
            name={name}
            isClearable={isClearable}
            isSearchable={isSearchable}
            components={{
              SelectContainer,
              Option,
              DropdownIndicator: dropdownProps => <DropdownIndicator closeMenu={this.closeMenu} {...dropdownProps} />
            }}
            menuIsOpen={this.state.menuIsOpen}
            options={dataSource.getOptions}
            closeMenuOnSelect={this.closeMenuOnSelect}
            classNamePrefix="react-select"
            placeholder={this.i18n.select}
            {...props}
            value={stateValue}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onChange={this.onChange}
          />
          {stateValue && stateValue.children && stateValue.children.length > 0
            ? (
              <div className="children">
                <CascadingDropDownInput
                  value={propValue}
                  dataSource={{ getOptions: stateValue.children }}
                  onChange={this.handleChildrenChange}
                  ref={this.childInput}
                />
              </div>
            )
            : null}
        </div>
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
          DropdownIndicator: dropdownProps => <DropdownIndicator closeMenu={this.closeMenu} {...dropdownProps} />
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

class CascadingDropDown extends Field {
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
      <CascadingDropDownInput
        onBlur={() => this.onBlur(form)}
        onChange={value => this.onChange(form, value)}
        value={getIn(form.values, this.props.name)}
        {...this.props}
      />
    );
  }
}

CascadingDropDown.propTypes = {
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

CascadingDropDown.defaultProps = {
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
export default CascadingDropDown;
