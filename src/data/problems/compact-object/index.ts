import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const compactObjectProblem: PracticeProblem = {
  id: 'compactObject',
  title: 'Compact Object',
  difficulty: 'Medium',
  description:
    'Given an object or array `obj`, return a compact object.\n\nA compact object is the same as the original value, except keys containing falsy values are removed. This operation applies recursively to the object and any nested objects. Arrays are considered objects whose keys are indices, so falsy array elements should be removed and the remaining elements should keep their relative order.\n\nA value is considered falsy when `Boolean(value)` returns `false`. You may assume `obj` is valid JSON.\n\nExamples:\n`compactObject([null, 0, false, 1])` returns `[1]`.\n\n`compactObject({ a: null, b: [false, 1] })` returns `{ b: [1] }`.\n\n`compactObject([null, 0, 5, [0], [false, 16]])` returns `[5, [], [16]]`.',
  points: [
    '`obj` (object | array): The JSON value to compact.',
    'Remove object properties whose values are falsy.',
    'Remove array elements whose values are falsy.',
    'Recursively compact nested objects and arrays.',
    'Preserve the relative order of remaining array elements.',
    'Keep empty arrays and empty objects when their original value was truthy.',
    'Return a new compacted object or array without mutating the input.',
  ],
  solutions: [
    {
      title: 'Recursive',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
