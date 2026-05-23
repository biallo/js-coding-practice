import type { PracticeProblem } from '../../problemTypes';
import postfixJavascriptSolution from './solutions/postfix.js?raw';
import postfixTypescriptSolution from './solutions/postfix.ts?raw';
import explicitJavascriptSolution from './solutions/explicit.js?raw';
import explicitTypescriptSolution from './solutions/explicit.ts?raw';

export const makeCounterProblem: PracticeProblem = {
  id: 'makeCounter',
  title: 'Make Counter',
  difficulty: 'Easy',
  description: 'Implement `makeCounter(initialValue)`, which accepts an optional integer and returns a function.\n\nWhen the returned function is called for the first time, it should return the provided initial value. If no initial value is provided, it should return `0`. Every later call should return one more than the previous call returned.\n\nEach counter should keep its own state through closure variables.',
  examples: [
    {
      input: '`const counter = makeCounter();`\n`counter()` returns `0`.\n`counter()` returns `1`.\n`counter()`',
      output: '`2`',
    },
    {
      input: '`const counterFromFive = makeCounter(5);`\n`counterFromFive()` returns `5`.\n`counterFromFive()` returns `6`.\n`counterFromFive()`',
      output: '`7`',
    }
  ],
  points: [
    '`initialValue` (number): Optional integer starting value. Defaults to `0`.',
    'Return a function that stores its count in closure state.',
    'The first call returns the starting value.',
    'Each subsequent call returns one more than the previous call.',
    'Separate counters should not share state.',
    '(Function): Returns a zero-argument counter function.',
  ],
  solutions: [
    {
      title: 'Postfix Increment',
      javascript: postfixJavascriptSolution.trim(),
      typescript: postfixTypescriptSolution.trim(),
    },
    {
      title: 'Explicit Increment',
      javascript: explicitJavascriptSolution.trim(),
      typescript: explicitTypescriptSolution.trim(),
    },
  ],
};
