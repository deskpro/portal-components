import React from 'react';
import PropTypes from 'prop-types';
import { Field, getIn } from 'formik';
import ReactSelect from 'react-select';

import Input from './Input';

class Select extends Input {
  handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched.topcis
    this.props.onBlur('topics', true);
  };

  renderField = () => {
    const { name, options, ...props } = this.props;
    return (
      <Field
        name={name}
        render={({ form }) => (
          <ReactSelect
            value={getIn(form.values, name)}
            name={name}
            onChange={value => form.setFieldValue(name, value)}
            onBlur={value => form.setFieldTouched(name, value)}
            options={options}
            {...props}
          />
        )}
      />
    );
  }
}

Select.propTypes = Object.assign(Input.propTypes, {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
  }))
});

export default Select;
