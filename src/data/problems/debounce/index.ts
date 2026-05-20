import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const debounceProblem: PracticeProblem = {
  id: 'debounce',
  title: 'Debounce',
  difficulty: 'Medium',
  description:
    'Debouncing is a technique used to control how many times we allow a function to be executed over time. When a JavaScript function is debounced with a wait time of X milliseconds, it must wait until after X milliseconds have elapsed since the debounced function was last called.\n\nYou almost certainly have encountered debouncing in your daily lives before (e.g. when entering an elevator). Only after X duration of not pressing the "Door open" button (the debounced function not being called) will the elevator door actually close (the callback function is executed).\n\nImplement `debounce(func, wait)` so that `func` is called only after `wait` milliseconds have passed since the most recent call. The returned function should not invoke `func` immediately. When the delayed call finally runs, it should use the latest arguments and preserve the `this` value from the most recent call.',
  points: [
    '`func` (Function): The callback to debounce.',
    '`wait` (number): The number of milliseconds to wait after the latest call.',
    '(Function): Returns the debounced function.',
  ],
  solutions: [
    {
      title: 'Debounce',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
