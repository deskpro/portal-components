import * as React from 'react';
import { getIn } from 'formik';
import { css } from '@emotion/css'
import ReactSelect, { components } from 'react-select';
import AsyncSelect from 'react-select/async';
import { deepMerge } from '@deskpro/js-utils/dist/objects';
import classNames from 'classnames';
import Field, { FieldProps, FieldState } from '../Field';
import { ContainerProps } from "react-select/dist/declarations/src/components/containers";
import { DropdownIndicatorProps as ReactSelectDropdownIndicatorProps } from "react-select/dist/declarations/src/components/indicators";
import {
  OptionProps as ReactSelectOptionProps
} from "react-select/dist/declarations/src/components/Option";
import type { Option } from "../../types/options";
import { DataSource } from "../../types/dataSource";

const SelectContainer = ({ children, ...props }: ContainerProps) => (
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

interface DropdownIndicatorProps extends ReactSelectDropdownIndicatorProps {
  closeMenu: () => void;
}

const DropdownIndicator = ({ closeMenu, ...props }: DropdownIndicatorProps) => (
  <components.DropdownIndicator {...props}>
    <span className="dp-react-select__dropdown-indicator" onClick={closeMenu} onKeyDown={() => true} />
  </components.DropdownIndicator>
);

interface OptionProps extends ReactSelectOptionProps {
  data: {
    value: string;
    children: object[];
  };
}

const Option = (props: OptionProps) => {
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
        className={classNames(
          cx(
            {
              option:                true,
              'option--is-disabled': isDisabled,
              'option--is-focused':  isFocused,
              'option--is-selected': isSelected,
            },
            className
          ),
          css(getStyles('option', props))
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
        className={classNames(
          cx(
          {
            option:                true,
            'option--is-disabled': isDisabled,
            'option--is-focused':  isFocused,
            'option--is-selected': isSelected,
            'option--is-back':     true,
          },
          className),
          css(getStyles('option', props))
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

const I18N = {
  back:   'Back',
  select: 'Select',
};

interface DropDownInputProps extends FieldProps {
  dataSource:    DataSource;
  onChange:      (value: string | null) => void;
  isClearable?:  boolean;
  isSearchable?: boolean;
  value:         number | string;
  closeOnBlur?:  boolean;
}

interface DropDownInputState extends FieldState {
  value?: {
    value: string;
    children: string[];
  };
  menuIsOpen: boolean;
  options: Option[];
}

export class DropDownInput extends React.Component<DropDownInputProps, DropDownInputState> {
  static defaultProps = {
    i18n: {},
    onBlur() {},
    onFocus() {},
  };
  private i18n: any;
  private readonly select: React.RefObject<any>;

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

  componentDidMount() {
    this.setOptions();
  }

  componentDidUpdate(prevProps, prevState) {
    this.setOptions(prevState);
  }

  onBlur = () => {
    this.props.onBlur();
    if (this.props.closeOnBlur) {
      this.setState({ menuIsOpen: false });
    }
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
      const options: Option[] = [{
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
    } if (value && value.parents && value.parents.length > 0) {
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
    this.select.current.inputRef.blur();
    const newValue = value ? value.value : null;
    this.props.onChange(newValue);
    return true;
  };

  closeMenu = () => {
    if (!this.props.closeOnBlur) {
      this.setState({ menuIsOpen: false });
      this.select.current.inputRef.blur();
    }
  };

  loadOptions = (inputValue) => {
    const { dataSource } = this.props;
    const propValue = this.props.value;
    if (Array.isArray(dataSource.getOptions)) {
      return dataSource.getOptions;
    }
    return dataSource.getOptions(inputValue).then((options) => {
      const value = options.find(o => o.value === propValue);
      this.setState({
        value
      });
      return options;
    });
  };

  setOptions = (prevState = null) => {
    const { value: stateValue } = this.state;
    const { value: propValue, dataSource } = this.props;

    if (Array.isArray(dataSource.getOptions) && propValue && (!stateValue || stateValue.value !== propValue)) {
      const updateOptions = (options, parentOptions?: Option[]) => {
        if (options.map(option => option.value).indexOf(propValue) !== -1) {
          if (prevState && prevState.options
            && JSON.stringify(options) === JSON.stringify(prevState.options.filter(o => o.value !== 'select-back'))
          ) {
            return;
          }

          const newValue = options.find(o => o.value === propValue);

          if (parentOptions) {
            this.setState({
              value:   newValue,
              options: [{
                label:   this.i18n.back,
                value:   'select-back',
                parents: parentOptions,
              }].concat(options)
            });
          } else {
            this.setState({ value: newValue, options });
          }
        } else {
          options.forEach((childOption) => {
            if (childOption.children) {
              updateOptions(childOption.children, options);
            }
          });
        }
      };

      updateOptions(dataSource.getOptions);
    }
  };

  render() {
    const {
      name, dataSource, isClearable, isSearchable, value, ...props
    } = this.props;
    const { options } = this.state;
    if (Array.isArray(dataSource.getOptions)) {
      return (
        <ReactSelect
          styles={{ menuPortal: base => ({ ...base, position: 'relative' }) }}
          ref={this.select}
          value={options.find(o => o.value === value) || null}
          name={name}
          isClearable={isClearable}
          isSearchable={isSearchable}
          components={{
            SelectContainer,
            Option,
            DropdownIndicator: dropdownProps => (
              <DropdownIndicator closeMenu={this.closeMenu} {...dropdownProps} />
            )
          }}
          menuPlacement="auto"
          menuIsOpen={this.state.menuIsOpen}
          options={options}
          closeMenuOnScroll={false}
          classNamePrefix="react-select"
          placeholder={this.i18n.select}
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

interface DropDownProps extends FieldProps {
  dataSource:    DataSource;
  form?:         object;
  handleChange?: (value: any) => void;
  closeOnBlur?:  boolean;
  onBlur?:       () => void;
  onFocus?:      () => void;
  isClearable?:  boolean;
  isSearchable?: boolean;
}

class DropDown extends Field<DropDownProps> {
  static defaultProps = {
    ...Field.defaultProps,
    handleChange() {},
    isClearable:  false,
    isSearchable: true,
    closeOnBlur:  true,
    onBlur() {},
    onFocus() {},
  }

  onBlur = (form) => {
    this.props.onBlur();
    if (this.props.closeOnBlur) {
      const { name } = this.props;
      if (form) {
        form.setFieldTouched(name, true);
      }
    }
  };

  onChange = (form, value) => {
    const { name, handleChange } = this.props;
    const actualVale = typeof value === 'object' && value !== null ? value.value : value;
    const newValue = actualVale || null;
    form.setFieldValue(name, newValue);
    handleChange(newValue);
  };


  renderField({ form }) {
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

export {
  DropdownIndicator,
  OptionProps,
  SelectContainer,
};
export default DropDown;
