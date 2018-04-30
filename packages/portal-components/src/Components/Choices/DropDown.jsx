import React from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';
import ReactSelect from 'react-select';

import Field from '../Field';

class Select extends Field {
  handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched.topcis
    this.props.onBlur('topics', true);
  };

  renderField = (form) => {
    const { name, options, ...props } = this.props;
    return (
      <ReactSelect
        value={getIn(form.values, name)}
        name={name}
        onChange={value => form.setFieldValue(name, value)}
        onBlur={value => form.setFieldTouched(name, value)}
        options={options}
        {...props}
      />
    );
  }
}

Select.propTypes = Object.assign(Field.propTypes, {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    value: PropTypes.any.isRequired
  }))
});

export default Select;
