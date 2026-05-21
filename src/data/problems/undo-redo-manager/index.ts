import type { PracticeProblem } from '../../problemTypes';
import historyIndexJavascriptSolution from './solutions/history-index.js?raw';
import historyIndexTypescriptSolution from './solutions/history-index.ts?raw';
import stacksJavascriptSolution from './solutions/stacks.js?raw';
import stacksTypescriptSolution from './solutions/stacks.ts?raw';

export const undoRedoManagerProblem: PracticeProblem = {
  id: 'undoRedoManager',
  title: 'Undo / Redo Manager',
  difficulty: 'Medium',
  description:
    'Undo and redo functionality is common in text editors, drawing tools, settings panels, and multi-step workflows. Implement a reusable `UndoRedoManager` class that stores a history of values and can move backward and forward through that history.\n\n`new UndoRedoManager(initialValue)` should create a manager with `initialValue` as the first history entry. Each instance should have isolated history. Values should be stored as-is; you do not need to deep clone them.\n\nThe manager should support `getCurrent()`, `set(value)`, `undo()`, `redo()`, `reset()`, `canUndo()`, and `canRedo()`. Calling `set()` after one or more `undo()` calls should discard all redo history before appending the new value. Calling `set()` with the same value as the current value should still create a new history step.\n\nExample:\n`const manager = new UndoRedoManager(0);`\nAfter `manager.set(1); manager.set(2); manager.undo();`, `manager.getCurrent()` returns `1` and `manager.canRedo()` returns `true`.\nAfter `manager.redo();`, `manager.getCurrent()` returns `2`.\nAfter `manager.undo(); manager.set(10);`, `manager.canRedo()` returns `false`.\nAfter `manager.reset();`, `manager.getCurrent()` returns `0`.',
  points: [
    '`new UndoRedoManager(initialValue)`: Seeds history with the initial value.',
    '`getCurrent()`: Returns the current value in history.',
    '`set(value)`: Appends a new current value and discards redo history.',
    '`undo()`: Moves one step backward if possible; otherwise does nothing.',
    '`redo()`: Moves one step forward if possible; otherwise does nothing.',
    '`reset()`: Restores the initial value and clears undo and redo history.',
    '`canUndo()` and `canRedo()`: Return whether moving backward or forward is currently possible.',
  ],
  solutions: [
    {
      title: 'History Index',
      javascript: historyIndexJavascriptSolution.trim(),
      typescript: historyIndexTypescriptSolution.trim(),
    },
    {
      title: 'Two Stacks',
      javascript: stacksJavascriptSolution.trim(),
      typescript: stacksTypescriptSolution.trim(),
    },
  ],
};
