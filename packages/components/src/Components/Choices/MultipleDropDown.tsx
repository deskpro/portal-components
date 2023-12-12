import * as React from 'react';
import { getIn } from 'formik';
import ReactSelect from 'react-select';
import AsyncSelect from 'react-select/async';
import { deepMerge } from '@deskpro/js-utils/dist/objects';
import { SelectContainer, DropdownIndicator, OptionProps } from './DropDown';
import Field, { FieldProps } from '../Field';
import type { DataSource } from "../../types/dataSource";
import type { Option } from "../../types/options";
import classNames from "classnames";
import { css } from "@emotion/css";

const Option = (props: OptionProps) => {
  const {
    className,
    cx,
    data,
    getStyles,
    label,
    isDisabled,
    isFocused,
    isSelected,
    innerRef,
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
          className ?? 'dp-pc_checkbox'),
          css(getStyles('option', props))
        )}
        {...innerProps}
      >
        <span
          className="dp-pc_checkbox__checkbox"
        >
        <input type="checkbox" checked={isSelected} readOnly />
        <i style={{visibility: "hidden"}} />
        <span className="dp-pc_checkbox__label">
          {label}
        </span>
      </span>
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
          className ?? 'dp-pc_checkbox'),
        css(getStyles('option', props))
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

const I18N = {
  back:   'Back',
  select: 'Select',
};

interface MultipleDropDownInputProps extends MultipleDropDownProps {
  dataSource: DataSource;
  onChange: (value: number | string) => void;
  onBlur: () => void;
  onFocus: () => void;
  isClearable?: boolean;
  value: number[] | string[];
  isSearchable?: boolean;
  closeOnBlur?:  boolean;
}

interface MultipleDropDownInputState {
  menuIsOpen: boolean;
  value?: Option[];
  subChoice?: boolean;
  options: Option[];
}

export class MultipleDropDownInput extends React.Component<MultipleDropDownInputProps, MultipleDropDownInputState> {
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

  componentDidUpdate() {
    // this.setOptions(prevState);
  }

  onBlur = () => {
    this.props.onBlur();
    if (this.props.closeOnBlur) {
      this.setState({ menuIsOpen: false });
    }
  };

  onFocus = () => {
    this.props.onFocus();
    this.setState({ menuIsOpen: true });
  };

  onChange = (value, meta) => {
    if (meta.option && meta.option.children && meta.option.children.length > 0) {
      const { children } = meta.option;
      const options: Option[] = [{
        label:   this.i18n.back,
        value:   'select-back',
        parents: this.state.options,
      }].concat(children);
      this.setState({
        options,
      });
      return false;
    } if (meta.option && meta.option.parents && meta.option.parents.length > 0) {
      this.setState({
        options: meta.option.parents
      });
      return false;
    }
    this.setState({
      value
    });
    this.select.current.inputRef.blur();
    const newValue = value ? value.map(e => e.value) : null;
    this.props.onChange(newValue);
    return true;
  };

  closeMenu = () => {
    if (!this.props.closeOnBlur) {
      this.setState({ menuIsOpen: false });
      this.select.current.inputRef.blur();
    }
  };

  onClickout = () => {
    if (!this.props.closeOnBlur && this.state.menuIsOpen) {
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
    return dataSource.getOptions(inputValue).then((options: Option[]) => {
      const value = [];
      options.forEach(o => {
        if (propValue && propValue.some((e) => e === o.value)) {
          value.push(o);
        }
      });
      this.setState({
        value
      });
      return options;
    });
  };

  setOptions = () => {
    const { value: stateValue } = this.state;
    const { value: propValue, dataSource } = this.props;

    if (Array.isArray(dataSource.getOptions) && propValue && !stateValue) {
      const newValues = (options) => {
        const values = [];
        options.forEach(o => {
          if (propValue && propValue.some((e) => e === o.value)) {
            values.push(o);
          }
          if (o.children && o.children.length) {
            const childrenValues = newValues(o.children);
            values.push(...childrenValues);
          }
        });
        return values;
      }

      const newValue = newValues(dataSource.getOptions);
      this.setState({
        value: newValue
      });
    }
  };

  render() {
    const {
      name, dataSource, isClearable, isSearchable, value: propValue, ...props
    } = this.props;
    const { value: stateValue, options } = this.state;

    if (Array.isArray(dataSource.getOptions)) {
      return (
        <>
          <div
            className='react-select__dropdown-multi_clickout'
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: this.state.menuIsOpen ? 'block' : 'none',
            }}
            onClick={this.onClickout}
          />
          <ReactSelect
            ref={this.select}
            name={name}
            isClearable={isClearable}
            isSearchable={isSearchable}
            hideSelectedOptions={false}
            components={{
              SelectContainer,
              Option,
              DropdownIndicator: dropdownProps => (
                <DropdownIndicator closeMenu={this.closeMenu} {...dropdownProps} />
              )
            }}
            menuIsOpen={this.state.menuIsOpen}
            options={options}
            classNamePrefix="react-select"
            placeholder={this.i18n.select}
            isMulti
            {...props}
            className="react-select-multi"
            value={stateValue}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onChange={this.onChange}
          />
        </>
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

interface MultipleDropDownProps extends FieldProps {
  handleChange: (value: any) => void;
  dataSource: DataSource;
}

class MultipleDropDown extends Field<MultipleDropDownProps> {
  static defaultProps = {
    ...Field.defaultProps,
    closeOnBlur: true,
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
    const { name } = this.props;
    form.setFieldValue(name, value);
    this.props.handleChange(value);
  };

  renderField({ form }) {
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

export default MultipleDropDown;
