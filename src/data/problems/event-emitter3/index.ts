import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const eventEmitter3Problem: PracticeProblem = {
  id: 'eventEmitter3',
  title: 'Event Emitter III',
  difficulty: 'Hard',
  description: 'Design an advanced `EventEmitter` class with `on`, `once`, `off`, and `emit`.\n\n`on(eventName, listener)` registers a persistent listener. `once(eventName, listener)` registers a listener that is removed before its first invocation. `off(eventName, listener)` removes one matching listener. `emit(eventName, ...args)` invokes listeners in registration order and returns `true` if any listener was called.\n\nListener mutation during an emit should not corrupt the current dispatch. If a listener removes another listener while an event is being emitted, the current emit should keep using the listener snapshot that existed when emit started.',
  examples: [
    {
      input: '`emitter.once("ready", fn); emitter.emit("ready"); emitter.emit("ready");` calls `fn` once.',
      output: '`fn` runs only during the first emit',
    },
    {
      input: 'If listener `a` removes listener `b` during `emit("x")`, listener `b` should still run during that current emit.\nThat is true when `b` was in the initial listener snapshot.\nIt should not run on later emits.',
      output: 'The current emit uses a listener snapshot; later emits use the updated listener list',
    }
  ],
  points: [
    '`on(eventName, listener)`: Add a persistent listener.',
    '`once(eventName, listener)`: Add a listener that runs at most once.',
    '`off(eventName, listener)`: Remove one matching listener.',
    '`emit(eventName, ...args)`: Invoke a snapshot of listeners in registration order.',
    '`emit` returns `true` when listeners were called and `false` otherwise.',
    'Removing listeners during an emit should affect later emits, not the current snapshot.',
    'Support event names that collide with object prototype property names.',
  ],
  solutions: [
    {
      title: 'Snapshot listeners',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
