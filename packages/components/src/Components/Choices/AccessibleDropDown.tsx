import * as React from 'react';
import { getIn } from 'formik';
import Autocomplete from 'accessible-autocomplete/react';
// import 'accessible-autocomplete/dist/accessible-autocomplete.min.css';
import Field, { FieldProps } from '../Field';
import type { DataSource } from "../../types/dataSource";

interface AccessibleDropDownInputProps extends FieldProps {
  dataSource: DataSource;
  value: string;
  showAllValues: boolean;
  onChange: (value: string) => void;
}

interface AccessibleDropDownInputState {
  children: string[];
}

export class AccessibleDropDownInput extends React.Component<AccessibleDropDownInputProps, AccessibleDropDownInputState> {
  static defaultProps = {
    showAllValues: true,
    value:         '',
    onChange() {}
  }

  constructor(props) {
    super(props);
    this.state = {
      children: []
    };
  }

  getSource = (query, populateResults) => {
    const { dataSource } = this.props;
    if (Array.isArray(dataSource.getOptions)) {
      populateResults(query
        ? dataSource.getOptions.filter(result => result.label.toLowerCase().indexOf(query.toLowerCase()) !== -1)
        : dataSource.getOptions);
    }
  }

  getInputValue = (value) => {
    if (value) {
      return value.label;
    }
    return '';
  }

  getDropdownArrow = () => <span className="dp-react-select__dropdown-indicator" />;

  handleConfirm = (value) => {
    const { onChange } = this.props;

    if (value && value.children) {
      this.setState({
        children: value.children
      });
    } else {
      onChange(value);
    }
  }

  handleChildrenChange = (value) => {
    const { onChange } = this.props;
    onChange(value);
  }

  render() {
    const {
      name, dataSource, value, showAllValues, ...props
    } = this.props;
    const { children } = this.state;

    console.log(Autocomplete)
    return (
      <>
        <Autocomplete
          showAllValues
          onConfirm={this.handleConfirm}
          displayMenu="overlay"
          source={this.getSource}
          defaultValue={value}
          dropdownArrow={this.getDropdownArrow}
          templates={{
            inputValue: this.getInputValue,
            suggestion: this.getInputValue
          }}
          {...props}
        />
        {children.length > 0
          ? (
            <div className="children">
              <AccessibleDropDownInput
                dataSource={{ getOptions: children }}
                onChange={this.handleChildrenChange}
              />
            </div>
          )
          : null}
      </>
    );
  }
}

interface AccessibleDropDownProps extends FieldProps {
  handleChange: (value: any) => void;
  dataSource: DataSource
}

class AccessibleDropDown extends Field<AccessibleDropDownProps> {
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
      <AccessibleDropDownInput
        onBlur={() => this.onBlur(form)}
        onChange={value => this.onChange(form, value)}
        value={getIn(form.values, this.props.name)}
        {...this.props}
      />
    );
  }
}

export default AccessibleDropDown;
