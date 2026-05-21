export default function mean(array: number[]): number {
  return array.reduce((total, value) => total + value, 0) / array.length;
}
