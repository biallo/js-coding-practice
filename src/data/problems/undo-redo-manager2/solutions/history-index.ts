export default class UndoRedoManager<T> {
  private history: T[];
  private index = 0;
  private hasDraft = false;
  private draft: T | undefined;

  constructor(private initialValue: T) {
    this.history = [initialValue];
  }

  getCurrent(): T {
    return this.hasDraft ? (this.draft as T) : this.history[this.index];
  }

  set(value: T): void {
    if (!this.hasDraft) {
      // Starting a new draft abandons any redo path from the current commit.
      this.history = this.history.slice(0, this.index + 1);
    }

    this.draft = value;
    this.hasDraft = true;
  }

  commit(): void {
    if (!this.hasDraft) {
      return;
    }

    this.history.push(this.draft as T);
    this.index = this.history.length - 1;
    this.hasDraft = false;
    this.draft = undefined;
  }

  undo(): void {
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

  redo(): void {
    if (!this.hasDraft && this.canRedo()) {
      this.index += 1;
    }
  }

  reset(): void {
    this.history = [this.initialValue];
    this.index = 0;
    this.hasDraft = false;
    this.draft = undefined;
  }

  canUndo(): boolean {
    return this.hasDraft || this.index > 0;
  }

  canRedo(): boolean {
    return !this.hasDraft && this.index < this.history.length - 1;
  }
}
