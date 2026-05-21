import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const isObjectEmptyProblem: PracticeProblem = {
  id: 'isObjectEmpty',
  title: 'Is Object Empty',
  difficulty: 'Easy',
  description:
    'Given an object or an array, return whether it is empty.\n\nAn empty object contains no key-value pairs. An empty array contains no elements. You may assume the input is a valid JSON object or array, such as a value returned by `JSON.parse`.\n\nExamples:\n`isEmpty({ x: 5, y: 42 })` returns `false`.\n`isEmpty({})` returns `true`.\n`isEmpty([null, false, 0])` returns `false`.\n`isEmpty([])` returns `true`.',
  points: [
    '`obj` (Object | Array): A valid JSON object or array.',
    'Return `true` for objects with no key-value pairs.',
    'Return `true` for arrays with no elements.',
    'Return `false` as soon as any key or array index is found.',
    'The serialized input length is between `2` and `100000`.',
    '(boolean): Returns whether `obj` is empty.',
  ],
  solutions: [
    {
      title: 'Early Return Loop',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
