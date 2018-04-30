import React from 'react';
import PropTypes from 'prop-types';
import { Field as FormikField, getIn } from 'formik';
import { objectKeyFilter } from '@deskpro/js-utils/dist/objects';
import Field from '../Field';

class Checkbox extends Field {
  constructor(props) {
    super(props);
    this.type = 'checkbox';
  }

  renderField = (form) => {
    const {
      name, id, label, ...props
    } = this.props;
    return (
      <label htmlFor={id}>
        <FormikField
          id={id}
          type="checkbox"
          name={name}
          checked={getIn(form.values, name)}
          {...objectKeyFilter(props, Field.propTypes)}
        />
        {label}
      </label>
    );
  }
}

Checkbox.propTypes = Object.assign(Field.propTypes, {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
});

export default Checkbox;
