export default class UndoRedoManager {
  constructor(initialValue) {
    this.initialValue = initialValue;
    this.history = [initialValue];
    this.index = 0;
  }

  getCurrent() {
    return this.history[this.index];
  }

  set(value) {
    // Discard redo history before appending the new current value.
    this.history = this.history.slice(0, this.index + 1);
    this.history.push(value);
    this.index = this.history.length - 1;
  }

  undo() {
    if (this.canUndo()) {
      this.index -= 1;
    }
  }

  redo() {
    if (this.canRedo()) {
      this.index += 1;
    }
  }

  reset() {
    this.history = [this.initialValue];
    this.index = 0;
  }

  canUndo() {
    return this.index > 0;
  }

  canRedo() {
    return this.index < this.history.length - 1;
  }
}
