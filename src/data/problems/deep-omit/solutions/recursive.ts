type DeepValue =
  | null
  | undefined
  | boolean
  | number
  | string
  | DeepValue[]
  | { [key: string]: DeepValue }

function isObject(value: DeepValue): value is { [key: string]: DeepValue } {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function omitValue(value: DeepValue, keysToOmit: Set<string>): DeepValue {
  if (Array.isArray(value)) {
    return value.map((item) => omitValue(item, keysToOmit));
  }

  if (!isObject(value)) {
    return value;
  }

  const result: { [key: string]: DeepValue } = {};

  for (const [key, childValue] of Object.entries(value)) {
    if (!keysToOmit.has(key)) {
      result[key] = omitValue(childValue, keysToOmit);
    }
  }

  return result;
}

export default function deepOmit(
  obj: { [key: string]: DeepValue },
  keys: string[],
): { [key: string]: DeepValue } {
  return omitValue(obj, new Set(keys)) as { [key: string]: DeepValue };
}
