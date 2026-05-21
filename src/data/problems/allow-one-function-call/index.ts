import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const allowOneFunctionCallProblem: PracticeProblem = {
  id: 'allowOneFunctionCall',
  title: 'Allow One Function Call',
  difficulty: 'Easy',
  description:
    'Given a function `fn`, return a new function that behaves like `fn` except it can call `fn` at most once.\n\nThe first time the returned function is called, it should call `fn` with the provided arguments and return the same result. Every later call should return `undefined` without calling `fn` again.\n\nExamples:\n`const onceFn = once((a, b, c) => a + b + c);`\n`onceFn(1, 2, 3)` returns `6`.\n`onceFn(2, 3, 6)` returns `undefined`.\n\n`const onceMultiply = once((a, b, c) => a * b * c);`\n`onceMultiply(5, 7, 4)` returns `140`.\n`onceMultiply(2, 3, 6)` returns `undefined`.',
  points: [
    '`fn` (Function): Function to wrap.',
    'Return a function that accepts any arguments accepted by `fn`.',
    'Call `fn` only on the first invocation of the returned function.',
    'Pass through the first call\'s arguments to `fn`.',
    'Return the first call\'s result.',
    'Return `undefined` for every later call without calling `fn`.',
    '(Function): Returns the one-call wrapper function.',
  ],
  solutions: [
    {
      title: 'Closure Flag',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
