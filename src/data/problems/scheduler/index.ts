import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const schedulerProblem: PracticeProblem = {
  id: 'scheduler',
  title: 'Scheduler',
  difficulty: 'Hard',
  description:
    'Design a `Scheduler` class that runs asynchronous tasks with a concurrency limit and priority ordering.\n\n`new Scheduler(concurrency)` creates a scheduler. `schedule(task, priority = 0)` enqueues a zero-argument task and returns `{ promise, cancel }`. At most `concurrency` tasks may run at a time. When a slot is available, the queued task with the highest priority should start first. Tasks with the same priority should run in FIFO order.\n\nCalling `cancel()` before a task starts should remove it from the queue and reject its promise with `"Cancelled"`. Running tasks do not need to be interrupted.\n\nExamples:\nWith concurrency `1`, scheduling priorities `1`, `3`, and `2` should run priority `3` before priority `2` before priority `1` after the current task completes.',
  points: [
    '`constructor(concurrency)`: Limit number of running tasks.',
    '`schedule(task, priority)`: Enqueue a task and return `{ promise, cancel }`.',
    'Run no more than `concurrency` tasks at once.',
    'Start higher-priority queued tasks first.',
    'Preserve FIFO ordering for equal priority.',
    'Cancelling a queued task rejects its promise with `"Cancelled"`.',
    'Resolve or reject each task promise with the task outcome.',
  ],
  solutions: [
    {
      title: 'Priority queue',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
