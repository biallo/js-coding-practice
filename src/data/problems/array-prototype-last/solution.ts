export {};

declare global {
  interface Array<T> {
    last(): T | -1;
  }
}

Array.prototype.last = function <T>(this: T[]): T | -1 {
  return this.length === 0 ? -1 : this[this.length - 1];
};
