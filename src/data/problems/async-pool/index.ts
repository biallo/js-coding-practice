import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const asyncPoolProblem: PracticeProblem = {
  id: 'asyncPool',
  title: 'Async Pool',
  difficulty: 'Hard',
  description: 'Implement `asyncPool(limit, items, task)` to process asynchronous work with a maximum concurrency limit.\n\n`task(item, index)` returns a promise or value. At most `limit` tasks may be running at the same time. The returned promise should resolve to an array of results in the same order as `items`, regardless of completion order.\n\nIf any task rejects, `asyncPool` should reject with that reason and should not start more work than necessary.',
  examples: [
    {
      input: '`await asyncPool(2, [1, 2, 3], async (n) => n * 2)`',
      output: '`[2, 4, 6]`',
    },
    {
      input: 'With `limit = 2`, no more than two pending task promises should exist at once.',
      output: 'At most two tasks run concurrently',
    }
  ],
  points: [
    '`limit` (number): Maximum number of concurrently running tasks.',
    '`items` (Array): Work items to process.',
    '`task(item, index)`: Function returning a promise or value.',
    'Preserve result order from the input array.',
    'Never run more than `limit` tasks at the same time.',
    'Reject with the first task rejection reason.',
    'Handle an empty `items` array.',
  ],
  solutions: [
    {
      title: 'Worker loop',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
