import _isEqual from 'lodash/isEqual';

const conditions = {
  eq:  _isEqual,
  gt:  (a, b) => a > b,
  gte: (a, b) => a >= b,
  lt:  (a, b) => a < b,
  lte: (a, b) => a <= b,
  in:  (value, arr) => arr.includes(value)
};

export default conditions;
