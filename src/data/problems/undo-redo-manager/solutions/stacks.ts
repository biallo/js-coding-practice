export default class UndoRedoManager<T> {
  private current: T;
  private undoStack: T[] = [];
  private redoStack: T[] = [];

  constructor(private initialValue: T) {
    this.current = initialValue;
  }

  getCurrent(): T {
    return this.current;
  }

  set(value: T): void {
    // The old current value becomes undoable and any redo path is abandoned.
    this.undoStack.push(this.current);
    this.current = value;
    this.redoStack = [];
  }

  undo(): void {
    if (!this.canUndo()) {
      return;
    }

    this.redoStack.push(this.current);
    this.current = this.undoStack.pop() as T;
  }

  redo(): void {
    if (!this.canRedo()) {
      return;
    }

    this.undoStack.push(this.current);
    this.current = this.redoStack.pop() as T;
  }

  reset(): void {
    this.current = this.initialValue;
    this.undoStack = [];
    this.redoStack = [];
  }

  canUndo(): boolean {
    return this.undoStack.length > 0;
  }

  canRedo(): boolean {
    return this.redoStack.length > 0;
  }
}
