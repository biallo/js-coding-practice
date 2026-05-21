export default function memoize(fn) {
  const valueIds = new Map();
  const cache = new Map();

  function getValueId(value) {
    if (!valueIds.has(value)) {
      valueIds.set(value, valueIds.size);
    }

    return valueIds.get(value);
  }

  return function memoized(...args) {
    const key = args.map(getValueId).join(',');

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
