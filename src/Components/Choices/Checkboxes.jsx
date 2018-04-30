import React from 'react';
import PropTypes from 'prop-types';
import newid from '@deskpro/js-utils/dist/newid';
import { FieldArray, getIn } from 'formik';
import Field from '../Field';

class Checkboxes extends Field {
  constructor(props) {
    super(props);
    this.type = 'checkbox';
  }

  renderField = (form) => {
    const {
      name, id, label, options, ...props
    } = this.props;
    let htmlId = id;
    if (typeof htmlId  === 'undefined') {
      htmlId = newid();
    }
    return (
      <FieldArray
        name={name}
        render={arrayHelpers => (
          <div {...props}>
            {options.map(option => (
              <div key={option.value}>
                <label htmlFor={`${htmlId}-${option.value}`}>
                  <input
                    id={`${htmlId}-${option.value}`}
                    name={name}
                    type="checkbox"
                    value={option.value}
                    checked={form.values[name].includes(option.value)}
                    onChange={(e) => {
                      if (e.target.checked) arrayHelpers.push(option.value);
                      else {
                        const idx = getIn(form.values, name).indexOf(option.value);
                        arrayHelpers.remove(idx);
                      }
                    }}
                  />{' '}
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        )}
      />
    );
  }
}

Checkboxes.propTypes = Object.assign(Field.propTypes, {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    value: PropTypes.any.isRequired
  }))
});

export default Checkboxes;
