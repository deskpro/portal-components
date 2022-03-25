import { isEqual } from 'lodash';
import type { ConditionOp } from "../types/conditions";

const conditions: Record<ConditionOp, (a: any, b: any) => boolean> = {
  eq:  isEqual,
  gt:  (a, b) => a > b,
  gte: (a, b) => a >= b,
  lt:  (a, b) => a < b,
  lte: (a, b) => a <= b,
  in:  (value, arr) => arr.includes(value)
};

export default conditions;
