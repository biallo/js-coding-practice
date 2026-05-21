import type { PracticeProblem } from '../../problemTypes';
import mapJavascriptSolution from './solutions/map.js?raw';
import mapTypescriptSolution from './solutions/map.ts?raw';
import setJavascriptSolution from './solutions/set.js?raw';
import setTypescriptSolution from './solutions/set.ts?raw';

export const classnames2Problem: PracticeProblem = {
  id: 'classnames2',
  title: 'Classnames II',
  difficulty: 'Hard',
  description:
    'Implement a `classNames` utility that conditionally joins CSS class names together, while also handling de-duplication and function values.\n\nThis is an advanced version of the regular `classNames` problem. The function should accept any number of arguments. Each argument can be a string, number, object, array, function, or falsey value. Strings and numbers add a class. Object keys add a class when their values are truthy and remove that class when their values are falsey. Arrays should be processed recursively. Function values should be called and their return values should be processed by the same rules.\n\nThe result should contain each class name at most once. If a class is added and later turned off by an object entry such as `{ foo: false }`, it should not appear in the final string.\n\nExamples:\n`classNames(\'foo\', \'foo\', \'bar\')` returns `\'foo bar\'`.\n`classNames(\'foo\', { foo: false, bar: true })` returns `\'bar\'`.\n`classNames(\'a\', [\'b\', { c: true }], () => \'d\')` returns `\'a b c d\'`.\n`classNames(() => [\'foo\', { bar: true }])` returns `\'foo bar\'`.',
  points: [
    '`...args` (Array): Class values to combine, including strings, numbers, objects, arrays, functions, and falsey values.',
    'Each class should appear at most once in the returned string.',
    'Object keys with truthy values should enable a class; object keys with falsey values should disable that class.',
    'Function values should be called and their return values should be processed using the same rules.',
    '(string): Returns a de-duplicated, space-separated class name string with no leading or trailing whitespace.',
  ],
  solutions: [
    {
      title: 'Set Toggle',
      javascript: setJavascriptSolution.trim(),
      typescript: setTypescriptSolution.trim(),
    },
    {
      title: 'Map State',
      javascript: mapJavascriptSolution.trim(),
      typescript: mapTypescriptSolution.trim(),
    },
  ],
};
