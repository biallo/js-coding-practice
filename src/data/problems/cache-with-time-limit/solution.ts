type CacheEntry = {
  value: number;
  expiresAt: number;
  timeoutId: ReturnType<typeof setTimeout>;
};

export default class TimeLimitedCache {
  private cache = new Map<number, CacheEntry>();

  set(key: number, value: number, duration: number): boolean {
    const now = Date.now();
    const existing = this.cache.get(key);
    const hadUnexpiredKey = Boolean(existing && existing.expiresAt > now);

    if (existing) {
      clearTimeout(existing.timeoutId);
    }

    const expiresAt = now + duration;
    const timeoutId = setTimeout(() => {
      const entry = this.cache.get(key);

      if (entry?.timeoutId === timeoutId) {
        this.cache.delete(key);
      }
    }, duration);

    this.cache.set(key, { value, expiresAt, timeoutId });

    return hadUnexpiredKey;
  }

  get(key: number): number {
    const entry = this.cache.get(key);

    if (!entry || entry.expiresAt <= Date.now()) {
      if (entry) {
        clearTimeout(entry.timeoutId);
        this.cache.delete(key);
      }

      return -1;
    }

    return entry.value;
  }

  count(): number {
    for (const key of this.cache.keys()) {
      this.get(key);
    }

    return this.cache.size;
  }
}
