type Fn = (...params: unknown[]) => unknown

const valueKey = Symbol('value')

export default function memoize(fn: Fn): Fn {
  const root = new Map<unknown, unknown>();

  return function memoized(...args: unknown[]): unknown {
    let node = root;

    for (const arg of args) {
      if (!node.has(arg)) {
        node.set(arg, new Map<unknown, unknown>());
      }

      node = node.get(arg) as Map<unknown, unknown>;
    }

    if (node.has(valueKey)) {
      return node.get(valueKey);
    }

    const result = fn(...args);
    node.set(valueKey, result);
    return result;
  };
}
