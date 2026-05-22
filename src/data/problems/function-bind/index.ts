import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const functionBindProblem: PracticeProblem = {
  id: 'functionBind',
  title: 'Function.prototype.bind',
  difficulty: 'Medium',
  description:
    'Implement `Function.prototype.bind`. To avoid overwriting the native method used by the runtime, implement it as `Function.prototype.myBind`.\n\n`myBind(thisArg, ...boundArgs)` should return a new function. When the new function is called normally, it invokes the original function with `thisArg` as `this` and with bound arguments placed before call-time arguments.\n\nWhen the bound function is called with `new`, the newly-created instance should be used as `this` instead of `thisArg`, and the instance should inherit from the original function prototype.\n\nExamples:\n`function add(a, b) { return this.base + a + b; }`\n`const addToTen = add.myBind({ base: 10 }, 2);`\n`addToTen(3)` returns `15`.\n\n`function User(name) { this.name = name; }`\n`const BoundUser = User.myBind({ ignored: true });`\n`new BoundUser("Ada")` creates an object with `name` equal to `"Ada"` and `instanceof User` equal to `true`.',
  points: [
    'Add `myBind` to `Function.prototype`.',
    'Return a new callable function.',
    'Preserve bound arguments before later call-time arguments.',
    'Use the provided `thisArg` for normal function calls.',
    'When called with `new`, ignore `thisArg` and use the new instance as `this`.',
    'Preserve the prototype chain for constructor usage.',
    'Do not use the native `Function.prototype.bind` method.',
  ],
  solutions: [
    {
      title: 'Bound wrapper',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
