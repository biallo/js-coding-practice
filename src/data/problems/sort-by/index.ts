import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const sortByProblem: PracticeProblem = {
  id: 'sortBy',
  title: 'Sort By',
  difficulty: 'Easy',
  description:
    'Given an array `arr` and a function `fn`, return a sorted array `sortedArr`.\n\nThe array should be sorted in ascending order by the numeric value returned from calling `fn` on each element. You can assume `fn` always returns a number.\n\nExamples:\n`sortBy([5, 4, 1, 2, 3], (x) => x)` returns `[1, 2, 3, 4, 5]`.\n`sortBy([{ x: 1 }, { x: 0 }, { x: -1 }], (d) => d.x)` returns `[{ x: -1 }, { x: 0 }, { x: 1 }]`.\n`sortBy([[3, 4], [5, 2], [10, 1]], (x) => x[1])` returns `[[10, 1], [5, 2], [3, 4]]`.',
  points: [
    '`arr` (Array): The array to sort.',
    '`fn` (Function): Called with each element and returns the numeric sort key.',
    'Sort items by `fn(item)` in ascending order.',
    'Return a sorted array.',
    'Do not mutate the input array.',
    '`arr.length` is between `0` and `500000`.',
    '(Array): Returns the sorted array.',
  ],
  solutions: [
    {
      title: 'Copy and Sort',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
