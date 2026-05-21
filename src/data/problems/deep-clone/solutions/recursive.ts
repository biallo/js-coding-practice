type JsonValue =
  | JsonValue[]
  | { [key: string]: JsonValue }
  | boolean
  | null
  | number
  | string

export default function deepClone<T extends JsonValue>(value: T): T {
  if (typeof value !== 'object' || value === null) {
    return value;
  }

  if (Array.isArray(value)) {
    // Clone each array item so nested objects do not share references.
    return value.map((item) => deepClone(item)) as T;
  }

  return Object.fromEntries(
    Object.entries(value).map(([key, item]) => [key, deepClone(item)]),
  ) as T;
}
