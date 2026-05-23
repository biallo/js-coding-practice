import type { PracticeProblem } from '../../problemTypes';
import closureJavascriptSolution from './solutions/closure.js?raw';
import closureTypescriptSolution from './solutions/closure.ts?raw';
import recursiveJavascriptSolution from './solutions/recursive.js?raw';
import recursiveTypescriptSolution from './solutions/recursive.ts?raw';

export const curryProblem: PracticeProblem = {
  id: 'curry',
  title: 'Curry',
  difficulty: 'Medium',
  description: 'Currying converts a function that takes multiple arguments into a sequence of functions that each takes a single argument.\n\nImplement `curry(fn)`, which accepts a function and returns a curried version of it. The returned function should accept one argument at a time and can be repeatedly called until at least the number of arguments expected by the original function have been provided. That expected count is determined by `fn.length`.\n\nOnce enough arguments have been collected, invoke the original function with those arguments and return its result. Calling a curried function with no arguments should not add an `undefined` argument; it should continue returning a function, except for zero-argument functions where the empty call executes the original function. If the curried function is called as an object method, preserve that `this` value for the final invocation.',
  examples: [
    {
      input: '`function add(a, b) {\n  return a + b;\n}`\n`const curriedAdd = curry(add);`\n`curriedAdd(3)(4)`',
      output: '`7`',
    },
    {
      input: '`function multiplyThreeNumbers(a, b, c) {\n  return a * b * c;\n}`\n`const curriedMultiply = curry(multiplyThreeNumbers);`\n`curriedMultiply(4)(5)(6)`',
      output: '`120`',
    }
  ],
  points: [
    '`fn` (Function): The function to curry.',
    'Return a function that accepts one argument at a time.',
    'Keep collecting arguments until at least `fn.length` arguments are available.',
    'A call with no arguments should return a function without changing the collected arguments unless `fn.length` is `0`.',
    'Invoke `fn` with the collected arguments once enough have been provided.',
    'Preserve the `this` value from the first partial call that supplies a meaningful receiver.',
    'Support partially applied functions stored and called later.',
    '(Function): Returns the curried function.',
  ],
  solutions: [
    {
      title: 'Recursive Closure',
      javascript: recursiveJavascriptSolution.trim(),
      typescript: recursiveTypescriptSolution.trim(),
    },
    {
      title: 'Argument Closure',
      javascript: closureJavascriptSolution.trim(),
      typescript: closureTypescriptSolution.trim(),
    },
  ],
};
