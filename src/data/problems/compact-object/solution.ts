type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };

export default function compactObject(obj: JSONValue): JSONValue {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.filter(Boolean).map(compactObject);
  }

  const compacted: { [key: string]: JSONValue } = {};

  for (const [key, value] of Object.entries(obj)) {
    if (value) {
      compacted[key] = compactObject(value);
    }
  }

  return compacted;
}
