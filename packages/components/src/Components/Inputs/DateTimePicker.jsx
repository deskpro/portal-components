import React from 'react';
import DateTimeIcon from 'assets/date-time.svg';
import moment from 'moment-hijri';
import { getIn } from 'formik';
import DatePicker from './DatePicker';
import Field from '../Field';

moment.locale('en');

class DateTimePicker extends DatePicker {
  getProps = (form) => {
    const { name, className, ...props } = this.props;
    let openToDate = null;
    if (getIn(form.values, name)) {
      openToDate = moment(getIn(form.values, name), this.props.format);
    }
    return {
      value:             getIn(form.values, name),
      name,
      openToDate,
      onChange:          value => this.handleChange(value, form),
      onBlur:            () => this.handleBlur(form),
      onFocus:           this.handleFocus,
      className:         'dp-pc_date-picker_input',
      showMonthDropdown: true,
      showYearDropdown:  true,
      dropdownMode:      'select',
      showTimeSelect:    true,
      timeCaption:       'time',
      timeFormat:        'HH:mm',
      ...props
    };
  };

  renderIcon = () => <DateTimeIcon />;
}

DateTimePicker.defaultProps = {
  ...Field.defaultProps,
  format: 'DD/MM/YYYY HH:mm'
};

export default DateTimePicker;
