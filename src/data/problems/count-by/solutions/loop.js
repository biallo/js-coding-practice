export default function countBy(array, iteratee) {
  const counts = {};

  for (const value of array) {
    const key = iteratee(value);
    counts[key] = (counts[key] ?? 0) + 1;
  }

  return counts;
}
