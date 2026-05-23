import type { PracticeProblem } from '../../problemTypes';
import loopJavascriptSolution from './solutions/loop.js?raw';
import loopTypescriptSolution from './solutions/loop.ts?raw';
import seedJavascriptSolution from './solutions/seed.js?raw';
import seedTypescriptSolution from './solutions/seed.ts?raw';

export const arrayReduceProblem: PracticeProblem = {
  id: 'arrayReduce',
  title: 'Array.prototype.reduce',
  difficulty: 'Easy',
  description: 'Implement `Array.prototype.reduce`. To avoid overwriting the native method used by test runners, implement it as `Array.prototype.myReduce`.\n\n`myReduce` should call a reducer callback for each existing element in the array, in order. The callback receives the accumulator, current value, current index, and the original array. If an initial value is provided, use it as the first accumulator. If no initial value is provided, use the first existing array element as the initial accumulator and start reducing from the next index.\n\nIf the array is empty and no initial value is provided, throw a `TypeError`. The implementation should not call the reducer for holes in sparse arrays.',
  examples: [
    {
      input: '`[1, 2, 3].myReduce((prev, curr) => prev + curr, 0)`',
      output: '`6`',
    },
    {
      input: '`[1, 2, 3].myReduce((prev, curr) => prev + curr, 4)`',
      output: '`10`',
    }
  ],
  points: [
    'Add `myReduce` to `Array.prototype`.',
    '`callbackFn` receives `(accumulator, currentValue, index, array)`.',
    'Use the supplied initial value when it is provided.',
    'Without an initial value, use the first existing array element as the initial accumulator.',
    'Throw a `TypeError` when reducing an empty array without an initial value.',
    'Skip holes in sparse arrays.',
    'Return the final accumulator value.',
  ],
  solutions: [
    {
      title: 'Loop',
      javascript: loopJavascriptSolution.trim(),
      typescript: loopTypescriptSolution.trim(),
    },
    {
      title: 'Seed Search',
      javascript: seedJavascriptSolution.trim(),
      typescript: seedTypescriptSolution.trim(),
    },
  ],
};
