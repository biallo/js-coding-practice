import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const requestDeduplicationProblem: PracticeProblem = {
  id: 'requestDeduplication',
  title: 'Request Deduplication',
  difficulty: 'Medium',
  description: 'Implement `dedupe(requester)`, which wraps an asynchronous requester so concurrent calls for the same key share one in-flight promise.\n\nThe wrapped function receives `key` as its first argument and forwards all arguments to `requester`. If a request for that key is already pending, return the same promise instead of calling `requester` again. Once the promise settles, remove it from the in-flight cache so future calls can start a fresh request.',
  examples: [
    {
      input: '`const getUser = dedupe(fetchUser);`\n`const a = getUser("42"); const b = getUser("42");`\n`a === b` is `true`, and `fetchUser` is called once while the request is pending.',
      output: 'Both calls share the same in-flight promise',
    },
    {
      input: 'After the request settles, `getUser("42")` should call `fetchUser` again.',
      output: 'A later call starts a fresh request',
    }
  ],
  points: [
    '`requester(key, ...args)`: Async function to wrap.',
    'Use the first argument as the deduplication key.',
    'Concurrent calls with the same key return the same promise.',
    'Calls with different keys should run independently.',
    'Remove cached promises after they settle.',
    'A rejected request should also be removed after settling.',
    'Preserve the original resolved value or rejection reason.',
  ],
  solutions: [
    {
      title: 'In-flight map',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
