export default function sortBy(arr, fn) {
  return [...arr].sort((a, b) => fn(a) - fn(b));
}
