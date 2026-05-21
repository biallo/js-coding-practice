export default function memoize(func) {
  const primitiveCache = new Map();
  const objectCache = new WeakMap();

  return function memoized(value) {
    if (this !== null && (typeof this === 'object' || typeof this === 'function')) {
      let contextCache = objectCache.get(this);

      if (contextCache === undefined) {
        contextCache = new Map();
        objectCache.set(this, contextCache);
      }

      if (contextCache.has(value)) {
        return contextCache.get(value);
      }

      const result = func.call(this, value);
      contextCache.set(value, result);
      return result;
    }

    const cache = primitiveCache;

    if (cache.has(value)) {
      return cache.get(value);
    }

    const result = func.call(this, value);
    cache.set(value, result);
    return result;
  };
}
