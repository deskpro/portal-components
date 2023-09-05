import * as React from 'react';
import classNames from 'classnames';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import en from 'date-fns/locale/en-US';
import { format as dateFormat, parse as dateParse } from 'date-fns';
import { getIn } from 'formik';
import CalendarIcon from '../../tsx-assets/Calendar';

import Field, { FieldProps, FieldState } from '../Field';

registerLocale('en', en);

interface DatePickerProps extends FieldProps {
  calendar: string;
  format:   string;
}

interface DatePickerState extends FieldState {
  focused: boolean;
}

class DatePicker extends Field<DatePickerProps, DatePickerState> {
  static defaultProps = {
    ...Field.defaultProps,
    format: 'dd/MM/yyyy'
  }

  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
  }

  handleBlur = (form) => {
    const { name } = this.props;
    form.setFieldTouched(name, true);
    this.setState({
      focused: false
    });
  };

  handleFocus = () => {
    this.setState({
      focused: true
    });
  };

  handleChange(date, form) {
    form.setFieldValue(this.props.name, dateFormat(date, this.props.format));
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
      onBlur:             () => this.handleBlur(form),
      onClickOutside:     () => this.handleBlur(form),
      onFocus:            this.handleFocus,
      className:          'dp-pc_date-picker_input',
      showMonthDropdown:  true,
      showYearDropdown:   true,
      dropdownMode:       'select',
      preventOpenOnFocus: true,
      assumeNearbyYear:   true,
      dateFormat:         format,
      locale:             'en',
      ...props
    };
  };

  renderIcon = () => <CalendarIcon />;

  renderLabel = () => {
    const {
      label,
    } = this.props;
    const htmlFor = this.id;
    return (
      <label className="dp-pc_label dp-pc_date-picker_label" htmlFor={htmlFor}>
        {label}
      </label>
    );
  };

  renderField = ({ form }) => {
    const { className } = this.props;
    console.log('props', this.getProps(form));
    return (
      <div className={classNames('dp-pc_date-picker', { focused: this.state.focused }, className)}>
        {this.renderIcon()}
        <ReactDatePicker
          {...this.getProps(form)}
        />
      </div>
    );
  }
}

export default DatePicker;
