import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const newOperatorProblem: PracticeProblem = {
  id: 'newOperator',
  title: 'New Operator',
  difficulty: 'Medium',
  description:
    'Implement a function `myNew(Constructor, ...args)` that behaves like JavaScript\'s `new` operator.\n\nThe function should create a new object whose prototype is `Constructor.prototype`, call `Constructor` with that object as `this`, and return the correct final value.\n\nIf the constructor returns an object or function, that returned value should be used. If it returns a primitive value or returns nothing, the newly-created object should be used.\n\nExamples:\n`function User(name) { this.name = name; }`\n`myNew(User, "Ada").name` returns `"Ada"`.\n\n`function Factory() { this.a = 1; return { b: 2 }; }`\n`myNew(Factory)` returns `{ b: 2 }`.\n\n`function Primitive() { this.a = 1; return 2; }`\n`myNew(Primitive).a` returns `1`.',
  points: [
    '`Constructor` (Function): The constructor to invoke.',
    '`...args`: Arguments passed to the constructor.',
    'Create an object linked to `Constructor.prototype`.',
    'Invoke the constructor with the created object as `this`.',
    'Return constructor-created objects/functions when explicitly returned.',
    'Return the created instance when the constructor returns a primitive or `undefined`.',
    'Do not use the `new` operator inside `myNew`.',
  ],
  solutions: [
    {
      title: 'Prototype and apply',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
