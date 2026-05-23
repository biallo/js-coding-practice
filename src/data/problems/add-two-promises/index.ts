import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const addTwoPromisesProblem: PracticeProblem = {
  id: 'addTwoPromises',
  title: 'Add Two Promises',
  difficulty: 'Easy',
  description: 'Given two promises `promise1` and `promise2`, return a new promise that resolves with the sum of their resolved values.\n\nBoth input promises will resolve with numbers. The returned promise should wait for both values, add them, and resolve with that sum.',
  examples: [
    {
      input: '`const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));`\n`const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));`\n`await addTwoPromises(promise1, promise2)`',
      output: '`7`',
    },
    {
      input: '`const promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50));`\n`const promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30));`\n`await addTwoPromises(promise1, promise2)`',
      output: '`-2`',
    }
  ],
  points: [
    '`promise1` (Promise<number>): First promise resolving to a number.',
    '`promise2` (Promise<number>): Second promise resolving to a number.',
    'Wait for both promises to resolve.',
    'Add the two resolved numeric values.',
    'Return a promise that resolves with the sum.',
    '(Promise<number>): Returns a promise for the sum.',
  ],
  solutions: [
    {
      title: 'Async Await',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
