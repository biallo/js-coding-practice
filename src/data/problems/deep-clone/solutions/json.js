export default function deepClone(value) {
  // Works for this problem's JSON-serializable input constraint.
  return JSON.parse(JSON.stringify(value));
}
