import React from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';
import { getIn } from 'formik/dist/formik';

import Field from '../Field';

class DatePicker extends Field {
  handleChange(date, form) {
    form.setFieldValue(this.props.name, date.format(this.props.format));
  }

  renderField = (form) => {
    const { name, ...props } = this.props;
    return (
      <ReactDatePicker
        value={getIn(form.values, name)}
        name={name}
        onChange={value => this.handleChange(value, form)}
        onBlur={() => form.setFieldTouched(name, true)}
        {...props}
      />
    );
  }
}

DatePicker.propTypes = {
  ...Field.propTypes,
  format: PropTypes.string,
};

DatePicker.defaultProps = {
  ...Field.defaultProps,
  format: 'DD/MM/Y'
};

export default DatePicker;
