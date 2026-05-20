import type { PracticeProblem } from '../../problemTypes';
import iterativeJavascriptSolution from './solutions/iterative.js?raw';
import iterativeTypescriptSolution from './solutions/iterative.ts?raw';
import recursiveJavascriptSolution from './solutions/recursive.js?raw';
import recursiveTypescriptSolution from './solutions/recursive.ts?raw';
import reduceJavascriptSolution from './solutions/reduce.js?raw';
import reduceTypescriptSolution from './solutions/reduce.ts?raw';

export const flattenProblem: PracticeProblem = {
  id: 'flatten',
  title: 'Flatten',
  difficulty: 'Medium',
  description:
    'How to flatten an array in JavaScript\nIf you just need to flatten an array in production code, use the built-in `Array.prototype.flat`\n\n`Array.flat` is part of ES2019 and is supported in every evergreen browser and Node.js 11+. It returns a new array and does not mutate the original.\n\nWhen `Array.flat` isn\'t enough\n`Array.flat` covers the standard case. You\'ll need a custom flatten when you need any of the following:\nSkip-flattening certain values, for example keeping `Buffer`-like objects or typed arrays intact while flattening plain arrays.\nFlattening trees of objects rather than arrays, such as nested children in a tree node structure.\nIterative flattening to avoid recursion limits when the nesting depth is unknown and potentially adversarial.\nLazy flattening with a generator when the result is large and you only need part of it.\n\nFor all of those, you\'ll write your own `flatten`. This is also one of the most common JavaScript interview questions because it tests recursion, type checking, and array manipulation in a small surface area.\n\nImplement a function `flatten` that returns a newly-created array with all sub-array elements concatenated recursively into a single level.',
  points: [
    '`array` (Array): The array to flatten.',
    '(Array): Returns a new array with all nested array elements flattened recursively.',
  ],
  solutions: [
    {
      title: 'Recursive',
      javascript: recursiveJavascriptSolution.trim(),
      typescript: recursiveTypescriptSolution.trim(),
    },
    {
      title: 'Iterative Stack',
      javascript: iterativeJavascriptSolution.trim(),
      typescript: iterativeTypescriptSolution.trim(),
    },
    {
      title: 'Reduce',
      javascript: reduceJavascriptSolution.trim(),
      typescript: reduceTypescriptSolution.trim(),
    },
  ],
};
