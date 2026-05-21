import type { PracticeProblem } from '../../problemTypes';
import builtInsJavascriptSolution from './solutions/built-ins.js?raw';
import builtInsTypescriptSolution from './solutions/built-ins.ts?raw';
import prototypeJavascriptSolution from './solutions/prototype.js?raw';
import prototypeTypescriptSolution from './solutions/prototype.ts?raw';

export const typeUtilities2Problem: PracticeProblem = {
  id: 'typeUtilities2',
  title: 'Type Utilities II',
  difficulty: 'Easy',
  description:
    'JavaScript values can contain non-primitive structures such as arrays, functions, and objects. Many recursive interview problems need precise checks for these types before choosing how to process a value.\n\nImplement the following utility functions for non-primitive values: `isArray(value)`, `isFunction(value)`, `isObject(value)`, and `isPlainObject(value)`.\n\n`isObject` should return `true` for objects, arrays, and functions, but should return `false` for `null` and `undefined`. `isPlainObject` should only return `true` for plain objects whose prototype is `Object.prototype` or `null`; it should return `false` for arrays, functions, dates, and other built-in instances.\n\nExamples:\n`isArray([])` returns `true`.\n`isFunction(() => {})` returns `true`.\n`isObject([])` returns `true`.\n`isObject(null)` returns `false`.\n`isPlainObject({})` returns `true`.\n`isPlainObject(Object.create(null))` returns `true`.\n`isPlainObject([])` returns `false`.',
  points: [
    '`isArray(value)`: Returns whether `value` is an array.',
    '`isFunction(value)`: Returns whether `value` is a function.',
    '`isObject(value)`: Returns whether `value` is object-like, including arrays and functions, but excluding `null` and `undefined`.',
    '`isPlainObject(value)`: Returns whether `value` is a plain object with prototype `Object.prototype` or `null`.',
    'Arrays, functions, dates, and other built-in instances should not count as plain objects.',
  ],
  solutions: [
    {
      title: 'Built-ins',
      javascript: builtInsJavascriptSolution.trim(),
      typescript: builtInsTypescriptSolution.trim(),
    },
    {
      title: 'Prototype Checks',
      javascript: prototypeJavascriptSolution.trim(),
      typescript: prototypeTypescriptSolution.trim(),
    },
  ],
};
