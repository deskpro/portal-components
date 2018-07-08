import _get from 'lodash/get';
import conditions from './conditions';

export class LayoutField {
  constructor(fieldConfig) {
    Object.entries(fieldConfig).forEach(([key, value]) => {
      this[key] = value;
    });
  }

  get(path, defaultValue) {
    return _get(this, path, defaultValue);
  }

  validate(value) {
    if (Array.isArray(this.validation) && this.validation.length) {
      return value;
    }
    return null;
  }
}

export class Layout {
  constructor({ rules = [], fields }) {
    this.rules = rules;
    this.fields = fields.map(fieldConfig => new LayoutField(fieldConfig));
  }

  isMatchRules(values) {
    if (!this.rules || !this.rules.length) {
      return true;
    }

    return this.rules.reduce(
      (isValid, { field, op, value }) => isValid && op in conditions && conditions[op](values[field], value),
      true
    );
  }

  getDefaultValues() {
    return this.fields.reduce((defaults, { name, defaultValue = '' }) => ({ ...defaults, [name]: defaultValue }), {});
  }
}

export class LayoutConfig {
  constructor(layouts) {
    this.layouts = layouts.map(layout => new Layout(layout));
  }

  getMatchingLayout(values = {}) {
    return this.layouts.find(layout => layout.isMatchRules(values));
  }
}
