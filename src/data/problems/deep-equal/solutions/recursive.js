export default function deepEqual(valueA, valueB) {
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
    if (valueA.length !== valueB.length) {
      return false;
    }

    // Arrays must match by index.
    return valueA.every((item, index) => deepEqual(item, valueB[index]));
  }

  const keysA = Object.keys(valueA);
  const keysB = Object.keys(valueB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  return keysA.every(
    (key) => Object.hasOwn(valueB, key) && deepEqual(valueA[key], valueB[key]),
  );
}
