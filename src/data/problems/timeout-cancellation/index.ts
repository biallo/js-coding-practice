import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const timeoutCancellationProblem: PracticeProblem = {
  id: 'timeoutCancellation',
  title: 'Timeout Cancellation',
  difficulty: 'Easy',
  description: 'Given a function `fn`, an array of arguments `args`, and a timeout `t` in milliseconds, return a cancel function `cancelFn`.\n\nThe execution of `fn` should be delayed by `t` milliseconds. If `cancelFn` is called before that delay completes, the delayed execution should be cancelled. Otherwise, `fn` should run once with the provided arguments.',
  examples: [
    {
      input: '`const cancelFn = cancellable((x) => x * 5, [2], 20);`\n`setTimeout(cancelFn, 50);`\n`fn(2)` runs at approximately `20ms` and',
      output: '`10` because cancellation happens after execution',
    },
    {
      input: '`const cancelFn = cancellable((x) => x ** 2, [2], 100);`\n`setTimeout(cancelFn, 50);`\n`fn(2)` does not run because cancellation happens before the timeout completes.',
      output: '`fn` is never called',
    }
  ],
  points: [
    '`fn` (Function): Function to execute after the delay.',
    '`args` (Array): Arguments passed to `fn` if it runs.',
    '`t` (number): Delay in milliseconds before execution.',
    'Do not call `fn` immediately.',
    'Schedule `fn(...args)` to run once after `t` milliseconds.',
    'Return a cancel function that prevents the scheduled call if invoked first.',
    '(Function): Returns `cancelFn`.',
  ],
  solutions: [
    {
      title: 'clearTimeout',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
