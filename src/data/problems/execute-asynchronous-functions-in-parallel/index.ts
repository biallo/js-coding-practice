import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const executeAsynchronousFunctionsInParallelProblem: PracticeProblem = {
  id: 'executeAsynchronousFunctionsInParallel',
  title: 'Execute Asynchronous Functions in Parallel',
  difficulty: 'Medium',
  description:
    'Given an array of asynchronous functions `functions`, return a new promise. Each function accepts no arguments and returns a promise. All functions should be started in parallel.\n\nThe returned promise should resolve when every function has resolved. Its resolved value should be an array of all resolved values in the same order as the original `functions` array.\n\nIf any function rejects, the returned promise should reject with the reason of the first rejection. Please solve it without using the built-in `Promise.all` function.\n\nExamples:\n`promiseAll([() => new Promise((resolve) => setTimeout(() => resolve(5), 200))])` resolves to `[5]` after about `200ms`.\n\n`promiseAll([() => new Promise((resolve) => setTimeout(() => resolve(1), 200)), () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))])` rejects with `"Error"` after about `100ms`.\n\n`promiseAll([() => new Promise((resolve) => setTimeout(() => resolve(4), 50)), () => new Promise((resolve) => setTimeout(() => resolve(10), 150)), () => new Promise((resolve) => setTimeout(() => resolve(16), 100))])` resolves to `[4, 10, 16]` after about `150ms`.',
  points: [
    '`functions` (() => Promise<T>)[]: The asynchronous functions to execute.',
    'Start every function immediately so they run in parallel.',
    'Preserve the original function order in the resolved array.',
    'Resolve only after all returned promises have resolved.',
    'Reject as soon as any returned promise rejects.',
    'Reject with the same reason as the first rejection.',
    'Do not use the built-in `Promise.all` function.',
  ],
  solutions: [
    {
      title: 'Manual promise coordination',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
