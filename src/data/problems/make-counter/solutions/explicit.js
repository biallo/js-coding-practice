export default function makeCounter(initialValue = 0) {
  let count = initialValue;

  return function counter() {
    const value = count;
    count += 1;
    return value;
  };
}
