import { toSnakeCase } from '@deskpro/js-utils/dist/strings';

// eslint-disable-next-line func-names
class DynamicForm {
  static filterField = (field, form) => {
    const criteria = field.getIn(['options', 'criteria'], null);
    if (criteria === null) {
      return true;
    }
    const mode = criteria.get('mode', 'all');
    if (mode === 'any') {
      return criteria.get('terms').some((term) => {
        const value = DynamicForm.getValue(term, form);
        return DynamicForm.validate(value, term);
      });
    }
    return criteria.get('terms').every((term) => {
      const value = DynamicForm.getValue(term, form);
      return DynamicForm.validate(value, term);
    });
  };

  static getValue = (term, form) => {
    if (term.get('type').startsWith('CheckTicketField')) {
      const fieldName = toSnakeCase(term.get('type')).replace('check_', '').replace(/(\d+)/, '_$1');
      if (Object.prototype.hasOwnProperty.call(form.values, fieldName)) {
        return form.values[fieldName];
      }
    }
    return false;
  };

  static validate = (value, term) => {
    const typeName = term.getIn(['options', 'type_name']);
    const targetValue = term.getIn(['options', 'value']);
    let re;
    switch (term.get('op')) {
      case 'is':
        if (typeName === 'choice') {
          return targetValue.indexOf(value) !== -1;
        }
        return targetValue === value;
      case 'not':
        if (typeName === 'choice') {
          return targetValue.indexOf(value) === -1;
        }
        return targetValue !== value;
      case 'isset':
        return value !== null && typeof value !== 'undefined';
      case 'not_isset':
        return value === null || typeof value === 'undefined';
      case 'is_regex':
        re = new RegExp(targetValue);
        return value.match(re);
      case 'not_regex':
        re = new RegExp(targetValue);
        return !value.match(re);
      case 'contains':
        return value.includes(targetValue);
      case 'not_contains':
        return !value.includes(targetValue);
      case 'lte':
        return true;
      case 'gte':
        return true;
      case 'between':
        return true;
      default:
        return false;
    }
  }
}

export default DynamicForm;
