export default class UndoRedoManager<T> {
  private current: T;
  private undoStack: T[] = [];
  private redoStack: T[] = [];
  private hasDraft = false;
  private draft: T | undefined;

  constructor(private initialValue: T) {
    this.current = initialValue;
  }

  getCurrent(): T {
    return this.hasDraft ? (this.draft as T) : this.current;
  }

  set(value: T): void {
    if (!this.hasDraft) {
      // A new draft starts a new branch, so redo history is no longer valid.
      this.redoStack = [];
    }

    this.draft = value;
    this.hasDraft = true;
  }

  commit(): void {
    if (!this.hasDraft) {
      return;
    }

    this.undoStack.push(this.current);
    this.current = this.draft as T;
    this.hasDraft = false;
    this.draft = undefined;
  }

  undo(): void {
    if (this.hasDraft) {
      this.hasDraft = false;
      this.draft = undefined;
      return;
    }

    if (!this.canUndo()) {
      return;
    }

    this.redoStack.push(this.current);
    this.current = this.undoStack.pop() as T;
  }

  redo(): void {
    if (this.hasDraft || !this.canRedo()) {
      return;
    }

    this.undoStack.push(this.current);
    this.current = this.redoStack.pop() as T;
  }

  reset(): void {
    this.current = this.initialValue;
    this.undoStack = [];
    this.redoStack = [];
    this.hasDraft = false;
    this.draft = undefined;
  }

  canUndo(): boolean {
    return this.hasDraft || this.undoStack.length > 0;
  }

  canRedo(): boolean {
    return !this.hasDraft && this.redoStack.length > 0;
  }
}
