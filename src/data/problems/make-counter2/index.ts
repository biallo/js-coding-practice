import type { PracticeProblem } from '../../problemTypes';
import closureJavascriptSolution from './solutions/closure.js?raw';
import closureTypescriptSolution from './solutions/closure.ts?raw';

export const makeCounter2Problem: PracticeProblem = {
  id: 'makeCounter2',
  title: 'Make Counter II',
  difficulty: 'Easy',
  description:
    'Implement `createCounter(init)`, which accepts an initial integer and returns an object with three methods.\n\n`increment()` increases the current value by `1` and returns the new value. `decrement()` decreases the current value by `1` and returns the new value. `reset()` sets the current value back to the original `init` value and returns it.\n\nThe returned methods should share counter state through closure variables.\n\nExamples:\n`const counter = createCounter(5);`\n`counter.increment()` returns `6`.\n`counter.reset()` returns `5`.\n`counter.decrement()` returns `4`.\n\n`const counter = createCounter(0);`\n`counter.increment()` returns `1`.\n`counter.increment()` returns `2`.\n`counter.decrement()` returns `1`.\n`counter.reset()` returns `0`.\n`counter.reset()` returns `0`.',
  points: [
    '`init` (number): Initial integer value for the counter.',
    'Return an object containing `increment`, `decrement`, and `reset` methods.',
    '`increment()` adds `1` to the current value and returns it.',
    '`decrement()` subtracts `1` from the current value and returns it.',
    '`reset()` restores the current value to the original `init` and returns it.',
    'The total number of method calls will not exceed `1000`.',
    '(Object): Returns a counter object with the three methods.',
  ],
  solutions: [
    {
      title: 'Closure Object',
      javascript: closureJavascriptSolution.trim(),
      typescript: closureTypescriptSolution.trim(),
    },
  ],
};
