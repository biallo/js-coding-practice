import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const sleepProblem: PracticeProblem = {
  id: 'sleep',
  title: 'Sleep',
  difficulty: 'Easy',
  description:
    'Given a positive integer `millis`, write an asynchronous function `sleep(millis)` that waits for `millis` milliseconds before resolving.\n\nThe returned promise can resolve with any value. A small deviation from the requested duration is acceptable because JavaScript timers are scheduled by the runtime.\n\nExamples:\n`let start = Date.now();`\n`await sleep(100);`\n`Date.now() - start` should be approximately `100`.\n\n`await sleep(200)` should resolve after approximately `200` milliseconds.',
  points: [
    '`millis` (number): Positive integer delay in milliseconds.',
    'Return a Promise.',
    'Use `setTimeout` to resolve after the requested delay.',
    'The promise can resolve with any value.',
    '`millis` is between `1` and `1000`.',
    '(Promise): Resolves after approximately `millis` milliseconds.',
  ],
  solutions: [
    {
      title: 'setTimeout Promise',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
