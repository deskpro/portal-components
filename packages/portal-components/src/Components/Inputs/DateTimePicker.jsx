import React from 'react';
import SVGInline from 'react-svg-inline';
import dateTimeIcon from 'assets/date-time.svg';
import moment from 'moment/moment';
import { getIn } from 'formik/dist/formik';
import DatePicker from './DatePicker';
import Field from '../Field';

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

  renderIcon = () => <SVGInline svg={dateTimeIcon} />;
}

DatePicker.defaultProps = {
  ...Field.defaultProps,
  format: 'DD/MM/Y HH:mm'
};

export default DateTimePicker;
