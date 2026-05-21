type MemoizeKey = string | number

type CacheEntry<R> = {
  value: R
}

function toCacheKey(value: MemoizeKey): string {
  return `${typeof value}:${value}`;
}

export default function memoize<T extends MemoizeKey, R>(
  func: (value: T) => R,
): (value: T) => R {
  const primitiveCache: Record<string, CacheEntry<R>> = Object.create(null);
  const objectCache = new WeakMap<object, Record<string, CacheEntry<R>>>();

  return function memoized(this: unknown, value: T): R {
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
