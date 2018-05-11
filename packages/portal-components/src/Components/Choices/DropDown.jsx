import React from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';
import ReactSelect from 'react-select';

import Field from '../Field';

class DropDown extends Field {
  renderField = (form) => {
    const { name, options, ...props } = this.props;
    return (
      <ReactSelect
        value={getIn(form.values, name)}
        name={name}
        onChange={value => form.setFieldValue(name, value)}
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
  }))
};

export default DropDown;
