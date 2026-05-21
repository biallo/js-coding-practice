export default class UndoRedoManager {
  constructor(initialValue) {
    this.initialValue = initialValue;
    this.history = [initialValue];
    this.index = 0;
    this.hasDraft = false;
    this.draft = undefined;
  }

  getCurrent() {
    return this.hasDraft ? this.draft : this.history[this.index];
  }

  set(value) {
    if (!this.hasDraft) {
      // Starting a new draft abandons any redo path from the current commit.
      this.history = this.history.slice(0, this.index + 1);
    }

    this.draft = value;
    this.hasDraft = true;
  }

  commit() {
    if (!this.hasDraft) {
      return;
    }

    this.history.push(this.draft);
    this.index = this.history.length - 1;
    this.hasDraft = false;
    this.draft = undefined;
  }

  undo() {
    if (this.hasDraft) {
      // Uncommitted changes are discarded, not added to redo history.
      this.hasDraft = false;
      this.draft = undefined;
      return;
    }

    if (this.canUndo()) {
      this.index -= 1;
    }
  }

  redo() {
    if (!this.hasDraft && this.canRedo()) {
      this.index += 1;
    }
  }

  reset() {
    this.history = [this.initialValue];
    this.index = 0;
    this.hasDraft = false;
    this.draft = undefined;
  }

  canUndo() {
    return this.hasDraft || this.index > 0;
  }

  canRedo() {
    return !this.hasDraft && this.index < this.history.length - 1;
  }
}
