import React from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';

import newid from '@deskpro/js-utils/dist/newid';
import Field from '../Field';

class Radio extends Field {
  handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched.topcis
    this.props.onBlur('topics', true);
  };

  renderField = (form) => {
    const {
      name, id, options, ...props
    } = this.props;
    let htmlId = id;
    if (typeof htmlId  === 'undefined') {
      htmlId = newid();
    }
    const value = getIn(form.values, name);
    return (
      <div {...props}>
        {options.map(option => (
          <div key={option.value}>
            <label htmlFor={`${htmlId}-${option.value}`}>
              <input
                id={`${htmlId}-${option.value}`}
                name={name}
                type="radio"
                value={option.value}
                checked={value === option.value}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />{' '}
              {option.label}
            </label>
          </div>
        ))}
      </div>
    );
  }
}

Radio.propTypes = Object.assign(Field.propTypes, {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    value: PropTypes.any.isRequired
  }))
});

export default Radio;
