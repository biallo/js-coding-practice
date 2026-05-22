export default function deepClone<T>(value: T, seen = new WeakMap<object, unknown>()): T {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  const objectValue = value as object;

  if (seen.has(objectValue)) {
    return seen.get(objectValue) as T;
  }

  if (value instanceof Date) {
    return new Date(value.getTime()) as T;
  }

  if (value instanceof RegExp) {
    const clonedRegExp = new RegExp(value.source, value.flags);
    clonedRegExp.lastIndex = value.lastIndex;
    return clonedRegExp as T;
  }

  if (value instanceof Map) {
    const clonedMap = new Map<unknown, unknown>();
    seen.set(value, clonedMap);

    for (const [key, mapValue] of value) {
      clonedMap.set(deepClone(key, seen), deepClone(mapValue, seen));
    }

    return clonedMap as T;
  }

  if (value instanceof Set) {
    const clonedSet = new Set<unknown>();
    seen.set(value, clonedSet);

    for (const item of value) {
      clonedSet.add(deepClone(item, seen));
    }

    return clonedSet as T;
  }

  const clonedValue: Record<PropertyKey, unknown> = Array.isArray(value)
    ? []
    : Object.create(Object.getPrototypeOf(value));
  seen.set(objectValue, clonedValue);

  for (const key of Reflect.ownKeys(objectValue)) {
    clonedValue[key] = deepClone((objectValue as Record<PropertyKey, unknown>)[key], seen);
  }

  return clonedValue as T;
}
