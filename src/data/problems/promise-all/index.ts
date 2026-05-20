import type { PracticeProblem } from '../../problemTypes';
import asyncJavascriptSolution from './solutions/async.js?raw';
import asyncTypescriptSolution from './solutions/async.ts?raw';
import thenJavascriptSolution from './solutions/then.js?raw';
import thenTypescriptSolution from './solutions/then.ts?raw';

export const promiseAllProblem: PracticeProblem = {
  id: 'promiseAll',
  title: 'Promise.all',
  difficulty: 'Medium',
  description:
    '`Promise.all()` takes multiple promise-like values and returns a single promise. The returned promise resolves to an array of resolved values when every input has fulfilled, and rejects as soon as any input rejects.\n\nImplement a function `promiseAll(iterable)` that behaves like `Promise.all`, except the input is an array instead of a general iterable.\n\nThe input array can contain promises and non-promise values. The resolved output array must preserve the same order as the input array, regardless of which promises settle first. If the input array is empty, the returned promise should resolve to an empty array. If any input rejects, the returned promise should reject with that reason.\n\nExamples:\n`await promiseAll([Promise.resolve(3), 42, Promise.resolve(\'foo\')])` resolves to `[3, 42, \'foo\']`.\n`await promiseAll([])` resolves to `[]`.\nIf one input rejects with `\'An error occurred!\'`, the returned promise rejects with `\'An error occurred!\'`.',
  points: [
    '`iterable` (Array): An array containing promise-like values and/or regular values.',
    'Resolve with an array of values in the same order as the input array.',
    'Resolve with `[]` when the input array is empty.',
    'Reject as soon as any input rejects, using that rejection reason.',
    '(Promise<Array>): Returns a promise for the resolved values.',
  ],
  solutions: [
    {
      title: 'Promise.then',
      javascript: thenJavascriptSolution.trim(),
      typescript: thenTypescriptSolution.trim(),
    },
    {
      title: 'Async Await',
      javascript: asyncJavascriptSolution.trim(),
      typescript: asyncTypescriptSolution.trim(),
    },
  ],
};
