import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const promiseQueuePauseResumeProblem: PracticeProblem = {
  id: 'promiseQueuePauseResume',
  title: 'Promise Queue Pause Resume',
  difficulty: 'Hard',
  description: 'Implement a `PromiseQueue` class with concurrency control and queue lifecycle methods.\n\n`new PromiseQueue(concurrency)` creates a queue. `add(task)` enqueues a zero-argument async task and returns a promise for its result. At most `concurrency` tasks may run at once. `pause()` stops starting new tasks, `resume()` starts queued work again, and `clear(reason)` rejects queued tasks that have not started.\n\nRunning tasks do not need to be cancelled.',
  examples: [
    {
      input: 'With concurrency `2`, adding four tasks should run at most two at a time.\nIf the queue is paused, completed tasks should not be replaced until `resume()` is called.',
      output: 'At most two tasks run concurrently, and paused queues stop starting new work',
    }
  ],
  points: [
    '`add(task)`: Enqueue a task and return its promise.',
    'Run at most `concurrency` tasks at once.',
    '`pause()`: Stop starting queued tasks.',
    '`resume()`: Continue starting queued tasks.',
    '`clear(reason)`: Reject queued but not running tasks.',
    'Running tasks are allowed to finish.',
    'Preserve FIFO order for queued tasks.',
  ],
  solutions: [
    {
      title: 'Controlled queue',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
