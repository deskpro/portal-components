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
    /* eslint-disable jsx-a11y/label-has-for */
    /* eslint-disable jsx-a11y/no-noninteractive-tabindex */
    return (
      <div className="dp-pc_checkbox">
        <FormikField
          id={id}
          type="checkbox"
          name={name}
          checked={getIn(form.values, name)}
          {...objectKeyFilter(props, Field.propTypes)}
        />
        <label htmlFor={this.id} tabIndex="0" className="dp-pc_checkbox__checkbox" />
        <label htmlFor={id} className="dp-pc_checkbox__label">
          {label}
        </label>
      </div>
    );
    /* eslint-enable jsx-a11y/label-has-for */
    /* eslint-enable jsx-a11y/no-noninteractive-tabindex */
  };

  renderLabel = () => null;
}

Checkbox.propTypes = Object.assign(Field.propTypes, {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
});

export default Checkbox;
