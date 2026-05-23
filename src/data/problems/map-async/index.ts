import type { PracticeProblem } from '../../problemTypes';
import manualJavascriptSolution from './solutions/manual.js?raw';
import manualTypescriptSolution from './solutions/manual.ts?raw';
import promiseAllJavascriptSolution from './solutions/promise-all.js?raw';
import promiseAllTypescriptSolution from './solutions/promise-all.ts?raw';

export const mapAsyncProblem: PracticeProblem = {
  id: 'mapAsync',
  title: 'Map Async',
  difficulty: 'Medium',
  description:
    'Implement a function `mapAsync` that maps an array of items with an asynchronous mapping function.\n\nThe function should accept an array and a callback function. The callback should be called with the current item, the current index, and the original array, similar to `Array.prototype.map`.\n\nEach callback result can be either a regular value or a promise. `mapAsync` should return a promise that resolves to an array of mapped values in the same order as the input array. The mapping work should run concurrently rather than one item at a time.\n\nIf the input array is empty, the returned promise should resolve to an empty array. If any callback rejects, the returned promise should reject with that reason.',
  examples: [
    {
      input: '`await mapAsync([1, 2, 3], async (n) => n * 2)`',
      output: '`[2, 4, 6]`',
    },
    {
      input: '`await mapAsync([], async (n) => n)`',
      output: '`[]`',
    },
    {
      input: '`mapAsync([1, 2], async (n) => { if (n === 2) throw "Error"; return n; })`',
      output: 'Rejects with `"Error"`',
    },
  ],
  points: [
    '`array` (Array): The array of items to map.',
    '`callbackFn` (Function): The mapper called with `(item, index, array)`.',
    'Run all mapper calls concurrently and preserve the input order in the resolved array.',
    'Resolve with `[]` when the input array is empty.',
    'Reject if any mapper result rejects.',
    '(Promise<Array>): Returns a promise for the mapped values.',
  ],
  solutions: [
    {
      title: 'Promise.all',
      javascript: promiseAllJavascriptSolution.trim(),
      typescript: promiseAllTypescriptSolution.trim(),
    },
    {
      title: 'Manual Counter',
      javascript: manualJavascriptSolution.trim(),
      typescript: manualTypescriptSolution.trim(),
    },
  ],
};
