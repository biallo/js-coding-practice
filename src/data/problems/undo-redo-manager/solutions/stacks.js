export default class UndoRedoManager {
  constructor(initialValue) {
    this.initialValue = initialValue;
    this.current = initialValue;
    this.undoStack = [];
    this.redoStack = [];
  }

  getCurrent() {
    return this.current;
  }

  set(value) {
    // The old current value becomes undoable and any redo path is abandoned.
    this.undoStack.push(this.current);
    this.current = value;
    this.redoStack = [];
  }

  undo() {
    if (!this.canUndo()) {
      return;
    }

    this.redoStack.push(this.current);
    this.current = this.undoStack.pop();
  }

  redo() {
    if (!this.canRedo()) {
      return;
    }

    this.undoStack.push(this.current);
    this.current = this.redoStack.pop();
  }

  reset() {
    this.current = this.initialValue;
    this.undoStack = [];
    this.redoStack = [];
  }

  canUndo() {
    return this.undoStack.length > 0;
  }

  canRedo() {
    return this.redoStack.length > 0;
  }
}
