export default function makeCounter(initialValue = 0) {
  let count = initialValue;

  return function counter() {
    return count++;
  };
}
