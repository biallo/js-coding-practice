import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const dagTaskRunnerProblem: PracticeProblem = {
  id: 'dagTaskRunner',
  title: 'DAG Task Runner',
  difficulty: 'Hard',
  description:
    'Implement `runTasks(tasks, concurrency = Infinity)` for asynchronous tasks with dependencies.\n\nEach task has `{ id, deps, run }`. A task can start only after every dependency has completed successfully. Tasks whose dependencies are satisfied may run in parallel up to the concurrency limit. Return a promise resolving to an object mapping task ids to task results.\n\nIf the dependency graph contains a cycle, reject with `"Cycle detected"`. If a task fails, reject with that error.\n\nExamples:\nTask `build` depending on `compile` and `test` should start only after both have completed.',
  points: [
    '`tasks`: Array of `{ id, deps, run }`.',
    'Run a task only after all dependencies complete.',
    'Run independent ready tasks concurrently up to `concurrency`.',
    'Resolve with a result object keyed by task id.',
    'Reject if any task rejects.',
    'Reject with `"Cycle detected"` if no more progress is possible.',
    'Do not run a task more than once.',
  ],
  solutions: [
    {
      title: 'Topological scheduler',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
