import type { PracticeProblem } from '../../problemTypes';
import mapJavascriptSolution from './solutions/map.js?raw';
import mapTypescriptSolution from './solutions/map.ts?raw';
import objectJavascriptSolution from './solutions/object.js?raw';
import objectTypescriptSolution from './solutions/object.ts?raw';

export const eventEmitter2Problem: PracticeProblem = {
  id: 'eventEmitter2',
  title: 'Event Emitter II',
  difficulty: 'Medium',
  description:
    'Design an `EventEmitter` class that allows clients to subscribe to events and emit those events later.\n\nThis version uses a subscription object API. Calling `subscribe(eventName, callback)` should register the callback and return an object with an `unsubscribe()` method. Calling `unsubscribe()` should remove that specific callback subscription and return `undefined`.\n\nCalling `emit(eventName, args)` should call every callback subscribed to `eventName` in subscription order. The optional `args` parameter is an array of arguments that should be spread into each callback. `emit` should return an array containing the return values from all callbacks. If there are no callbacks for the event, return an empty array.\n\nExample:\n`const sub = emitter.subscribe(\'firstEvent\', (...args) => args.join(\',\'));`\n`emitter.emit(\'firstEvent\', [1, 2, 3])` returns `[\'1,2,3\']`.\nAfter `sub.unsubscribe()`, `emitter.emit(\'firstEvent\', [4, 5, 6])` returns `[]`.',
  points: [
    '`subscribe(eventName, callback)`: Registers a callback for an event name.',
    '`subscribe` should return an object with an `unsubscribe()` method.',
    '`unsubscribe()` should remove that specific callback subscription and return `undefined`.',
    '`emit(eventName, args = [])`: Calls callbacks in subscription order with `args` spread as arguments.',
    '`emit` should return an array of callback return values, or `[]` when there are no callbacks.',
  ],
  solutions: [
    {
      title: 'Map',
      javascript: mapJavascriptSolution.trim(),
      typescript: mapTypescriptSolution.trim(),
    },
    {
      title: 'Null Object',
      javascript: objectJavascriptSolution.trim(),
      typescript: objectTypescriptSolution.trim(),
    },
  ],
};
