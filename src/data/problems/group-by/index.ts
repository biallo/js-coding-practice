import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const groupByProblem: PracticeProblem = {
  id: 'groupBy',
  title: 'Group By',
  difficulty: 'Medium',
  description: 'Write code that enhances all arrays so that you can call `array.groupBy(fn)` and receive a grouped version of the array.\n\nA grouped array is an object where each key is the string returned by `fn(item)`, and each value is an array containing all original items that generated that key.\n\nThe callback `fn` accepts one array item and returns a string key. The order of each grouped value list should match the order those items appeared in the original array. Any order of keys is acceptable. Please solve it without using lodash\'s `_.groupBy` function.',
  examples: [
    {
      input: '`[{ id: "1" }, { id: "1" }, { id: "2" }].groupBy((item) => item.id)`',
      output: '`{ "1": [{ id: "1" }, { id: "1" }], "2": [{ id: "2" }] }`',
    },
    {
      input: '`[[1, 2, 3], [1, 3, 5], [1, 5, 9]].groupBy((list) => String(list[0]))`',
      output: '`{ "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]] }`',
    },
    {
      input: '`[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].groupBy((n) => String(n > 5))`',
      output: '`{ "true": [6, 7, 8, 9, 10], "false": [1, 2, 3, 4, 5] }`',
    }
  ],
  points: [
    'Add a `groupBy(fn)` method to `Array.prototype`.',
    '`fn` receives one item from the array and returns a string key.',
    'Return an object whose keys are callback results.',
    'Each object value should be an array of original items for that key.',
    'Preserve the original relative order inside each grouped array.',
    'Any order of object keys is acceptable.',
    'Do not use lodash\'s `_.groupBy` function.',
  ],
  solutions: [
    {
      title: 'Prototype Reduce',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
