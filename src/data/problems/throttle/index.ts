import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const throttleProblem: PracticeProblem = {
  id: 'throttle',
  title: 'Throttle',
  difficulty: 'Medium',
  description:
    'Throttling is a technique used to control how many times we allow a function to be executed over time. When a JavaScript function is said to be throttled with a wait time of X milliseconds, it can only be invoked at most once every X milliseconds. The callback is invoked immediately and cannot be invoked again for the rest of the `wait` duration.\n\nImplement `throttle(func, wait)` so that `func` can run at most once every `wait` milliseconds. The first call should invoke `func` immediately. Calls made during the throttling window should be ignored. When `func` runs, it should receive the call\'s arguments and preserve `this`.',
  points: [
    '`func` (Function): The callback to throttle.',
    '`wait` (number): The number of milliseconds in each throttling window.',
    '(Function): Returns the throttled function.',
  ],
  solutions: [
    {
      title: 'Throttle',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
