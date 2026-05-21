import type { PracticeProblem } from '../../problemTypes';
import loopJavascriptSolution from './solutions/loop.js?raw';
import loopTypescriptSolution from './solutions/loop.ts?raw';
import reduceJavascriptSolution from './solutions/reduce.js?raw';
import reduceTypescriptSolution from './solutions/reduce.ts?raw';

export const meanProblem: PracticeProblem = {
  id: 'mean',
  title: 'Mean',
  difficulty: 'Easy',
  description:
    'Implement `mean(array)`, which returns the mean, also known as the average, of the values inside an array of numbers.\n\nThe mean is calculated by summing all numbers and dividing the total by the number of items. If the array is empty, return `NaN`.\n\nExamples:\n`mean([4, 2, 8, 6])` returns `5`.\n`mean([1, 2, 3, 4])` returns `2.5`.\n`mean([1, 2, 2])` returns `1.6666666666666667`.\n`mean([])` returns `NaN`.',
  points: [
    '`array` (number[]): Array of numbers.',
    'Sum every value in the array.',
    'Divide the sum by `array.length`.',
    'Return `NaN` when the input array is empty.',
    '(number): Returns the mean of the values in `array`.',
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
