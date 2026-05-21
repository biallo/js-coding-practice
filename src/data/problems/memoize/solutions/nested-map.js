const valueKey = Symbol('value');

export default function memoize(fn) {
  const cache = new Map();

  return function memoized(...args) {
    let node = cache;

    for (const arg of args) {
      if (!node.has(arg)) {
        node.set(arg, new Map());
      }

      node = node.get(arg);
    }

    if (node.has(valueKey)) {
      return node.get(valueKey);
    }

    const result = fn(...args);
    node.set(valueKey, result);
    return result;
  };
}
