function toCacheKey(value) {
  return `${typeof value}:${value}`;
}

export default function memoize(func) {
  const primitiveCache = Object.create(null);
  const objectCache = new WeakMap();

  return function memoized(value) {
    const key = toCacheKey(value);
    let cache = primitiveCache;

    if (this !== null && (typeof this === 'object' || typeof this === 'function')) {
      const cachedForContext = objectCache.get(this);

      if (cachedForContext === undefined) {
        cache = Object.create(null);
        objectCache.set(this, cache);
      } else {
        cache = cachedForContext;
      }
    }

    if (Object.hasOwn(cache, key)) {
      return cache[key].value;
    }

    const result = func.call(this, value);
    cache[key] = { value: result };
    return result;
  };
}
