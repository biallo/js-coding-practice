import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const arrayPrototypeLastProblem: PracticeProblem = {
  id: 'arrayPrototypeLast',
  title: 'Array.prototype.last',
  difficulty: 'Easy',
  description:
    'Write code that enhances all arrays so that `array.last()` returns the last element of the array.\n\nIf the array has no elements, `array.last()` should return `-1`.\n\nExamples:\n`const nums = [1, 2, 3];`\n`nums.last()` returns `3`.\n\n`const empty = [];`\n`empty.last()` returns `-1`.',
  points: [
    'Add a `last()` method to `Array.prototype`.',
    '`last()` returns the final element when the array is not empty.',
    '`last()` returns `-1` when the array is empty.',
    'Do not remove or reorder existing array elements.',
    'The input array length is between `0` and `1000`.',
    '(any | -1): Returns the last element, or `-1` for an empty array.',
  ],
  solutions: [
    {
      title: 'Prototype Method',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
