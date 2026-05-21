import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const cacheWithTimeLimitProblem: PracticeProblem = {
  id: 'cacheWithTimeLimit',
  title: 'Cache With Time Limit',
  difficulty: 'Medium',
  description:
    'Write a `TimeLimitedCache` class that stores integer key-value pairs with an expiration time for each key.\n\nThe class should expose three methods:\n`set(key, value, duration)`: Stores `value` at `key` for `duration` milliseconds. If the same unexpired key already exists, return `true`; otherwise return `false`. The stored value and duration should be overwritten either way.\n`get(key)`: Returns the value for an unexpired key, or `-1` if the key does not exist or has expired.\n`count()`: Returns the number of unexpired keys in the cache.\n\nExamples:\nAt `t=0`, `cache.set(1, 42, 100)` returns `false`.\nAt `t=50`, `cache.get(1)` returns `42` and `cache.count()` returns `1`.\nAt `t=150`, `cache.get(1)` returns `-1`.\n\nAt `t=0`, `cache.set(1, 42, 50)` returns `false`.\nAt `t=40`, `cache.set(1, 50, 100)` returns `true`.\nAt `t=120`, `cache.get(1)` returns `50`.\nAt `t=200`, `cache.get(1)` returns `-1`.',
  points: [
    '`set(key, value, duration)`: Store or overwrite a key for `duration` milliseconds.',
    '`set` returns whether the key existed and was unexpired before the write.',
    '`get(key)`: Return the current value or `-1` for missing or expired keys.',
    '`count()`: Return the number of unexpired keys.',
    'Expired keys should no longer be accessible.',
    'Overwriting a key should replace both its value and expiration time.',
    '(Class): Implement `TimeLimitedCache` with `set`, `get`, and `count` methods.',
  ],
  solutions: [
    {
      title: 'Map with Timers',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
