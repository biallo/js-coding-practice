import type { PracticeProblem } from '../../problemTypes';
import chunksJavascriptSolution from './solutions/chunks.js?raw';
import chunksTypescriptSolution from './solutions/chunks.ts?raw';
import workerPoolJavascriptSolution from './solutions/worker-pool.js?raw';
import workerPoolTypescriptSolution from './solutions/worker-pool.ts?raw';

export const mapAsyncLimitProblem: PracticeProblem = {
  id: 'mapAsyncLimit',
  title: 'Map Async Limit',
  difficulty: 'Medium',
  description: 'Implement a `mapAsyncLimit` function that maps an array of items with an asynchronous mapping function while limiting the number of ongoing async tasks.\n\nThis is useful when each item triggers work such as an API request. Running every task at the same time can be faster, but too much concurrency can hit service rate limits. `mapAsyncLimit` should allow concurrency up to a provided `size` limit.\n\nThe function should accept an input array, an async mapping function, and an optional `size`. At most `size` mapper calls should be pending at the same time. If `size` is not provided, the concurrency is unlimited. The returned promise should resolve to mapped results in the same order as the input array.',
  examples: [
    {
      input: '`await mapAsyncLimit([\'foo\', \'bar\', \'qux\', \'quz\'], fetchUpperCase, 2)`',
      output: '`[\'FOO\', \'BAR\', \'QUX\', \'QUZ\']` while only running two pending requests at once',
    }
  ],
  points: [
    '`array` (Array): The array of items to map.',
    '`callbackFn` (Function): The async mapper called with `(item, index, array)`.',
    '`size` (number): Optional maximum number of pending async tasks. Defaults to unlimited.',
    'Run at most `size` mapper calls concurrently.',
    'Preserve the input order in the resolved result array.',
    'Reject if any mapper result rejects.',
    '(Promise<Array>): Returns a promise for the mapped values.',
  ],
  solutions: [
    {
      title: 'Worker Pool',
      javascript: workerPoolJavascriptSolution.trim(),
      typescript: workerPoolTypescriptSolution.trim(),
    },
    {
      title: 'Chunks',
      javascript: chunksJavascriptSolution.trim(),
      typescript: chunksTypescriptSolution.trim(),
    },
  ],
};
