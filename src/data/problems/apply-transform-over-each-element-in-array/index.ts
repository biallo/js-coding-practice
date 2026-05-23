import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const applyTransformOverEachElementInArrayProblem: PracticeProblem = {
  id: 'applyTransformOverEachElementInArray',
  title: 'Apply Transform Over Each Element in Array',
  difficulty: 'Easy',
  description: 'Given an integer array `arr` and a mapping function `fn`, return a new array with a transformation applied to each element.\n\nThe returned array should satisfy `returnedArray[i] = fn(arr[i], i)` for every index `i`.\n\nPlease solve it without using the built-in `Array.map` method.',
  examples: [
    {
      input: '`map([1, 2, 3], (n) => n + 1)`',
      output: '`[2, 3, 4]`',
    },
    {
      input: '`map([1, 2, 3], (n, i) => n + i)`',
      output: '`[1, 3, 5]`',
    },
    {
      input: '`map([10, 20, 30], () => 42)`',
      output: '`[42, 42, 42]`',
    }
  ],
  points: [
    '`arr` (number[]): The array to transform.',
    '`fn` (Function): Mapping function called with `(arr[i], i)`.',
    'Return a new array with the same length as `arr`.',
    'Each result element should be `fn(arr[i], i)`.',
    'Do not mutate the input array.',
    'Do not use the built-in `Array.map` method.',
    '(number[]): Returns the transformed array.',
  ],
  solutions: [
    {
      title: 'Loop',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
