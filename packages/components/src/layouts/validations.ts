import {isAfter, isBefore, isDate, isWithinInterval, parse as dateParse} from 'date-fns';


const formatError = (message, params) => {
  if (typeof message === 'string') {
    return message.replace(/\{\s*(\w+)\s*\}/g, (_, key) => params[key]);
  }
  return message;
};

export const required = (value, _, message = 'Field is required') => !value && formatError(message, { value });

export const min = (value, [minValue], message = 'Value should be greater then {minValue}') =>
  value && value < minValue && formatError(message, { value, minValue });

export const max = (value, [maxValue], message = 'Value should be less then {maxValue}') =>
  value && value > maxValue && formatError(message, { value, maxValue });

export const maxLength = (value, [lengthValue], defaultMessage) => {
  let message;
  if (!value) {
    return message;
  }
  if (Array.isArray(value) && value.length > lengthValue) {
    message = defaultMessage || 'You should select maximum {lengthValue} items';
  } else if (String(value).length > lengthValue) {
    message = defaultMessage || 'You should specify up to {lengthValue} symbols';
  }
  return formatError(message, { value, lengthValue });
};

export const minLength = (value, [lengthValue], defaultMessage) => {
  let message;
  if (!value) {
    return message;
  }
  if (Array.isArray(value) && value.length < lengthValue) {
    message = defaultMessage || 'You should select at least {lengthValue} items';
  } else if (String(value).length < lengthValue) {
    message = defaultMessage || 'You should specify at least {lengthValue} symbols';
  }
  return formatError(message, { value, lengthValue });
};

export const regex = (value, [pattern], message = 'Value does not match the pattern "{pattern}"') =>
  value && !new RegExp(pattern).test(String(value)) && formatError(message, { value, pattern });

export const dateRange = (value, [from, to], defaultMessage) => {
  let message;
  if (!value) {
    return undefined;
  }
  const params = { value, from, to };
  let date = value;
  if (!isDate(date)) {
    date = dateParse(value, 'yyyy-MM-dd', new Date());
  }
  const dateFrom = from ? dateParse(from, 'yyyy-MM-dd', new Date()) : new Date();
  const dateTo = dateParse(to, 'yyyy-MM-dd', new Date());
  if (from && to) {
    if (!isWithinInterval(date, { start: dateFrom, end: dateTo})) {
      message = defaultMessage || 'Date should be between {from} and {to}';
    }
  } else if (to) {
    if (!isBefore(date, dateTo)) {
      message = defaultMessage || 'Date should be before {to}';
    }
  } else if (!isAfter(date, dateFrom)) {
    message = defaultMessage || 'Date should be after {from}';
    if (!from) {
      params.from = 'now';
    }
  }

  return formatError(message, params);
};
