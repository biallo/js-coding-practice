import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const lruCacheProblem: PracticeProblem = {
  id: 'lruCache',
  title: 'LRU Cache',
  difficulty: 'Medium',
  description: 'Design an `LRUCache` class with a fixed positive capacity.\n\nThe cache should expose `get(key)` and `put(key, value)`. `get(key)` returns the stored value when the key exists, otherwise it returns `-1`. Both reading and writing a key should mark that key as recently used.\n\nWhen inserting a new key would exceed capacity, evict the least recently used key.',
  examples: [
    {
      input: '`const cache = new LRUCache(2);`\n`cache.put(1, 1); cache.put(2, 2);`\n`cache.get(1)` returns `1` and makes key `1` recently used.\n`cache.put(3, 3)` evicts key `2`.\n`cache.get(2)` returns `-1`.\n`cache.put(4, 4)` evicts key `1`.\n`cache.get(1)`',
      output: '`-1`, `cache.get(3)` returns `3`, and `cache.get(4)` returns `4`',
    }
  ],
  points: [
    '`constructor(capacity)`: Create a cache with fixed positive capacity.',
    '`get(key)`: Return the value or `-1` when missing.',
    '`put(key, value)`: Insert or update a key.',
    'Reads and writes both mark a key as recently used.',
    'Evict the least recently used key when capacity is exceeded.',
    'Aim for `O(1)` average time for `get` and `put`.',
    'A `Map` can be used because it preserves insertion order.',
  ],
  solutions: [
    {
      title: 'Map order',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
