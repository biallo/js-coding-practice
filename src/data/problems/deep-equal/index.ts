import type { PracticeProblem } from '../../problemTypes';
import recursiveJavascriptSolution from './solutions/recursive.js?raw';
import recursiveTypescriptSolution from './solutions/recursive.ts?raw';
import stackJavascriptSolution from './solutions/stack.js?raw';
import stackTypescriptSolution from './solutions/stack.ts?raw';

export const deepEqualProblem: PracticeProblem = {
  id: 'deepEqual',
  title: 'Deep Equal',
  difficulty: 'Medium',
  description:
    'Implement a function `deepEqual` that performs a deep comparison between two values.\n\nThe function should return `true` if the two input values are deeply equal, and `false` otherwise. Primitive values should compare by value. Arrays should compare by length and by each item in order. Objects should compare by their own enumerable keys and by the deep equality of each corresponding value.\n\nFor this problem, you can assume inputs only contain JSON-serializable values: numbers, strings, booleans, `null`, arrays, and plain objects. There will be no circular references.\n\nExamples:\n`deepEqual(\'foo\', \'foo\')` returns `true`.\n`deepEqual({ id: 1 }, { id: 1 })` returns `true`.\n`deepEqual([1, 2, 3], [1, 2, 3])` returns `true`.\n`deepEqual([{ id: \'1\' }], [{ id: \'2\' }])` returns `false`.',
  points: [
    '`valueA` (JSON-serializable value): The first value to compare.',
    '`valueB` (JSON-serializable value): The second value to compare.',
    'Primitive values should be compared directly.',
    'Arrays should have the same length and equal items at each index.',
    'Objects should have the same own enumerable keys and deeply equal values.',
    '(boolean): Returns whether the two values are deeply equal.',
  ],
  solutions: [
    {
      title: 'Recursive',
      javascript: recursiveJavascriptSolution.trim(),
      typescript: recursiveTypescriptSolution.trim(),
    },
    {
      title: 'Stack',
      javascript: stackJavascriptSolution.trim(),
      typescript: stackTypescriptSolution.trim(),
    },
  ],
};
