import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const routerProblem: PracticeProblem = {
  id: 'router',
  title: 'Router',
  difficulty: 'Medium',
  description:
    'Implement a small client-side router.\n\n`createRouter(routes)` receives route objects shaped like `{ path, handler }`. It should return an object with `start`, `push`, `replace`, `back`, `listen`, and `getCurrentPath`.\n\nWhen the current path changes, find the matching route and call its handler with `{ path, params }`. Support dynamic route segments like `/users/:id`. `listen(listener)` should subscribe to navigation changes and return an unsubscribe function.\n\nExamples:\n`const router = createRouter([{ path: "/users/:id", handler: ({ params }) => params.id }]);`\n`router.push("/users/42")` should match the route and provide `{ id: "42" }`.',
  points: [
    '`routes`: Array of `{ path, handler }` route definitions.',
    'Support `push(path)`, `replace(path)`, and `back()` navigation.',
    'Support `listen(listener)` and return an unsubscribe function.',
    'Match static paths and dynamic `:param` segments.',
    'Call the matched route handler on navigation.',
    'Use the History API when running in a browser.',
    'Expose `getCurrentPath()` for reading current location.',
  ],
  solutions: [
    {
      title: 'History router',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
