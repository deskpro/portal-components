import moment from 'moment';

export const required = (value) => {
  let message;
  if (!value) {
    message = 'Field is required';
  }
  return message;
};

export const min = (value, minValue) => {
  let message;
  if (value && value < minValue) {
    message = `Value should be greater then ${minValue}`;
  }
  return message;
};

export const max = (value, maxValue) => {
  let message;
  if (value && value > maxValue) {
    message = `Value should be less then ${maxValue}`;
  }
  return message;
};

export const maxLength = (value, lengthValue) => {
  let message;
  if (!value) {
    return message;
  }
  if (Array.isArray(value) && value.length > lengthValue) {
    message = `You should select maximum ${lengthValue} items`;
  } else if (String(value).length > lengthValue) {
    message = `You should specify up to ${lengthValue} symbols`;
  }
  return message;
};

export const minLength = (value, lengthValue) => {
  let message;
  if (!value) {
    return message;
  }
  if (Array.isArray(value) && value.length < lengthValue) {
    message = `You should select at least ${lengthValue} items`;
  } else if (String(value).length < lengthValue) {
    message = `You should specify at least ${lengthValue} symbols`;
  }
  return message;
};

export const regex = (value, pattern) => {
  let message;
  if (value && !new RegExp(pattern).test(String(value))) {
    message = `Value does not match the pattern "${pattern}"`;
  }
  return message;
};

export const dateRange = (value, from, to, ...args) => {
  let message;
  if (!value) {
    return message;
  }
  if (from && to) {
    if (!moment(value).isBetween(from, to, ...args)) {
      message = `Date should be between ${from} and ${to}`;
    }
  } else if (to) {
    if (!moment(value).isBefore(to, ...args)) {
      message = `Date should be before ${to}`;
    }
  } else if (!moment(value).isAfter(from, ...args)) {
    message = `Date should be after ${from || 'now'}`;
  }

  return message;
};
