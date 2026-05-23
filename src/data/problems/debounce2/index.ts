import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const debounce2Problem: PracticeProblem = {
  id: 'debounce2',
  title: 'Debounce II',
  difficulty: 'Medium',
  description:
    'Implement a JavaScript utility called `debounce` that enhances the control over function executions in response to rapid or repeated triggers. This utility should accept two parameters: a target function (`func`) and a wait time in milliseconds (`wait`). The `debounce` function returns a new, debounced version of the target function that ensures it is only executed after the specified wait time has elapsed since its last invocation.\n\nIf the debounced function is called again before the wait time has expired, the countdown is reset, delaying the function’s execution until the wait time passes without any further invocations. This behavior is crucial in scenarios such as handling rapid user inputs, window resizing, or scroll events, where controlling the rate of function execution can significantly enhance performance and user experience.\n\nIn addition to the basic debouncing behavior, the returned function includes two methods for added flexibility:\n`cancel()`: Cancels any scheduled execution of the debounced function, effectively resetting the debounce mechanism.\n`flush()`: Immediately invokes the debounced function if there is a scheduled execution pending, bypassing the wait time.\n\nThis advanced debouncing mechanism, with its cancel and flush capabilities, provides a powerful tool for optimizing dynamic function execution in response to user actions or system events.',
  examples: [
    {
      input: 'Call `debounced("a")`, then call `debounced("b")` before `wait` expires.',
      output: '`func` runs once after `wait` with `"b"`',
    },
    {
      input: 'Call `debounced("a")`, then call `debounced.cancel()` before `wait` expires.',
      output: '`func` does not run',
    },
    {
      input: 'Call `debounced("a")`, then call `debounced.flush()` before `wait` expires.',
      output: '`func` runs immediately with `"a"`',
    },
  ],
  points: [
    '`func` (Function): The callback to debounce.',
    '`wait` (number): The number of milliseconds to wait after the latest call.',
    '(Function): Returns the debounced function.',
  ],
  solutions: [
    {
      title: 'Debounce with Cancel and Flush',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
