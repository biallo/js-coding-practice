export default function compactObject(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.filter(Boolean).map(compactObject);
  }

  const compacted = {};

  for (const [key, value] of Object.entries(obj)) {
    if (value) {
      compacted[key] = compactObject(value);
    }
  }

  return compacted;
}
