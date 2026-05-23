import type { PracticeProblem } from '../../problemTypes';
import loopJavascriptSolution from './solutions/loop.js?raw';
import loopTypescriptSolution from './solutions/loop.ts?raw';
import reduceJavascriptSolution from './solutions/reduce.js?raw';
import reduceTypescriptSolution from './solutions/reduce.ts?raw';

export const minByProblem: PracticeProblem = {
  id: 'minBy',
  title: 'Min By',
  difficulty: 'Easy',
  description: 'Implement `minBy(array, iteratee)`, which finds the element in `array` that produces the minimum value when passed through `iteratee`.\n\nThe `iteratee` function is called with one argument, the current value. Return the original array element, not the computed iteratee result. Elements whose iteratee result is `null` or `undefined` should be ignored. If no element produces a valid iteratee result, return `undefined`.',
  examples: [
    {
      input: '`minBy([2, 3, 1, 4], (num) => num)`',
      output: '`1`',
    },
    {
      input: '`minBy([{ n: 1 }, { n: 2 }], (o) => o.n)`',
      output: '`{ n: 1 }`',
    },
    {
      input: '`minBy([{ n: 1 }, { n: 2 }], (o) => o.m)`',
      output: '`undefined`',
    }
  ],
  points: [
    '`array` (Array): The array to search.',
    '`iteratee` (Function): Called with each element to produce a comparable value.',
    'Return the original element with the smallest iteratee result.',
    'Ignore elements whose iteratee result is `null` or `undefined`.',
    'Return `undefined` when the array is empty or no element has a valid iteratee result.',
    '(any): Returns the minimum element, or `undefined`.',
  ],
  solutions: [
    {
      title: 'Loop',
      javascript: loopJavascriptSolution.trim(),
      typescript: loopTypescriptSolution.trim(),
    },
    {
      title: 'Reduce',
      javascript: reduceJavascriptSolution.trim(),
      typescript: reduceTypescriptSolution.trim(),
    },
  ],
};
