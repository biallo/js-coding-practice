import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const intervalCancellationProblem: PracticeProblem = {
  id: 'intervalCancellation',
  title: 'Interval Cancellation',
  difficulty: 'Easy',
  description: 'Given a function `fn`, an array of arguments `args`, and an interval time `t`, return a cancel function `cancelFn`.\n\n`fn` should be called with `args` immediately, then called again every `t` milliseconds until `cancelFn` is called. The caller will invoke `cancelFn` later with `setTimeout(cancelFn, cancelTimeMs)`.',
  examples: [
    {
      input: '`const cancelFn = cancellable((x) => x * 2, [4], 35);`\n`fn(4)` is called at approximately `0ms`, `35ms`, `70ms`, `105ms`, `140ms`, and `175ms`.\nCancellation happens at `190ms`.',
      output: '`fn` is called six times before cancellation',
    },
    {
      input: '`const cancelFn = cancellable((x1, x2) => x1 * x2, [2, 5], 30);`\n`fn(2, 5)` is called immediately and then every `30ms` until cancelled.',
      output: 'Each call receives arguments `[2, 5]`',
    }
  ],
  points: [
    '`fn` (Function): Function to execute repeatedly.',
    '`args` (Array): Arguments passed to `fn` each time it runs.',
    '`t` (number): Interval in milliseconds between executions.',
    'Call `fn(...args)` immediately before starting the interval.',
    'Continue calling `fn(...args)` every `t` milliseconds.',
    'Return a cancel function that stops future interval executions.',
    '(Function): Returns `cancelFn`.',
  ],
  solutions: [
    {
      title: 'setInterval',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
