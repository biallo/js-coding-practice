import type { PracticeProblem } from '../../problemTypes';
import applyJavascriptSolution from './solutions/apply.js?raw';
import applyTypescriptSolution from './solutions/apply.ts?raw';
import callbackJavascriptSolution from './solutions/callback.js?raw';
import callbackTypescriptSolution from './solutions/callback.ts?raw';

export const promisifyProblem: PracticeProblem = {
  id: 'promisify',
  title: 'Promisify',
  difficulty: 'Medium',
  description:
    'Implement `promisify(fn)`, which converts an error-first callback function into a function that returns a Promise.\n\nThe original function should be called with all provided arguments plus a final callback. That callback receives `(error, result)`. If `error` is truthy, reject the Promise with the error. Otherwise, resolve the Promise with the result.\n\nThe returned function should preserve the caller\'s `this` value when invoking the original function.\n\nExample:\n`function readValue(id, callback) { callback(null, id * 2); }`\n`const readValueAsync = promisify(readValue);`\n`await readValueAsync(21)` resolves to `42`.\n\n`function fail(callback) { callback(new Error(\'Failed\')); }`\n`await promisify(fail)()` rejects with that error.',
  points: [
    '`fn` (Function): A callback-based function whose last argument is an error-first callback.',
    'Return a function that returns a Promise.',
    'Append a callback with signature `(error, result)` when calling `fn`.',
    'Reject when `error` is truthy.',
    'Resolve with `result` when `error` is falsey.',
    'Preserve `this` when the promisified function is called as an object method.',
    '(Function): Returns the promisified function.',
  ],
  solutions: [
    {
      title: 'Callback Wrapper',
      javascript: callbackJavascriptSolution.trim(),
      typescript: callbackTypescriptSolution.trim(),
    },
    {
      title: 'Apply',
      javascript: applyJavascriptSolution.trim(),
      typescript: applyTypescriptSolution.trim(),
    },
  ],
};
