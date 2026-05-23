import type { PracticeProblem } from '../../problemTypes';
import helperJavascriptSolution from './solutions/helper.js?raw';
import helperTypescriptSolution from './solutions/helper.ts?raw';
import recursiveJavascriptSolution from './solutions/recursive.js?raw';
import recursiveTypescriptSolution from './solutions/recursive.ts?raw';

export const classnamesProblem: PracticeProblem = {
  id: 'classnames',
  title: 'Classnames',
  difficulty: 'Medium',
  description: 'Implement a `classNames` utility that conditionally joins CSS class names into a single string.\n\nThe function should accept any number of arguments. Each argument can be a string, number, object, array, or falsey value. Strings and numbers are included directly. Object keys are included only when their values are truthy. Arrays should be recursively flattened and processed by the same rules.\n\nFalsey values such as `null`, `undefined`, `false`, `0`, and empty strings should be ignored. The returned string should not contain leading or trailing whitespace.',
  examples: [
    {
      input: '`classNames(\'foo\', \'bar\')`',
      output: '`\'foo bar\'`',
    },
    {
      input: '`classNames(\'foo\', { bar: true })`',
      output: '`\'foo bar\'`',
    },
    {
      input: '`classNames({ foo: true, bar: false, qux: true })`',
      output: '`\'foo qux\'`',
    },
    {
      input: '`classNames(\'a\', [\'b\', { c: true, d: false }])`',
      output: '`\'a b c\'`',
    }
  ],
  points: [
    '`...args` (Array): Class values to combine, including strings, numbers, objects, arrays, and falsey values.',
    'Object keys should be included only when their values are truthy.',
    'Arrays should be processed recursively using the same class name rules.',
    '(string): Returns a space-separated class name string with no leading or trailing whitespace.',
  ],
  solutions: [
    {
      title: 'Recursive Return',
      javascript: recursiveJavascriptSolution.trim(),
      typescript: recursiveTypescriptSolution.trim(),
    },
    {
      title: 'Helper Accumulator',
      javascript: helperJavascriptSolution.trim(),
      typescript: helperTypescriptSolution.trim(),
    },
  ],
};
