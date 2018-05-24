import React from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';
import ReactSelect from 'react-select';

import Field from '../Field';

class DropDown extends Field {
  handleChange = (form, value) => {
    const { name, handleChange } = this.props;
    form.setFieldValue(name, value.value);
    handleChange(value.value);
  };

  renderField = (form) => {
    const { name, options, ...props } = this.props;
    return (
      <ReactSelect
        value={getIn(form.values, name)}
        name={name}
        onChange={value => this.handleChange(form, value)}
        onBlur={() => form.setFieldTouched(name, true)}
        options={options}
        {...props}
      />
    );
  }
}

DropDown.propTypes = {
  ...Field.propTypes,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    value: PropTypes.any.isRequired
  })),
  handleChange: PropTypes.func,
};

DropDown.defaultProps = {
  handleChange() {}
};

export default DropDown;
