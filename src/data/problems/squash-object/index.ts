import type { PracticeProblem } from '../../problemTypes';
import recursiveJavascriptSolution from './solutions/recursive.js?raw';
import recursiveTypescriptSolution from './solutions/recursive.ts?raw';
import stackJavascriptSolution from './solutions/stack.js?raw';
import stackTypescriptSolution from './solutions/stack.ts?raw';

export const squashObjectProblem: PracticeProblem = {
  id: 'squashObject',
  title: 'Squash Object',
  difficulty: 'Medium',
  description:
    'Implement `squashObject(object)`, which returns a new object after flattening a nested object into a single level of depth. Nested keys should be joined together with a period delimiter (`.`).\n\nArrays should also be traversed, with array indexes becoming path segments. Primitive values, `null`, and `undefined` should be assigned to the flattened path. Empty string keys are special: when joining paths, do not add an extra period for an empty segment.\n\nExamples:\n`squashObject({ a: 5, b: 6, c: { f: 9, g: { m: 17, n: 3 } } })` returns `{ a: 5, b: 6, \'c.f\': 9, \'c.g.m\': 17, \'c.g.n\': 3 }`.\n`squashObject({ a: { b: null, c: undefined } })` returns `{ \'a.b\': null, \'a.c\': undefined }`.\n`squashObject({ a: { b: [1, 2, 3], c: [\'foo\'] } })` returns `{ \'a.b.0\': 1, \'a.b.1\': 2, \'a.b.2\': 3, \'a.c.0\': \'foo\' }`.\n`squashObject({ foo: { \'\': { \'\': 1, bar: 2 } } })` returns `{ foo: 1, \'foo.bar\': 2 }`.',
  points: [
    '`object` (Object): The object to flatten.',
    'Join nested object keys with `.`.',
    'Traverse arrays and use array indexes as path segments.',
    'Keep primitive values, `null`, and `undefined` as flattened values.',
    'Do not add an extra period when joining an empty string key segment.',
    'Return a new object without mutating the input.',
    '(Object): Returns the flattened object.',
  ],
  solutions: [
    {
      title: 'Recursive',
      javascript: recursiveJavascriptSolution.trim(),
      typescript: recursiveTypescriptSolution.trim(),
    },
    {
      title: 'Stack',
      javascript: stackJavascriptSolution.trim(),
      typescript: stackTypescriptSolution.trim(),
    },
  ],
};
