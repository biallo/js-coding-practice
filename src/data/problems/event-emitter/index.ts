import type { PracticeProblem } from '../../problemTypes';
import classJavascriptSolution from './solutions/class.js?raw';
import classTypescriptSolution from './solutions/class.ts?raw';
import prototypeJavascriptSolution from './solutions/prototype.js?raw';
import prototypeTypescriptSolution from './solutions/prototype.ts?raw';

export const eventEmitterProblem: PracticeProblem = {
  id: 'eventEmitter',
  title: 'Event Emitter',
  difficulty: 'Medium',
  description:
    'In the observer pattern, subscribers listen for events emitted by publishers and run code whenever those events happen.\n\nImplement an `EventEmitter` class similar to Node.js\'s event emitter. Each `EventEmitter` instance should keep its own isolated event listeners.\n\nThe emitter should support three APIs:\n`on(eventName, listener)`: Adds a listener for `eventName` and returns the emitter instance for chaining.\n`off(eventName, listener)`: Removes one matching listener for `eventName` and returns the emitter instance for chaining.\n`emit(eventName, ...args)`: Invokes listeners for `eventName` in the order they were added, passing through all supplied arguments. Returns `true` when listeners were called and `false` otherwise.\n\nThe same listener can be added more than once. Calling `off` once should remove only one matching registration. Emitting or removing a non-existent event should not throw.',
  examples: [
    {
      input: '`emitter.on("sum", (a, b) => a + b); emitter.emit("sum", 2, 3)`',
      output: '`true`, and the listener receives `2` and `3`',
    },
    {
      input: '`emitter.emit("missing")`',
      output: '`false`',
    },
    {
      input: 'Register the same listener twice, then call `off(eventName, listener)` once.',
      output: 'Only one matching listener registration is removed',
    },
  ],
  points: [
    '`new EventEmitter()`: Creates an emitter instance with isolated listeners.',
    '`on(eventName, listener)`: Adds a listener and returns the emitter instance for chaining.',
    '`off(eventName, listener)`: Removes one matching listener and returns the emitter instance for chaining.',
    '`emit(eventName, ...args)`: Calls listeners in insertion order with the supplied arguments.',
    '`emit` should return `true` when the event has listeners and `false` otherwise.',
    'Event names such as `toString` should not collide with built-in object properties.',
  ],
  solutions: [
    {
      title: 'Class',
      javascript: classJavascriptSolution.trim(),
      typescript: classTypescriptSolution.trim(),
    },
    {
      title: 'Prototype',
      javascript: prototypeJavascriptSolution.trim(),
      typescript: prototypeTypescriptSolution.trim(),
    },
  ],
};
