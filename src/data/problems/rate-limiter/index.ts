import type { PracticeProblem } from '../../problemTypes';
import queueJavascriptSolution from './solutions/queue.js?raw';
import queueTypescriptSolution from './solutions/queue.ts?raw';
import twoPointersJavascriptSolution from './solutions/two-pointers.js?raw';
import twoPointersTypescriptSolution from './solutions/two-pointers.ts?raw';

export const rateLimiterProblem: PracticeProblem = {
  id: 'rateLimiter',
  title: 'Rate Limiter',
  difficulty: 'Medium',
  description:
    'Rate limiters decide whether each incoming task should be accepted based on how many recently accepted tasks are still inside a fixed time window.\n\nImplement `rateLimit(timestamps, maxAllowed, windowLen)` for a simplified batch setting. The input is a sorted list of task timestamps. Return a boolean array where each entry says whether the corresponding task is accepted.\n\nOnly previously accepted tasks count against the limit. Rejected tasks do not consume slots in the window. A previously accepted task at time `previous` is inside the current task\'s window at time `t` when `t - previous < windowLen`. If a previous task is exactly `windowLen` units earlier, it is outside the window.\n\nExamples:\n`rateLimit([1, 3, 5, 6, 8, 9, 10], 2, 5)` returns `[true, true, false, true, true, false, false]`.\n`rateLimit([1, 6, 7], 1, 5)` returns `[true, true, false]`.\n`rateLimit([2, 2, 2], 2, 3)` returns `[true, true, false]`.',
  points: [
    '`timestamps` (number[]): Sorted, non-decreasing task timestamps.',
    '`maxAllowed` (number): Maximum accepted tasks allowed inside the active window.',
    '`windowLen` (number): Sliding window length in the same unit as `timestamps`.',
    'Only accepted tasks count against the limit; rejected tasks do not consume slots.',
    'A task exactly `windowLen` units earlier should not count against the current window.',
    '(boolean[]): Returns whether each task is accepted.',
  ],
  solutions: [
    {
      title: 'Queue',
      javascript: queueJavascriptSolution.trim(),
      typescript: queueTypescriptSolution.trim(),
    },
    {
      title: 'Two Pointers',
      javascript: twoPointersJavascriptSolution.trim(),
      typescript: twoPointersTypescriptSolution.trim(),
    },
  ],
};
