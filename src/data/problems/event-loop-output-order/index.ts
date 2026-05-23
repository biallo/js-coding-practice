import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const eventLoopOutputOrderProblem: PracticeProblem = {
  id: 'eventLoopOutputOrder',
  title: 'Event Loop Output Order',
  difficulty: 'Medium',
  description:
    'Implement `getEventLoopOutput()` so it returns a promise resolving to the order in which scheduled work runs.\n\nThe function should push labels into an array using synchronous code, a resolved promise callback, `queueMicrotask`, a chained promise callback, and `setTimeout`. It should then resolve with the final output array after the macrotask has run.\n\nThe expected order is `["sync-1", "sync-2", "promise-1", "microtask", "promise-2", "timeout"]`.\n\nThis mirrors common frontend interview questions about the call stack, microtask queue, and macrotask queue.',
  examples: [
    {
      input: '`await getEventLoopOutput()`',
      output: '`["sync-1", "sync-2", "promise-1", "microtask", "promise-2", "timeout"]`',
    },
  ],
  points: [
    'Synchronous work runs before queued asynchronous callbacks.',
    'Promise callbacks and `queueMicrotask` callbacks run as microtasks.',
    'Microtasks are drained before the next `setTimeout` macrotask.',
    'A `.then` callback queued from another `.then` runs after already-queued microtasks.',
    'Resolve after the timeout callback has pushed its label.',
    'Return a `Promise<string[]>`.',
  ],
  solutions: [
    {
      title: 'Scheduled labels',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
