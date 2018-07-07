const conditions = {
  eq:  (a, b) => a === b,
  gt:  (a, b) => a > b,
  gte: (a, b) => a >= b,
  lt:  (a, b) => a < b,
  lte: (a, b) => a <= b,
  in:  (value, arr) => arr.includes(value)
};

export default conditions;
