type CountKey = string | number | symbol | null | undefined

export default function countBy<T>(
  array: T[],
  iteratee: (value: T) => CountKey,
): Record<PropertyKey, number> {
  const counts: Record<PropertyKey, number> = {};

  for (const value of array) {
    const key = iteratee(value) as PropertyKey;
    counts[key] = (counts[key] ?? 0) + 1;
  }

  return counts;
}
