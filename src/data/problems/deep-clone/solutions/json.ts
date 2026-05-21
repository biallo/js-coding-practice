type JsonValue =
  | JsonValue[]
  | { [key: string]: JsonValue }
  | boolean
  | null
  | number
  | string

export default function deepClone<T extends JsonValue>(value: T): T {
  // Works for this problem's JSON-serializable input constraint.
  return JSON.parse(JSON.stringify(value)) as T;
}
