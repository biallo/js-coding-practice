export default function mean(array) {
  return array.reduce((total, value) => total + value, 0) / array.length;
}
