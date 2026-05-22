import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const promiseTimeLimitProblem: PracticeProblem = {
  id: 'promiseTimeLimit',
  title: 'Promise Time Limit',
  difficulty: 'Medium',
  description:
    'Given an asynchronous function `fn` and a time limit `t` in milliseconds, return a new time-limited version of `fn`.\n\nThe returned function should accept the same arguments as `fn`. If `fn` completes within `t` milliseconds, the returned function should resolve with the original result. If `fn` takes longer than `t` milliseconds, the returned function should reject with the string `"Time Limit Exceeded"`.\n\nIf `fn` rejects before the time limit is reached, the returned function should reject with the original rejection reason.\n\nExamples:\n`const limited = timeLimit(async (n) => { await sleep(100); return n * n; }, 50);`\n`await limited(5)` rejects with `"Time Limit Exceeded"` after about `50ms`.\n\n`const limited = timeLimit(async (n) => { await sleep(100); return n * n; }, 150);`\n`await limited(5)` resolves to `25` after about `100ms`.\n\n`const limited = timeLimit(async (a, b) => { await sleep(120); return a + b; }, 150);`\n`await limited(5, 10)` resolves to `15` after about `120ms`.\n\n`timeLimit(async () => { throw "Error"; }, 1000)()` rejects with `"Error"` immediately.',
  points: [
    '`fn` (Function): An asynchronous function that returns a promise.',
    '`t` (number): Time limit in milliseconds.',
    'Return a new function that forwards all arguments to `fn`.',
    'Resolve with `fn`\'s result if it completes within the limit.',
    'Reject with `"Time Limit Exceeded"` if `fn` exceeds the limit.',
    'Reject with `fn`\'s original reason if it rejects before the limit.',
    'Clear the timeout once the wrapped call settles.',
  ],
  solutions: [
    {
      title: 'Race with Timer',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
