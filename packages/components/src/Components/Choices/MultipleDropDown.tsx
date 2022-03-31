import * as React from 'react';
import { getIn } from 'formik';
import ReactSelect from 'react-select';
import AsyncSelect from 'react-select/async';
import { SelectContainer, DropdownIndicator } from './DropDown';
import Field, { FieldProps } from '../Field';
import { OptionProps } from "react-select/dist/declarations/src/components/Option";
import type { DataSource } from "../../types/dataSource";
import type { Option } from "../../types/options";
import classNames from "classnames";
import { css } from "@emotion/css";

const Option = (props: OptionProps) => {
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

interface MultipleDropDownInputProps extends MultipleDropDownProps {
  onChange:     (value: any) => void;
  value:        string[];
  closeOnBlur?: boolean;
}

interface MultipleDropDownInputState {
  value:      Option;
  menuIsOpen: boolean;
}

export class MultipleDropDownInput extends React.Component<MultipleDropDownInputProps, MultipleDropDownInputState> {
  static defaultProps = {
    onBlur() {},
    onFocus() {},
  };
  private select: React.RefObject<any>;

  constructor(props) {
    super(props);
    this.select = React.createRef();

    this.state = {
      value:      null,
      menuIsOpen: false
    };
  }

  onChange = (value) => {
    this.setState({
      value
    });
    const newValue = value ? value.map(e => e.value) : null;
    this.props.onChange(newValue);
  };

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

  closeMenu = () => {
    if (!this.props.closeOnBlur) {
      this.setState({ menuIsOpen: false });
      // @TODO fix that
      //this.select.current.select.blurInput();
    }
  };

  loadOptions = (inputValue) => {
    const { dataSource } = this.props;
    const propValue = this.props.value;
    if (Array.isArray(dataSource.getOptions)) {
      return dataSource.getOptions;
    }
    return dataSource.getOptions(inputValue).then((options: Option[]) => {
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
          ref={this.select}
          value={
            dataSource.getOptions.filter(o => value && value.includes(o.value))
          }
          name={name}
          menuIsOpen={this.state.menuIsOpen}
          isClearable={false}
          options={dataSource.getOptions}
          hideSelectedOptions={false}
          components={{
            SelectContainer,
            Option,
            DropdownIndicator: dropdownProps => (
              <DropdownIndicator closeMenu={this.closeMenu} {...dropdownProps} />
            )
          }}
          classNamePrefix="react-select"
          isMulti
          {...props}
          className="react-select-multi"
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
    onBlur() {},
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
