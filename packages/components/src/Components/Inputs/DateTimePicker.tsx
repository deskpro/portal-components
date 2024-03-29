import * as React from 'react';
import DateTimeIcon from '../../tsx-assets/DateTime';
import { parse as dateParse } from 'date-fns';
import { getIn } from 'formik';
import DatePicker from './DatePicker';
import Field from '../Field';

class DateTimePicker extends DatePicker {
  static defaultProps = {
    ...Field.defaultProps,
    format: 'dd/MM/yyyy HH:mm'
  }

  getProps = (form) => {
    const {
      format,
      name,
      className,
      ...props
    } = this.props;
    let openToDate = new Date();
    if (getIn(form.values, name)) {
      openToDate = dateParse(getIn(form.values, name), format, new Date());
    }
    return {
      name,
      openToDate,
      value:              getIn(form.values, name),
      onChange:           value => this.handleChange(value, form),
      onClickOutside:     () => {},
      onBlur:             () => this.handleBlur(form),
      onFocus:            this.handleFocus,
      className:          'dp-pc_date-picker_input',
      showMonthDropdown:  true,
      showYearDropdown:   true,
      dropdownMode:       'select',
      showTimeSelect:     true,
      timeCaption:        'time',
      timeFormat:         'HH:mm',
      dateFormat:         format,
      preventOpenOnFocus: true,
      assumeNearbyYear:   true,
      locale:             'en',
      ...props
    };
  };

  renderIcon = () => <DateTimeIcon />;
}

export default DateTimePicker;
