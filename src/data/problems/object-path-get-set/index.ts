import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const objectPathGetSetProblem: PracticeProblem = {
  id: 'objectPathGetSet',
  title: 'Object Path Get Set',
  difficulty: 'Medium',
  description: 'Implement `get(obj, path, defaultValue)` and `set(obj, path, value)` for nested object paths.\n\nPaths may use dot notation and bracket notation, such as `"user.address.city"` or `"items[0].name"`. `get` should return `defaultValue` when the path cannot be fully resolved. `set` should create missing objects or arrays as needed and return the original object.',
  examples: [
    {
      input: '`get({ a: { b: [10] } }, "a.b[0]")`',
      output: '`10`',
    },
    {
      input: '`get({}, "a.b", "N/A")`',
      output: '`"N/A"`',
    },
    {
      input: '`const obj = {}; set(obj, "items[0].name", "Book")`',
      output: '`obj` to `{ items: [{ name: "Book" }] }`',
    }
  ],
  points: [
    'Support dot notation like `a.b.c`.',
    'Support bracket notation like `items[0].name`.',
    '`get` returns `defaultValue` when path is missing.',
    '`set` creates missing containers.',
    'Numeric next path segments should create arrays.',
    '`set` returns the original root object.',
    'Avoid using `eval` or `new Function`.',
  ],
  solutions: [
    {
      title: 'Path parser',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
