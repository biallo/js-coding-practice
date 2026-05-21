type JsonValue =
  | JsonValue[]
  | { [key: string]: JsonValue }
  | boolean
  | null
  | number
  | string

export default function deepEqual(valueA: JsonValue, valueB: JsonValue): boolean {
  if (valueA === valueB) {
    return true;
  }

  if (
    typeof valueA !== 'object' ||
    typeof valueB !== 'object' ||
    valueA === null ||
    valueB === null
  ) {
    return false;
  }

  if (Array.isArray(valueA) !== Array.isArray(valueB)) {
    return false;
  }

  if (Array.isArray(valueA)) {
    const arrayB = valueB as JsonValue[];

    if (valueA.length !== arrayB.length) {
      return false;
    }

    // Arrays must match by index.
    return valueA.every((item, index) => deepEqual(item, arrayB[index]));
  }

  const objectA = valueA as Record<string, JsonValue>;
  const objectB = valueB as Record<string, JsonValue>;
  const keysA = Object.keys(objectA);
  const keysB = Object.keys(objectB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  return keysA.every(
    (key) => Object.hasOwn(objectB, key) && deepEqual(objectA[key], objectB[key]),
  );
}
