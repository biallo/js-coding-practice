type Fn = (...params: unknown[]) => unknown

export default function memoize(fn: Fn): Fn {
  const valueIds = new Map<unknown, number>();
  const cache = new Map<string, unknown>();

  function getValueId(value: unknown): number {
    if (!valueIds.has(value)) {
      valueIds.set(value, valueIds.size);
    }

    return valueIds.get(value) as number;
  }

  return function memoized(...args: unknown[]): unknown {
    const key = args.map(getValueId).join(',');

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
