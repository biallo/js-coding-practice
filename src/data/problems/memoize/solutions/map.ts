type MemoizeKey = string | number

export default function memoize<T extends MemoizeKey, R>(
  func: (value: T) => R,
): (value: T) => R {
  const primitiveCache = new Map<T, R>();
  const objectCache = new WeakMap<object, Map<T, R>>();

  return function memoized(this: unknown, value: T): R {
    if (this !== null && (typeof this === 'object' || typeof this === 'function')) {
      let contextCache = objectCache.get(this);

      if (contextCache === undefined) {
        contextCache = new Map<T, R>();
        objectCache.set(this, contextCache);
      }

      if (contextCache.has(value)) {
        return contextCache.get(value) as R;
      }

      const result = func.call(this, value);
      contextCache.set(value, result);
      return result;
    }

    const cache = primitiveCache;

    if (cache.has(value)) {
      return cache.get(value) as R;
    }

    const result = func.call(this, value);
    cache.set(value, result);
    return result;
  };
}
