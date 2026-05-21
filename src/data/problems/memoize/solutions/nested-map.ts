type Fn = (...params: number[]) => number

const valueKey = Symbol('value')

export default function memoize(fn: Fn): Fn {
  const cache = new Map<number | typeof valueKey, Map<number | typeof valueKey, unknown> | number>();

  return function memoized(...args: number[]): number {
    let node = cache;

    for (const arg of args) {
      if (!node.has(arg)) {
        node.set(arg, new Map());
      }

      node = node.get(arg) as Map<number | typeof valueKey, unknown>;
    }

    if (node.has(valueKey)) {
      return node.get(valueKey) as number;
    }

    const result = fn(...args);
    node.set(valueKey, result);
    return result;
  };
}
