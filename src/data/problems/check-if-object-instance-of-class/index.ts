import type { PracticeProblem } from '../../problemTypes';
import prototypeChainJavascriptSolution from './solutions/prototype-chain.js?raw';
import prototypeChainTypescriptSolution from './solutions/prototype-chain.ts?raw';

export const checkIfObjectInstanceOfClassProblem: PracticeProblem = {
  id: 'checkIfObjectInstanceOfClass',
  title: 'Check if Object Instance of Class',
  difficulty: 'Medium',
  description: 'Implement `checkIfInstanceOf(obj, classFunction)`, which checks whether a given value is an instance of a given class or superclass.\n\nFor this problem, a value is considered an instance of a class if it has access to that class\'s methods through the prototype chain. The inputs can be any JavaScript values, including `null`, `undefined`, primitives, constructor functions, and classes.\n\nUnlike the `instanceof` operator, primitive values should count as instances of their wrapper constructors when they can access those methods.',
  examples: [
    {
      input: '`checkIfInstanceOf(new Date(), Date)`',
      output: '`true`',
    },
    {
      input: '`class Animal {}; class Dog extends Animal {}; checkIfInstanceOf(new Dog(), Animal)`',
      output: '`true`',
    },
    {
      input: '`checkIfInstanceOf(Date, Date)`',
      output: '`false`',
    },
    {
      input: '`checkIfInstanceOf(5, Number)`',
      output: '`true`',
    }
  ],
  points: [
    '`obj` (any): Value to check.',
    '`classFunction` (any): Constructor or class to check against.',
    'Return `false` when `obj` is `null` or `undefined`.',
    'Return `false` when `classFunction` is not a function or has no usable `prototype`.',
    'Walk the prototype chain and return `true` if it contains `classFunction.prototype`.',
    'Primitive wrapper cases such as `checkIfInstanceOf(5, Number)` should return `true`.',
    '(boolean): Returns whether `obj` is considered an instance of `classFunction`.',
  ],
  solutions: [
    {
      title: 'Prototype Chain',
      javascript: prototypeChainJavascriptSolution.trim(),
      typescript: prototypeChainTypescriptSolution.trim(),
    },
  ],
};
