import moment from 'moment';

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

export const dateRange = (value, [from, to, ...args], defaultMessage) => {
  let message;
  if (!value) {
    return message;
  }
  const params = { value, from, to };
  if (from && to) {
    if (!moment(value).isBetween(from, to, ...args)) {
      message = defaultMessage || 'Date should be between {from} and {to}';
    }
  } else if (to) {
    if (!moment(value).isBefore(to, ...args)) {
      message = defaultMessage || 'Date should be before {to}';
    }
  } else if (!moment(value).isAfter(from, ...args)) {
    message = defaultMessage || 'Date should be after {from}';
    if (!from) {
      params.from = 'now';
    }
  }

  return formatError(message, params);
};
