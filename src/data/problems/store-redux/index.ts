import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const storeReduxProblem: PracticeProblem = {
  id: 'storeRedux',
  title: 'Store Redux',
  difficulty: 'Medium',
  description: 'Implement a small Redux-like store.\n\n`createStore(reducer, preloadedState)` should return an object with `getState`, `dispatch`, and `subscribe`. `dispatch(action)` computes the next state by calling `reducer(currentState, action)`, notifies current listeners, and returns the action. `subscribe(listener)` registers a listener and returns an unsubscribe function.\n\nAlso implement `applyMiddleware(...middlewares)`, where middleware shape is `store => next => action => result`.',
  examples: [
    {
      input: '`const store = createStore((state = 0, action) => action.type === "inc" ? state + 1 : state, 0);`\n`store.dispatch({ type: "inc" }); store.getState()`',
      output: '`1`',
    }
  ],
  points: [
    '`createStore(reducer, preloadedState)`: Create a store.',
    '`getState()`: Return current state.',
    '`dispatch(action)`: Run reducer, update state, notify listeners, and return the action.',
    '`subscribe(listener)`: Add listener and return an unsubscribe function.',
    'Listeners should be called from a snapshot during dispatch.',
    '`applyMiddleware(...middlewares)`: Enhance dispatch with middleware chain.',
    'Initialize the store by dispatching an internal action.',
  ],
  solutions: [
    {
      title: 'Store and middleware',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
