import type { PracticeProblem } from '../../problemTypes';
import historyIndexJavascriptSolution from './solutions/history-index.js?raw';
import historyIndexTypescriptSolution from './solutions/history-index.ts?raw';
import stacksJavascriptSolution from './solutions/stacks.js?raw';
import stacksTypescriptSolution from './solutions/stacks.ts?raw';

export const undoRedoManager2Problem: PracticeProblem = {
  id: 'undoRedoManager2',
  title: 'Undo / Redo Manager II',
  difficulty: 'Hard',
  description: 'Implement an advanced `UndoRedoManager` that supports live uncommitted changes. This version separates temporary `set()` updates from committed history entries.\n\n`new UndoRedoManager(initialValue)` should create a manager with `initialValue` as the first committed value. Calling `set(value)` updates the current live value but does not immediately add a history entry. Calling `commit()` should commit the latest live value as one new history entry. Multiple `set()` calls before one `commit()` should create only one undo step.\n\nCalling `undo()` while there is an uncommitted live value should discard that live value and return to the latest committed value. Calling `set()` after undoing should discard redo history. Values should be stored as-is; no deep clone is required.\n\nThe manager should support `getCurrent()`, `set(value)`, `commit()`, `undo()`, `redo()`, `reset()`, `canUndo()`, and `canRedo()`.',
  examples: [
    {
      input: '`const manager = new UndoRedoManager(0);`\nAfter `manager.set(1); manager.set(2);`:\n`manager.getCurrent()` returns `2`, but `manager.canUndo()` is only undoing the live draft.\nAfter `manager.commit(); manager.undo();`, `manager.getCurrent()` returns `0`.\nAfter `manager.redo();`, `manager.getCurrent()`',
      output: '`2`',
    }
  ],
  points: [
    '`new UndoRedoManager(initialValue)`: Seeds committed history with the initial value.',
    '`set(value)`: Updates the current live value without committing a new history entry.',
    '`commit()`: Commits the latest live value as one new history entry.',
    'Multiple `set()` calls before `commit()` should create only one undo step.',
    '`undo()` should discard an uncommitted live value before moving through committed history.',
    '`redo()` should move forward through committed history when possible.',
    '`reset()`: Restores the initial committed value and clears all draft, undo, and redo state.',
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
