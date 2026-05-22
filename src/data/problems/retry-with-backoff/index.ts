import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const retryWithBackoffProblem: PracticeProblem = {
  id: 'retryWithBackoff',
  title: 'Retry With Backoff',
  difficulty: 'Medium',
  description:
    'Implement `retry(fn, retries, delay, factor = 2)`, which calls an asynchronous function and retries it when it fails.\n\n`fn` is a zero-argument function that returns a promise. If `fn` resolves, `retry` resolves with that value. If `fn` rejects and retries remain, wait for the current delay and try again. After each failed attempt, multiply the delay by `factor`.\n\nIf all attempts fail, reject with the last error.\n\nExamples:\n`retry(fetchUser, 3, 100)` may call `fetchUser` up to 4 times total: the first attempt plus 3 retries.\n\nIf the first retry waits `100ms`, the next waits `200ms`, then `400ms`.',
  points: [
    '`fn` (() => Promise<T>): Operation to run.',
    '`retries` (number): Number of retry attempts after the first failure.',
    '`delay` (number): Initial wait time in milliseconds.',
    '`factor` (number): Multiplier applied after each failed attempt.',
    'Resolve immediately when an attempt succeeds.',
    'Reject with the last error after all attempts fail.',
    'Do not retry after success.',
  ],
  solutions: [
    {
      title: 'Loop with sleep',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
