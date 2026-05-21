export default class TimeLimitedCache {
  cache = new Map();

  set(key, value, duration) {
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

  get(key) {
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

  count() {
    for (const key of this.cache.keys()) {
      this.get(key);
    }

    return this.cache.size;
  }
}
