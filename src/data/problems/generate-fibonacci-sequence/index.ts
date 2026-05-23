import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const generateFibonacciSequenceProblem: PracticeProblem = {
  id: 'generateFibonacciSequence',
  title: 'Generate Fibonacci Sequence',
  difficulty: 'Easy',
  description: 'Write a generator function `fibGenerator()` that returns a generator object yielding the Fibonacci sequence.\n\nThe Fibonacci sequence is defined by `Xn = Xn-1 + Xn-2`. The first few numbers are `0, 1, 1, 2, 3, 5, 8, 13`.\n\nEach call to `gen.next().value` should return the next number in the sequence.',
  examples: [
    {
      input: '`const gen = fibGenerator();`\n`gen.next().value` returns `0`.\n`gen.next().value` returns `1`.\n`gen.next().value` returns `1`.\n`gen.next().value` returns `2`.\n`gen.next().value`',
      output: '`3`',
    },
    {
      input: 'If `gen.next()` is never called, no values are produced.',
      output: 'The generator remains lazy until iteration starts',
    }
  ],
  points: [
    'Implement `fibGenerator` as a generator function.',
    'Yield `0` first, then `1`.',
    'Every later value should be the sum of the previous two values.',
    'The generator should be able to continue producing values while called.',
    '`callCount` is between `0` and `50`.',
    '(Generator<number>): Returns a generator for Fibonacci numbers.',
  ],
  solutions: [
    {
      title: 'Generator State',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
