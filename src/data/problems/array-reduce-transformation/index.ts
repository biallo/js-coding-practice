import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const arrayReduceTransformationProblem: PracticeProblem = {
  id: 'arrayReduceTransformation',
  title: 'Array Reduce Transformation',
  difficulty: 'Easy',
  description: 'Given an integer array `nums`, a reducer function `fn`, and an initial value `init`, return the final result obtained by applying `fn` to each element in order.\n\nThe reduction starts with `init`: `val = fn(init, nums[0])`, then `val = fn(val, nums[1])`, and so on until every element has been processed. Return the final value.\n\nIf `nums` is empty, return `init`.\n\nPlease solve it without using the built-in `Array.reduce` method.',
  examples: [
    {
      input: '`reduce([1, 2, 3, 4], (accum, curr) => accum + curr, 0)`',
      output: '`10`',
    },
    {
      input: '`reduce([1, 2, 3, 4], (accum, curr) => accum + curr * curr, 100)`',
      output: '`130`',
    },
    {
      input: '`reduce([], () => 0, 25)`',
      output: '`25`',
    }
  ],
  points: [
    '`nums` (number[]): The array of numbers to reduce.',
    '`fn` (Function): Reducer called with `(accum, curr)`.',
    '`init` (number): Initial accumulator value.',
    'Process values from left to right.',
    'Return `init` when `nums` is empty.',
    'Do not use the built-in `Array.reduce` method.',
    '(number): Returns the final accumulated value.',
  ],
  solutions: [
    {
      title: 'Loop',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
