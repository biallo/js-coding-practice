import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const joinTwoArraysByIdProblem: PracticeProblem = {
  id: 'joinTwoArraysById',
  title: 'Join Two Arrays by ID',
  difficulty: 'Medium',
  description: 'Given two arrays `arr1` and `arr2`, return a new array formed by joining the objects from both arrays by their `id` key.\n\nEvery object contains an integer `id`, and each input array has unique `id` values within itself. The result should contain one object for each unique `id` across both arrays and should be sorted by `id` in ascending order.\n\nIf an `id` appears in only one array, include that object in the result. If an `id` appears in both arrays, merge the two objects into one object. Keys from `arr2` should override keys from `arr1` when both objects contain the same key.',
  examples: [
    {
      input: '`join([{ id: 1, x: 1 }, { id: 2, x: 9 }], [{ id: 3, x: 5 }])`',
      output: '`[{ id: 1, x: 1 }, { id: 2, x: 9 }, { id: 3, x: 5 }]`',
    },
    {
      input: '`join(\n  [{ id: 1, x: 2, y: 3 }, { id: 2, x: 3, y: 6 }],\n  [{ id: 2, x: 10, y: 20 }, { id: 3, x: 0, y: 0 }],\n)`',
      output: '`[\n  { id: 1, x: 2, y: 3 },\n  { id: 2, x: 10, y: 20 },\n  { id: 3, x: 0, y: 0 },\n]`',
    },
    {
      input: '`join(\n  [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }],\n  [{ id: 1, b: { c: 84 }, v: [1, 3] }],\n)`',
      output: '`[{ id: 1, b: { c: 84 }, v: [1, 3], y: 48 }]`',
    }
  ],
  points: [
    '`arr1` (object[]): The first array of objects.',
    '`arr2` (object[]): The second array of objects.',
    'Every object has an integer `id` property.',
    'Each input array contains unique `id` values within that array.',
    'Include one object for each unique `id` across both arrays.',
    'When the same `id` appears in both arrays, merge the objects and let `arr2` override duplicate keys.',
    'Return the joined array sorted by `id` in ascending order.',
  ],
  solutions: [
    {
      title: 'Map by ID',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
