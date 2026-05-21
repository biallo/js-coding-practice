import type { PracticeProblem } from '../../problemTypes';
import mapJavascriptSolution from './solutions/map.js?raw';
import mapTypescriptSolution from './solutions/map.ts?raw';
import objectJavascriptSolution from './solutions/object.js?raw';
import objectTypescriptSolution from './solutions/object.ts?raw';

export const memoize2Problem: PracticeProblem = {
  id: 'memoize2',
  title: 'memoize2',
  difficulty: 'Medium',
  description:
    'A memoize function is a higher-order function that takes a function and returns a memoized version of it. The memoized function caches expensive results and returns the cached result when it receives the same input again.\n\nImplement `memoize(func)`. You can assume `func` accepts only one argument, and that argument will be a string or number. The returned function should call `func` the first time it sees an input, store the result, and return the stored result on future calls with the same input. If the memoized function is used as a method, preserve its `this` value when calling `func`.\n\nExamples:\n`const memoizedDouble = memoize((n) => n * 2);`\n`memoizedDouble(5)` returns `10` and computes the result.\n`memoizedDouble(5)` returns `10` from cache.\n`memoizedDouble(10)` returns `20` and computes a new result.',
  points: [
    '`func` (Function): A single-argument function accepting a string or number.',
    'Return a function with the same single-argument call shape.',
    'Cache the result for each distinct input.',
    'Return cached results without calling `func` again for repeated inputs.',
    'Handle cached falsey values such as `0`, `false`, `null`, or `undefined` correctly.',
    'Preserve `this` when the memoized function is called as an object method.',
    '(Function): Returns the memoized function.',
  ],
  solutions: [
    {
      title: 'Map Cache',
      javascript: mapJavascriptSolution.trim(),
      typescript: mapTypescriptSolution.trim(),
    },
    {
      title: 'Object Cache',
      javascript: objectJavascriptSolution.trim(),
      typescript: objectTypescriptSolution.trim(),
    },
  ],
};
