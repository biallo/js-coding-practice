import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const deepClone2Problem: PracticeProblem = {
  id: 'deepClone2',
  title: 'Deep Clone II',
  difficulty: 'Hard',
  description:
    'Implement an advanced `deepClone(value)` function that supports common JavaScript built-ins and circular references.\n\nIn addition to primitives, arrays, and plain objects, support `Date`, `RegExp`, `Map`, and `Set`. If the input graph contains cycles or shared references, the clone should preserve that structure without infinite recursion.\n\nExamples:\n`const obj = { name: "Ada" }; obj.self = obj;`\n`const cloned = deepClone(obj);`\n`cloned !== obj` is `true`, and `cloned.self === cloned` is also `true`.\n\n`const map = new Map([[{ id: 1 }, new Set([new Date(0)])]]);`\n`deepClone(map)` returns a new `Map` whose key, set, and date are all cloned values.',
  points: [
    'Primitive values should be returned as-is.',
    'Clone arrays and object own properties recursively.',
    'Clone `Date` and `RegExp` instances.',
    'Clone `Map` keys and values recursively.',
    'Clone `Set` values recursively.',
    'Use a `WeakMap` to preserve cycles and shared references.',
    'Do not mutate the input value.',
  ],
  solutions: [
    {
      title: 'WeakMap recursion',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
