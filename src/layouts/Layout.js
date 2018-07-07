import _get from 'lodash/get';
import conditions from './conditions';

export default class Layout {
  constructor(layout) {
    this.layout = layout.map((item) => {
      if ('fields' in item && item.fields.length) {
        return {
          ...item,
          fields: item.fields.map(fieldConfig => ({
            ...fieldConfig,
            get(path, defaultValue) {
              return _get(fieldConfig, path, defaultValue);
            }
          }))
        };
      }
      return item;
    });
  }

  getMatchingLayout(values) {
    return this.layout.find(({ rules = [] }) => {
      if (!rules || !rules.length) {
        return true;
      }

      return rules.reduce((isValid, { field, op, value }) => isValid && op in conditions && conditions[op](values[field], value), true);
    });
  }
}
