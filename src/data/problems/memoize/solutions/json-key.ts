type Fn = (...params: number[]) => number

export default function memoize(fn: Fn): Fn {
  const cache = new Map<string, number>();

  return function memoized(...args: number[]): number {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key) as number;
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
