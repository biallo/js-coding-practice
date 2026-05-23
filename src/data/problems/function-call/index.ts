import type { PracticeProblem } from '../../problemTypes';
import symbolJavascriptSolution from './solutions/symbol.js?raw';
import symbolTypescriptSolution from './solutions/symbol.ts?raw';
import temporaryJavascriptSolution from './solutions/temporary-property.js?raw';
import temporaryTypescriptSolution from './solutions/temporary-property.ts?raw';

export const functionCallProblem: PracticeProblem = {
  id: 'functionCall',
  title: 'Function.prototype.call',
  difficulty: 'Easy',
  description: 'Implement `Function.prototype.call`. To avoid overwriting the native method used by the runtime, implement it as `Function.prototype.myCall`.\n\n`myCall` should invoke the function it is called on with the provided `thisArg` as its `this` value, followed by any arguments passed individually after `thisArg`. Do not call the native `Function.prototype.call` inside your implementation.\n\nIf `thisArg` is `null` or `undefined`, use `globalThis` as the receiver. Primitive receivers should be boxed using normal JavaScript object coercion.',
  examples: [
    {
      input: '`function multiplyAge(multiplier = 1) {\n  return this.age * multiplier;\n}`\n`multiplyAge.myCall({ age: 21 })` returns `21`.\n`multiplyAge.myCall({ age: 42 }, 2)`',
      output: '`84`',
    }
  ],
  points: [
    'Add `myCall` to `Function.prototype`.',
    '`thisArg` is the value used as `this` when invoking the function.',
    'Pass any remaining arguments to the target function individually.',
    'Do not use the native `Function.prototype.call` method.',
    'Use `globalThis` when `thisArg` is `null` or `undefined`.',
    'Return the invoked function\'s return value.',
  ],
  solutions: [
    {
      title: 'Symbol Property',
      javascript: symbolJavascriptSolution.trim(),
      typescript: symbolTypescriptSolution.trim(),
    },
    {
      title: 'Temporary Property',
      javascript: temporaryJavascriptSolution.trim(),
      typescript: temporaryTypescriptSolution.trim(),
    },
  ],
};
