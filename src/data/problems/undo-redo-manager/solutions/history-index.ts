export default class UndoRedoManager<T> {
  private history: T[];
  private index = 0;

  constructor(private initialValue: T) {
    this.history = [initialValue];
  }

  getCurrent(): T {
    return this.history[this.index];
  }

  set(value: T): void {
    // Discard redo history before appending the new current value.
    this.history = this.history.slice(0, this.index + 1);
    this.history.push(value);
    this.index = this.history.length - 1;
  }

  undo(): void {
    if (this.canUndo()) {
      this.index -= 1;
    }
  }

  redo(): void {
    if (this.canRedo()) {
      this.index += 1;
    }
  }

  reset(): void {
    this.history = [this.initialValue];
    this.index = 0;
  }

  canUndo(): boolean {
    return this.index > 0;
  }

  canRedo(): boolean {
    return this.index < this.history.length - 1;
  }
}
