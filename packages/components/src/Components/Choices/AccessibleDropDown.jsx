import React from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';
import Autocomplete from 'accessible-autocomplete/react';
import 'accessible-autocomplete/dist/accessible-autocomplete.min.css';
import Field from '../Field';

export class AccessibleDropDownInput extends React.Component {
  static propTypes = {
    dataSource: PropTypes.shape({
      getOptions: PropTypes.oneOfType([PropTypes.func, PropTypes.array]).isRequired,
    }).isRequired,
    onChange:      PropTypes.func.isRequired,
    showAllValues: PropTypes.bool,
    value:         PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };

  static defaultProps = {
    showAllValues: true,
    value:         null
  }

  getSource = (query, populateResults) => {
    const { dataSource } = this.props;
    if (Array.isArray(dataSource.getOptions)) {
      populateResults(query ? dataSource.getOptions.filter(result => result.label.toLowerCase().indexOf(query.toLowerCase()) !== -1)
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
    this.props.onChange(value);
  }

  render() {
    const {
      name, dataSource, value, showAllValues, ...props
    } = this.props;

    return (
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
    );
  }
}

class AccessibleDropDown extends Field {
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
      <AccessibleDropDownInput
        onBlur={() => this.onBlur(form)}
        onChange={value => this.onChange(form, value)}
        value={getIn(form.values, this.props.name)}
        {...this.props}
      />
    );
  }
}

AccessibleDropDown.propTypes = {
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

AccessibleDropDown.defaultProps = {
  handleChange() {},
  isClearable:  false,
  isSearchable: true,
  onBlur() {},
  onFocus() {},
};

export default AccessibleDropDown;
