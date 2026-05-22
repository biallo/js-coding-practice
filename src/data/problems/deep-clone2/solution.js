export default function deepClone(value, seen = new WeakMap()) {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (seen.has(value)) {
    return seen.get(value);
  }

  if (value instanceof Date) {
    return new Date(value.getTime());
  }

  if (value instanceof RegExp) {
    const clonedRegExp = new RegExp(value.source, value.flags);
    clonedRegExp.lastIndex = value.lastIndex;
    return clonedRegExp;
  }

  if (value instanceof Map) {
    const clonedMap = new Map();
    seen.set(value, clonedMap);

    for (const [key, mapValue] of value) {
      clonedMap.set(deepClone(key, seen), deepClone(mapValue, seen));
    }

    return clonedMap;
  }

  if (value instanceof Set) {
    const clonedSet = new Set();
    seen.set(value, clonedSet);

    for (const item of value) {
      clonedSet.add(deepClone(item, seen));
    }

    return clonedSet;
  }

  const clonedValue = Array.isArray(value)
    ? []
    : Object.create(Object.getPrototypeOf(value));
  seen.set(value, clonedValue);

  for (const key of Reflect.ownKeys(value)) {
    clonedValue[key] = deepClone(value[key], seen);
  }

  return clonedValue;
}
