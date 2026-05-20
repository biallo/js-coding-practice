import type { PracticeProblem } from '../../problemTypes';
import iterativeJavascriptSolution from './solutions/iterative.js?raw';
import iterativeTypescriptSolution from './solutions/iterative.ts?raw';
import recursiveJavascriptSolution from './solutions/recursive.js?raw';
import recursiveTypescriptSolution from './solutions/recursive.ts?raw';

export const flatten2Problem: PracticeProblem = {
  id: 'flatten2',
  title: 'Flatten II',
  difficulty: 'Medium',
  description:
    'Given a multi-dimensional array `arr` and a depth `n`, return a flattened version of that array.\n\nA multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.\n\nA flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than `n`. The depth of the elements in the first array are considered to be `0`.\n\nPlease solve it without the built-in `Array.flat` method.',
  points: [
    '`arr` (Array): The multi-dimensional array to flatten.',
    '`n` (number): The maximum depth of nested arrays to flatten.',
    '(Array): Returns a new array flattened up to depth `n` without using `Array.flat`.',
  ],
  solutions: [
    {
      title: 'Recursive Depth',
      javascript: recursiveJavascriptSolution.trim(),
      typescript: recursiveTypescriptSolution.trim(),
    },
    {
      title: 'Iterative Stack',
      javascript: iterativeJavascriptSolution.trim(),
      typescript: iterativeTypescriptSolution.trim(),
    },
  ],
};
