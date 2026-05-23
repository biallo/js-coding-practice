import type { PracticeProblem } from '../../problemTypes';
import jsonKeyJavascriptSolution from './solutions/json-key.js?raw';
import jsonKeyTypescriptSolution from './solutions/json-key.ts?raw';
import nestedMapJavascriptSolution from './solutions/nested-map.js?raw';
import nestedMapTypescriptSolution from './solutions/nested-map.ts?raw';

export const memoizeProblem: PracticeProblem = {
  id: 'memoize',
  title: 'memoize',
  difficulty: 'Medium',
  description: 'Given a function `fn`, return a memoized version of that function.\n\nA memoized function should never call `fn` twice with the same inputs. Instead, it should return the cached value from the first call with that exact argument list.\n\nFor this problem, `fn` is one of three possible numeric functions: `sum(a, b)`, `fib(n)`, or `factorial(n)`. `sum` accepts two integers and returns `a + b`. `fib` accepts one integer and returns `1` when `n <= 1`, otherwise `fib(n - 1) + fib(n - 2)`. `factorial` accepts one integer and returns `1` when `n <= 1`, otherwise `factorial(n - 1) * n`.\n\nArgument order matters, so calls like `memoized(2, 3)` and `memoized(3, 2)` must use different cache entries. The returned function does not need to preserve `this`.',
  examples: [
    {
      input: '`const memoizedSum = memoize((a, b) => a + b);`\n`memoizedSum(2, 2)` returns `4` and calls the original function.\n`memoizedSum(2, 2)` returns `4` from cache.\n`memoizedSum(1, 2)`',
      output: '`3` and calls the original function again',
    },
    {
      input: '`const memoizedFactorial = memoize((n) => n <= 1 ? 1 : n * factorial(n - 1));`\n`memoizedFactorial(2)` returns `2`; a second call with `2`',
      output: 'the cached value',
    }
  ],
  points: [
    '`fn` (Function): One of `sum`, `fib`, or `factorial`.',
    'Return a function that accepts the same arguments as `fn`.',
    'Cache results by the complete ordered argument list.',
    'Do not call `fn` again for repeated calls with the same arguments.',
    '`memoized(2, 3)` and `memoized(3, 2)` should be cached separately.',
    'The returned function does not need to preserve `this`.',
    '(Function): Returns the memoized function.',
  ],
  solutions: [
    {
      title: 'JSON Key',
      javascript: jsonKeyJavascriptSolution.trim(),
      typescript: jsonKeyTypescriptSolution.trim(),
    },
    {
      title: 'Nested Map',
      javascript: nestedMapJavascriptSolution.trim(),
      typescript: nestedMapTypescriptSolution.trim(),
    },
  ],
};
