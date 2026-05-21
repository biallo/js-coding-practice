export default class UndoRedoManager {
  constructor(initialValue) {
    this.initialValue = initialValue;
    this.current = initialValue;
    this.undoStack = [];
    this.redoStack = [];
    this.hasDraft = false;
    this.draft = undefined;
  }

  getCurrent() {
    return this.hasDraft ? this.draft : this.current;
  }

  set(value) {
    if (!this.hasDraft) {
      // A new draft starts a new branch, so redo history is no longer valid.
      this.redoStack = [];
    }

    this.draft = value;
    this.hasDraft = true;
  }

  commit() {
    if (!this.hasDraft) {
      return;
    }

    this.undoStack.push(this.current);
    this.current = this.draft;
    this.hasDraft = false;
    this.draft = undefined;
  }

  undo() {
    if (this.hasDraft) {
      this.hasDraft = false;
      this.draft = undefined;
      return;
    }

    if (!this.canUndo()) {
      return;
    }

    this.redoStack.push(this.current);
    this.current = this.undoStack.pop();
  }

  redo() {
    if (this.hasDraft || !this.canRedo()) {
      return;
    }

    this.undoStack.push(this.current);
    this.current = this.redoStack.pop();
  }

  reset() {
    this.current = this.initialValue;
    this.undoStack = [];
    this.redoStack = [];
    this.hasDraft = false;
    this.draft = undefined;
  }

  canUndo() {
    return this.hasDraft || this.undoStack.length > 0;
  }

  canRedo() {
    return !this.hasDraft && this.redoStack.length > 0;
  }
}
