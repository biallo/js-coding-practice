export default function mean(array: number[]): number {
  let total = 0;

  for (const value of array) {
    total += value;
  }

  return total / array.length;
}
