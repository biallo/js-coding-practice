import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const returnLengthOfArgumentsPassedProblem: PracticeProblem = {
  id: 'returnLengthOfArgumentsPassed',
  title: 'Return Length of Arguments Passed',
  difficulty: 'Easy',
  description:
    'Write a function `argumentsLength` that returns the number of arguments passed to it.\n\nThe function can receive any number of values of any type. It should count exactly how many arguments were provided, including values such as `null`, `undefined`, arrays, and objects.\n\nExamples:\n`argumentsLength(5)` returns `1`.\n`argumentsLength({}, null, "3")` returns `3`.\n`argumentsLength()` returns `0`.',
  points: [
    '`...args` (any[]): Values passed to the function.',
    'Accept any number of arguments.',
    'Count every provided argument, regardless of value type.',
    'Return `0` when no arguments are provided.',
    '`args.length` is between `0` and `100`.',
    '(number): Returns the number of arguments passed.',
  ],
  solutions: [
    {
      title: 'Rest Parameter Length',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
