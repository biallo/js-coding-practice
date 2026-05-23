import type { PracticeProblem } from '../../problemTypes';
import factoryJavascriptSolution from './solutions/factory.js?raw';
import factoryTypescriptSolution from './solutions/factory.ts?raw';
import matcherJavascriptSolution from './solutions/matcher.js?raw';
import matcherTypescriptSolution from './solutions/matcher.ts?raw';

export const testRunnerProblem: PracticeProblem = {
  id: 'testRunner',
  title: 'Test Runner',
  difficulty: 'Medium',
  description: 'Implement a small test runner factory called `createTestRunner()`.\n\nThe factory should return a fresh runner object with `spec()`, `check()`, and `run()`. `spec(name, fn)` registers synchronous specs that should run later in declaration order. `check(actual).toBe(expected)` should assert with `Object.is(actual, expected)`. `check(actual).not.toBe(expected)` should assert the inverse. Each `.not` flips the expectation, so `check(actual).not.not.toBe(expected)` behaves like the normal matcher.\n\n`run()` should execute all registered specs, keep going after failures, and return a summary object with `total`, `passed`, `failed`, and `results`. If a spec throws an `Error`, record `error.message`; otherwise record `String(thrownValue)`.',
  examples: [
    {
      input: '`const { spec, check, run } = createTestRunner();`\n`spec(\'adds numbers\', () => { check(1 + 2).toBe(3); });`\n`spec(\'compares strings\', () => { check(\'runner\').not.toBe(\'jest\'); });`\n`run()`',
      output: '`{\n  total: 2,\n  passed: 2,\n  failed: 0,\n  results: [\n    { name: \'adds numbers\', status: \'passed\' },\n    { name: \'compares strings\', status: \'passed\' },\n  ],\n}`',
    }
  ],
  points: [
    '`createTestRunner()`: Returns isolated runner state.',
    '`spec(name, fn)`: Registers a synchronous spec to run later.',
    '`check(actual).toBe(expected)`: Uses `Object.is` equality.',
    '`check(actual).not.toBe(expected)`: Inverts the assertion.',
    'Multiple `.not` accesses should keep flipping the expectation.',
    '`run()`: Executes specs in declaration order and records failures without stopping.',
    '(Object): Returns the test run summary.',
  ],
  solutions: [
    {
      title: 'Factory State',
      javascript: factoryJavascriptSolution.trim(),
      typescript: factoryTypescriptSolution.trim(),
    },
    {
      title: 'Matcher Builder',
      javascript: matcherJavascriptSolution.trim(),
      typescript: matcherTypescriptSolution.trim(),
    },
  ],
};
