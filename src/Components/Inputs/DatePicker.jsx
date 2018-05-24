import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import moment from 'moment-hijri';
import ReactDatePicker from '@deskpro/react-datepicker-hijri';
import SVGInline from 'react-svg-inline';
import { getIn } from 'formik/dist/formik';
import calendarIcon from 'assets/calendar.svg';

import Field from '../Field';

class DatePicker extends Field {
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
    form.setFieldValue(this.props.name, date.format(this.props.format));
  }

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
      ...props
    };
  };

  renderIcon = () => <SVGInline svg={calendarIcon} />;

  renderLabel = () => {
    const {
      label,
    } = this.props;
    const htmlFor = this.id;
    /* eslint-disable jsx-a11y/label-has-for */
    return (
      <label className="dp-pc_label dp-pc_date-picker_label" htmlFor={htmlFor}>
        {label}
      </label>
    );
    /* eslint-enable jsx-a11y/label-has-for */
  };

  renderField = (form) => {
    const { className } = this.props;
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

DatePicker.propTypes = {
  ...Field.propTypes,
  format: PropTypes.string,
};

DatePicker.defaultProps = {
  ...Field.defaultProps,
  format: 'DD/MM/Y'
};

export default DatePicker;
