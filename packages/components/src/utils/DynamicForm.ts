import { toSnakeCase } from '@deskpro/js-utils/dist/strings';
import { fromUnixTime, subDays, subWeeks, subHours, subMinutes, subMonths, subYears, parse } from 'date-fns';

const builtIn = {
  CheckProduct: {
    value: 'product',
    targetValues: 'product_ids',
  },
  CheckDepartment: {
    value: 'department',
    targetValues: 'department_ids',
  },
  CheckCategory: {
    value: 'category',
    targetValues: 'category_ids',
  },
  CheckPriority: {
    value: 'priority',
    targetValues: 'priority_ids',
  },
};

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
    const type = term.get('type', '');
    if (type.startsWith('CheckTicketField')) {
      const fieldName = toSnakeCase(term.get('type')).replace('check_', '').replace(/(\d+)/, '_$1');
      if (Object.prototype.hasOwnProperty.call(form.values, fieldName)) {
        return form.values[fieldName];
      }
    }
    switch (type) {
      case 'CheckProduct':
      case 'CheckDepartment':
      case 'CheckCategory':
      case 'CheckPriority':
        return form.values[builtIn[type].value];
      default:
        return false;
    }
  };

  static getDate = (term, index = 1) => {
    if (term.getIn(['options', `date${index}`], false)) {
      return fromUnixTime(term.getIn(['options', `date${index}`]));
    }
    if (term.getIn(['options', `date${index}_relative`])) {
      const diff = term.getIn(['options', `date${index}_relative`]);
      const now = new Date();
      switch (term.getIn(['options', `date${index}_relative_type`])) {
        case 'minutes':
          return subMinutes(now, diff);
        case 'hours':
          return subHours(now, diff);
        case 'days':
          return subDays(now, diff);
        case 'weeks':
          return subWeeks(now, diff);
        case 'months':
          return subMonths(now, diff);
        case 'years':
          return subYears(now, diff);
        default:
          break;
      }
    }
    return false;
  };

  static validate = (value, term) => {
    const typeName = term.getIn(['options', 'type_name']);
    let targetValue = term.getIn(['options', 'value']);
    const type = term.get('type', '');
    const op = term.get('op');
    let re;
    switch (type) {
      case 'CheckProduct':
      case 'CheckDepartment':
      case 'CheckCategory':
      case 'CheckPriority':
        if (op === 'is') {
          return term.getIn(['options', builtIn[type].targetValues]).indexOf(value.toString()) !== -1;
        }
        return term.getIn(['options', builtIn[type].targetValues]).indexOf(value.toString()) === -1;
      default:
        break;
    }

    if (typeName === 'number') {
      value = parseInt(value, 10);
    }

    switch (op) {
      case 'is':
        if (typeName === 'choice') {
          return targetValue.findIndex(immVal => immVal === value || `${immVal}` === `${value}`) !== -1;
        }
        return targetValue === value;
      case 'not':
        if (typeName === 'choice') {
          return targetValue.findIndex(immVal => immVal === value || `${immVal}` === `${value}`) === -1;
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
      case 'gte':
      case 'between': {
        if (!value) {
          return false;
        }
        if (typeName === 'date' || typeName === 'datetime') {
          value = parse(value, 'dd/MM/yyyy', new Date());
          targetValue = DynamicForm.getDate(term);
        }
        if (op === 'lte') {
          return value <= targetValue;
        }
        if (op === 'gte') {
          return value >= targetValue;
        }
        const targetDate2 = DynamicForm.getDate(term, 2);
        return value >= targetValue && value <= targetDate2;
      }
      default:
        return false;
    }
  }
}

export default DynamicForm;
