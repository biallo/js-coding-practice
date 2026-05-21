import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const arrayWrapperProblem: PracticeProblem = {
  id: 'arrayWrapper',
  title: 'Array Wrapper',
  difficulty: 'Easy',
  description:
    'Create an `ArrayWrapper` class that accepts an array of integers in its constructor.\n\nThe class should support two JavaScript coercion behaviors:\nWhen two `ArrayWrapper` instances are added together with the `+` operator, the result should be the sum of all elements in both wrapped arrays.\nWhen `String()` is called on an instance, it should return the array as a comma-separated string surrounded by brackets.\n\nExamples:\n`const obj1 = new ArrayWrapper([1, 2]);`\n`const obj2 = new ArrayWrapper([3, 4]);`\n`obj1 + obj2` evaluates to `10`.\n\n`const obj = new ArrayWrapper([23, 98, 42, 70]);`\n`String(obj)` returns `"[23,98,42,70]"`.\n\n`new ArrayWrapper([]) + new ArrayWrapper([])` evaluates to `0`.',
  points: [
    '`new ArrayWrapper(nums)`: Stores an integer array.',
    '`valueOf()`: Return the sum of all stored numbers so `+` works through numeric coercion.',
    '`toString()`: Return the bracketed comma-separated array string.',
    'An empty array should have numeric value `0`.',
    '`nums.length` is between `0` and `1000`.',
    '`nums[i]` is between `0` and `1000`.',
    '(Class): Implement `ArrayWrapper`.',
  ],
  solutions: [
    {
      title: 'valueOf and toString',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
