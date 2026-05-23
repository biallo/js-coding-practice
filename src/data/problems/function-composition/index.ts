import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const functionCompositionProblem: PracticeProblem = {
  id: 'functionComposition',
  title: 'Function Composition',
  difficulty: 'Easy',
  description: 'Given an array of functions `functions`, return a new function that is the composition of those functions.\n\nFor `[f, g, h]`, the composed function should evaluate from right to left: `compose([f, g, h])(x)` should return `f(g(h(x)))`.\n\nThe composition of an empty array of functions is the identity function, so it should return the input value unchanged.\n\nYou may assume every function accepts one integer and returns one integer.',
  examples: [
    {
      input: '`compose([x => x + 1, x => x * x, x => 2 * x])(4)`',
      output: '`65`',
    },
    {
      input: '`compose([x => 10 * x, x => 10 * x, x => 10 * x])(1)`',
      output: '`1000`',
    },
    {
      input: '`compose([])(42)`',
      output: '`42`',
    }
  ],
  points: [
    '`functions` (Function[]): Array of single-argument functions.',
    'Return a new function that accepts one number.',
    'Apply functions from right to left.',
    'Return the input unchanged when `functions` is empty.',
    'Do not mutate the input function array.',
    '`functions.length` is between `0` and `1000`.',
    '(Function): Returns the composed function.',
  ],
  solutions: [
    {
      title: 'Reverse Loop',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
