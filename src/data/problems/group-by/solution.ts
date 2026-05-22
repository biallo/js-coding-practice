export {};

declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>;
  }
}

Array.prototype.groupBy = function <T>(
  this: T[],
  fn: (item: T) => string,
): Record<string, T[]> {
  return this.reduce<Record<string, T[]>>((groups, item) => {
    const key = fn(item);

    if (!groups[key]) {
      groups[key] = [];
    }

    groups[key].push(item);
    return groups;
  }, {});
};
