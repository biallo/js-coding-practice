type JsonValue =
  | JsonValue[]
  | { [key: string]: JsonValue }
  | boolean
  | null
  | number
  | string

export default function deepEqual(valueA: JsonValue, valueB: JsonValue): boolean {
  const stack: Array<[JsonValue, JsonValue]> = [[valueA, valueB]];

  while (stack.length > 0) {
    const [currentA, currentB] = stack.pop() as [JsonValue, JsonValue];

    if (currentA === currentB) {
      continue;
    }

    if (
      typeof currentA !== 'object' ||
      typeof currentB !== 'object' ||
      currentA === null ||
      currentB === null
    ) {
      return false;
    }

    if (Array.isArray(currentA) !== Array.isArray(currentB)) {
      return false;
    }

    if (Array.isArray(currentA)) {
      const arrayB = currentB as JsonValue[];

      if (currentA.length !== arrayB.length) {
        return false;
      }

      for (let i = 0; i < currentA.length; i += 1) {
        stack.push([currentA[i], arrayB[i]]);
      }

      continue;
    }

    const objectA = currentA as Record<string, JsonValue>;
    const objectB = currentB as Record<string, JsonValue>;
    const keysA = Object.keys(objectA);
    const keysB = Object.keys(objectB);

    if (keysA.length !== keysB.length) {
      return false;
    }

    for (const key of keysA) {
      if (!Object.hasOwn(objectB, key)) {
        return false;
      }

      // Defer nested comparisons to avoid recursive call-stack growth.
      stack.push([objectA[key], objectB[key]]);
    }
  }

  return true;
}
