import type { PracticeProblem } from '../../problemTypes';
import exactJavascriptSolution from './solutions/exact.js?raw';
import exactTypescriptSolution from './solutions/exact.ts?raw';
import typeofJavascriptSolution from './solutions/typeof.js?raw';
import typeofTypescriptSolution from './solutions/typeof.ts?raw';

export const typeUtilitiesProblem: PracticeProblem = {
  id: 'typeUtilities',
  title: 'Type Utilities',
  difficulty: 'Easy',
  description: 'JavaScript is dynamically typed, so interview problems that recurse over mixed values often need precise runtime type checks before deciding how to handle each value.\n\nImplement the following utility functions for primitive values: `isBoolean(value)`, `isNumber(value)`, `isNull(value)`, `isString(value)`, `isSymbol(value)`, and `isUndefined(value)`.\n\n`isNumber` should return `true` for every number value, including `NaN`. `isString` should only return `true` for string primitives. `isSymbol` should only return `true` for symbol primitives. `null` and `undefined` should be checked precisely, not with loose equality.',
  examples: [
    {
      input: '`isBoolean(false)`',
      output: '`true`',
    },
    {
      input: '`isNumber(NaN)`',
      output: '`true`',
    },
    {
      input: '`isNull(null)`',
      output: '`true`',
    },
    {
      input: '`isUndefined(undefined)`',
      output: '`true`',
    },
    {
      input: '`isString(new String(\'x\'))`',
      output: '`false`',
    }
  ],
  points: [
    '`isBoolean(value)`: Returns whether `value` is a boolean primitive.',
    '`isNumber(value)`: Returns whether `value` is a number, including `NaN`.',
    '`isNull(value)`: Returns whether `value` is exactly `null`.',
    '`isString(value)`: Returns whether `value` is a string primitive.',
    '`isSymbol(value)`: Returns whether `value` is a symbol primitive.',
    '`isUndefined(value)`: Returns whether `value` is exactly `undefined`.',
  ],
  solutions: [
    {
      title: 'Exact Checks',
      javascript: exactJavascriptSolution.trim(),
      typescript: exactTypescriptSolution.trim(),
    },
    {
      title: 'Typeof Checks',
      javascript: typeofJavascriptSolution.trim(),
      typescript: typeofTypescriptSolution.trim(),
    },
  ],
};
