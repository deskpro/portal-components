import * as React from 'react';
import { getIn, isString } from 'formik';
import ReactSelect, { components } from 'react-select';
import AsyncSelect from 'react-select/async';
import { deepMerge } from '@deskpro/js-utils/dist/objects';
import classNames from 'classnames';
import Field, { FieldProps } from '../Field';
import { ContainerProps } from "react-select/dist/declarations/src/components/containers";
import { DropdownIndicatorProps as ReactSelectDropdownIndicatorProps } from "react-select/dist/declarations/src/components/indicators";
import { OptionProps as ReactSelectOptionProps } from "react-select/dist/declarations/src/components/Option";
import type { DataSource } from "../../types/dataSource";
import { css } from "@emotion/css";

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
          className),
          css(getStyles('option', props))
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

const I18N = {
  select: 'Select',
};

interface CascadingDropDownInputProps extends FieldProps{
  dataSource: DataSource;
  onChange: (value: number | string) => void;
  onBlur: () => void;
  onFocus: () => void;
  isClearable?: boolean;
  value: number | string;
  isSearchable?: boolean;
}

interface CascadingDropDownInputState {
  menuIsOpen: boolean;
  value?: {
    value: string;
    children: string[];
  };
  subChoice?: boolean;
  options: string[];
}

export class CascadingDropDownInput extends React.Component<CascadingDropDownInputProps, CascadingDropDownInputState> {
  static defaultProps = {
    i18n: {},
    onBlur() {},
    onFocus() {},
  };
  private i18n: any;
  private readonly select: React.RefObject<any>;
  private readonly childInput: React.RefObject<CascadingDropDownInput>;

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
      // @TODO Fix that
      // this.select.current.blur();
      this.props.onChange(null);
      return true;
    }
    this.setState({
      value,
      menuIsOpen: false,
      subChoice:  false
    });
    // @TODO Fix that
    // this.select.current.blur();
    const newValue = value ? value.value : null;
    this.props.onChange(newValue);
    return true;
  };

  handleChildrenChange = (value) => {
    this.props.onChange(value);
  }

  closeMenu = () => {
    // @TODO Fix that
    // this.select.current.select.blurInput();
  };

  loadOptions = (inputValue) => {
    const { dataSource } = this.props;
    const propValue = this.props.value;
    if (Array.isArray(dataSource.getOptions)){
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

  clearValue = () => {
    this.setState({
      value: null
    });
  }

  setStateValue = () => {
    const { value: stateValue, subChoice } = this.state;
    const { value: propValue, dataSource } = this.props;
    if (subChoice) {
      return;
    }

    const findValue = opts => (Array.isArray(opts)
      ? opts.find(o => o.value === propValue || !!findValue(o.children))
      : null
    );
    const newValue = findValue(dataSource.getOptions) || null;

    if (Array.isArray(dataSource.getOptions)
      && JSON.stringify(newValue) !== JSON.stringify(stateValue)
      && !(stateValue && !isString(stateValue) && typeof stateValue !== 'number' && stateValue.children)
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

interface CascadingDropDownProps extends FieldProps {
  handleChange: (value: any) => void;
  dataSource: DataSource;
  isClearable: boolean;
  isSearchable: boolean;
}

class CascadingDropDown extends Field<CascadingDropDownProps> {
  static defaultProps = {
    ...Field.defaultProps,
    handleChange() {},
    isClearable:  false,
    isSearchable: true,
    onBlur() {},
    onFocus() {},
  };

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


  renderField({ form }) {
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

export {
  SelectContainer,
  DropdownIndicator
};
export default CascadingDropDown;
