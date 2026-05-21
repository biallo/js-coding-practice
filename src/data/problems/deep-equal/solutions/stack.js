export default function deepEqual(valueA, valueB) {
  const stack = [[valueA, valueB]];

  while (stack.length > 0) {
    const [currentA, currentB] = stack.pop();

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
      if (currentA.length !== currentB.length) {
        return false;
      }

      for (let i = 0; i < currentA.length; i += 1) {
        stack.push([currentA[i], currentB[i]]);
      }

      continue;
    }

    const keysA = Object.keys(currentA);
    const keysB = Object.keys(currentB);

    if (keysA.length !== keysB.length) {
      return false;
    }

    for (const key of keysA) {
      if (!Object.hasOwn(currentB, key)) {
        return false;
      }

      // Defer nested comparisons to avoid recursive call-stack growth.
      stack.push([currentA[key], currentB[key]]);
    }
  }

  return true;
}
