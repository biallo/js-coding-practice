export default function deepClone(value) {
  if (typeof value !== 'object' || value === null) {
    return value;
  }

  if (Array.isArray(value)) {
    // Clone each array item so nested objects do not share references.
    return value.map((item) => deepClone(item));
  }

  return Object.fromEntries(
    Object.entries(value).map(([key, item]) => [key, deepClone(item)]),
  );
}
