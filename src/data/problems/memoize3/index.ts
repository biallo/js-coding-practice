import type { PracticeProblem } from '../../problemTypes';
import nestedMapJavascriptSolution from './solutions/nested-map.js?raw';
import nestedMapTypescriptSolution from './solutions/nested-map.ts?raw';
import valueIdsJavascriptSolution from './solutions/value-ids.js?raw';
import valueIdsTypescriptSolution from './solutions/value-ids.ts?raw';

export const memoize3Problem: PracticeProblem = {
  id: 'memoize3',
  title: 'memoize3',
  difficulty: 'Hard',
  description: 'Given any function `fn`, return a memoized version of that function.\n\nA memoized function should never call `fn` twice with the same inputs. Instead, it should return the cached value from the first call with that exact argument list.\n\nUnlike simpler memoize problems, `fn` can accept any number of arguments and any value types. Inputs are considered identical only when every argument at the same position is `===` to the previous argument. This means primitive values compare by strict equality, while objects and arrays compare by reference identity.\n\nDo not serialize arguments with `JSON.stringify()` for this version: different object references like `{}` and `{}` should be treated as different inputs, even though they serialize the same way.',
  examples: [
    {
      input: '`const memoizedAdd = memoize((a, b) => a + b);`\n`memoizedAdd(2, 2)` returns `4` and calls the original function.\n`memoizedAdd(2, 2)`',
      output: '`4` from cache',
    },
    {
      input: '`const merge = memoize((a, b) => ({ ...a, ...b }));`\n`merge({}, {})` and `merge({}, {})` should call the original function twice.\nEach object literal is a different reference.',
      output: 'The original function is called twice',
    },
    {
      input: '`const obj = {};`\n`merge(obj, obj)` followed by `merge(obj, obj)` should call the original function only once.\nThe same object reference is reused.',
      output: 'The second call returns the cached result',
    }
  ],
  points: [
    '`fn` (Function): Any function accepting any number of arguments.',
    'Return a function that accepts the same arguments as `fn`.',
    'Cache results by the complete ordered argument list.',
    'Arguments match only when each corresponding value is strictly equal with `===`.',
    'Object and array arguments should be cached by reference identity, not structural equality.',
    'Repeated calls with new object literals should not share a cache entry.',
    'The returned function does not need to preserve `this`.',
    '(Function): Returns the memoized function.',
  ],
  solutions: [
    {
      title: 'Nested Map',
      javascript: nestedMapJavascriptSolution.trim(),
      typescript: nestedMapTypescriptSolution.trim(),
    },
    {
      title: 'Value IDs',
      javascript: valueIdsJavascriptSolution.trim(),
      typescript: valueIdsTypescriptSolution.trim(),
    },
  ],
};
