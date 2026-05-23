import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const calculatorWithMethodChainingProblem: PracticeProblem = {
  id: 'calculatorWithMethodChaining',
  title: 'Calculator with Method Chaining',
  difficulty: 'Easy',
  description: 'Design a `Calculator` class that supports addition, subtraction, multiplication, division, exponentiation, and method chaining.\n\nThe constructor accepts an initial number used as the starting `result`. Each math operation should update the current result and return the same `Calculator` instance so calls can be chained. `getResult()` returns the current result.\n\n`divide(value)` should throw an error with the message `Division by zero is not allowed` when `value` is `0`.',
  examples: [
    {
      input: '`new Calculator(10).add(5).subtract(7).getResult()`',
      output: '`8`',
    },
    {
      input: '`new Calculator(2).multiply(5).power(2).getResult()`',
      output: '`100`',
    },
    {
      input: '`new Calculator(20).divide(0).getResult()`',
      output: '`Division by zero is not allowed`',
    }
  ],
  points: [
    '`new Calculator(value)`: Initializes the current result.',
    '`add(value)`: Adds `value` and returns the calculator instance.',
    '`subtract(value)`: Subtracts `value` and returns the calculator instance.',
    '`multiply(value)`: Multiplies by `value` and returns the calculator instance.',
    '`divide(value)`: Divides by `value` and returns the calculator instance.',
    '`divide(0)` should throw `Division by zero is not allowed`.',
    '`power(value)`: Raises the result to `value` and returns the calculator instance.',
    '`getResult()`: Returns the current result.',
  ],
  solutions: [
    {
      title: 'Mutable Class',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
