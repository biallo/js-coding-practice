export default class LRUCache {
  private readonly capacity: number;

  private readonly cache = new Map<number, number>();

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  get(key: number): number {
    if (!this.cache.has(key)) {
      return -1;
    }

    const value = this.cache.get(key) as number;
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    this.cache.set(key, value);

    if (this.cache.size > this.capacity) {
      const leastRecentKey = this.cache.keys().next().value as number;
      this.cache.delete(leastRecentKey);
    }
  }
}
