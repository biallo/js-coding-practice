import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const designCancellableFunctionProblem: PracticeProblem = {
  id: 'designCancellableFunction',
  title: 'Design Cancellable Function',
  difficulty: 'Hard',
  description:
    'Sometimes you have a long-running task and may want to cancel it before it completes. Write a function `cancellable(generator)` that accepts a generator object and returns an array containing a cancel function and a promise.\n\nThe generator will only yield promises. When a yielded promise resolves, pass its resolved value back into the generator. When a yielded promise rejects, throw that error back into the generator.\n\nIf the cancel function is called before the generator is done, throw the string `"Cancelled"` back into the generator. If the generator catches that error and continues or returns, the returned promise should follow the next yielded promise or resolve with the returned value. If the error is not caught, the returned promise should reject with `"Cancelled"` and no more generator code should run.\n\nWhen the generator finishes normally, the returned promise should resolve with the generator\'s return value. If the generator throws an uncaught error, the returned promise should reject with that error.\n\nExamples:\n`function* tasks() { const val = yield Promise.resolve(2 + 2); yield new Promise((resolve) => setTimeout(resolve, 100)); return val + 1; }`\n`const [cancel, promise] = cancellable(tasks());`\n`setTimeout(cancel, 50);`\n`promise` rejects with `"Cancelled"`.\n\n`function* task() { return 42; }`\n`cancellable(task())[1]` resolves to `42`.\n\n`function* task() { const msg = yield Promise.resolve("Hello"); throw `Error: ${msg}`; }`\n`cancellable(task())[1]` rejects with `"Error: Hello"`.',
  points: [
    '`generator` (Generator): A generator object that yields promises.',
    'Return `[cancel, promise]`.',
    'Pass resolved yielded values back into the generator.',
    'Throw yielded promise rejections back into the generator.',
    'When cancelled before completion, throw `"Cancelled"` back into the generator.',
    'Resolve with the generator return value when it completes.',
    'Reject with any uncaught generator error.',
  ],
  solutions: [
    {
      title: 'Promise race driver',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
