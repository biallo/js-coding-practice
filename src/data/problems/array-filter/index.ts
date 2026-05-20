import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const arrayFilterProblem: PracticeProblem = {
  id: 'arrayFilter',
  title: 'Array.prototype.filter',
  difficulty: 'Easy',
  description:
    'Given an integer array arr and a filtering function `fn`, return a filtered array `filteredArr`.\n\nThe `fn` function takes one or two arguments:\n`arr[i]` - number from the `arr`\n`i` - index of `arr[i]`\n\n`filteredArr` should only contain the elements from the `arr` for which the expression `fn(arr[i], i)` evaluates to a truthy value. A truthy value is a value where `Boolean(value)` returns `true`.\n\nPlease solve it without the built-in `Array.filter` method.',
  points: [
    '`arr` (number[]): The array to filter.',
    '`fn` (Function): The callback called with the current value and index.',
    '(number[]): Returns a new array containing only values where `fn(arr[i], i)` is truthy.',
  ],
  solutions: [
    {
      title: 'Filter',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
