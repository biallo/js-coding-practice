import type { PracticeProblem } from '../../problemTypes';
import pathJavascriptSolution from './solutions/path.js?raw';
import pathTypescriptSolution from './solutions/path.ts?raw';
import stackJavascriptSolution from './solutions/stack.js?raw';
import stackTypescriptSolution from './solutions/stack.ts?raw';

export const testRunner2Problem: PracticeProblem = {
  id: 'testRunner2',
  title: 'Test Runner II',
  difficulty: 'Medium',
  description: 'Extend the small `createTestRunner()` factory from Test Runner to support nested suites.\n\nThe factory should return `suite()`, `spec()`, `check()`, and `run()`. `suite(name, fn)` should call `fn()` immediately so nested suites and specs are registered under the current suite path. `spec(name, fn)` still registers a synchronous spec to run later. When a spec is inside suites, its result name should include the full suite path joined with ` > `.\n\n`check(actual).toBe(expected)` and `check(actual).not.toBe(expected)` keep the same behavior as Test Runner: compare with `Object.is`, allow repeated `.not` to flip the expectation, and throw the specified error message on failure. `run()` should execute all specs in declaration order and return the same summary shape.',
  examples: [
    {
      input: '`const { suite, spec, check, run } = createTestRunner();`\n`suite(\'math\', () => { suite(\'add\', () => { spec(\'handles zero\', () => { check(2 + 0).toBe(2); }); }); });`\n`run().results`',
      output: '`[{ name: \'math > add > handles zero\', status: \'passed\' }]`',
    }
  ],
  points: [
    '`createTestRunner()`: Returns isolated runner state with `suite`, `spec`, `check`, and `run`.',
    '`suite(name, fn)`: Registers nested context by calling `fn()` immediately.',
    '`spec(name, fn)`: Registers a synchronous spec in declaration order.',
    'Spec result names should include the current suite path joined by ` > `.',
    '`check(actual).toBe(expected)` and chainable `.not` keep the Test Runner behavior.',
    '`run()`: Executes all specs and records failures without stopping.',
    '(Object): Returns the test run summary.',
  ],
  solutions: [
    {
      title: 'Suite Stack',
      javascript: stackJavascriptSolution.trim(),
      typescript: stackTypescriptSolution.trim(),
    },
    {
      title: 'Path Copy',
      javascript: pathJavascriptSolution.trim(),
      typescript: pathTypescriptSolution.trim(),
    },
  ],
};
