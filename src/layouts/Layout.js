import _get from 'lodash/get';
import conditions from './conditions';
import * as validations from './validations';

/**
 * Class with handlers for the layout's field.
 */
export class LayoutField {
  constructor(fieldConfig) {
    Object.entries(fieldConfig).forEach(([key, value]) => {
      this[key] = value;
    });

    // This is required in order this functions could be used as props
    // for the Field component.
    this.validate = this.validate.bind(this);
    this.get = this.get.bind(this);
  }

  get(path, defaultValue) {
    return _get(this, path, defaultValue);
  }

  /**
   * Validator handler campatible with formik's Field.
   * @param {any} valuen Form's field value.
   */
  validate(value) {
    if (Array.isArray(this.validation) && this.validation.length) {
      for (let i = 0; i < this.validation.length; i++) {
        const [ruleName, ...args] = this.validation[i].split(':');
        if (ruleName in validations) {
          const error = validations[ruleName](value, ...args);
          if (error) {
            return error;
          }
        }
      }
    }
    return undefined;
  }
}

/**
 * Wrapper for the layout variation.
 */
export class Layout {
  constructor({ rules = [], fields }) {
    this.rules = rules;
    this.fields = fields.map(fieldConfig => new LayoutField(fieldConfig));
  }

  /**
   * Checks if the layout's rules match form values.
   * @param {object} values Form values
   */
  isMatchRules(values) {
    if (!this.rules || !this.rules.length) {
      return true;
    }

    return this.rules.reduce(
      (isValid, { field, op, value }) => isValid && op in conditions && conditions[op](values[field], value),
      true
    );
  }

  /**
   * Returns default values of the layout's fields or empty string.
   */
  getDefaultValues() {
    return this.fields.reduce((defaults, { name, defaultValue = '' }) => ({ ...defaults, [name]: defaultValue }), {});
  }
}

/**
 * High-level wrapper for the layout variations configuration.
 */
export class LayoutConfig {
  constructor(layouts) {
    this.layouts = layouts.map(layout => new Layout(layout));
  }

  /**
   * Find matching layout.
   * @param {object} values Form values.
   */
  getMatchingLayout(values = {}) {
    return this.layouts.find(layout => layout.isMatchRules(values));
  }
}
