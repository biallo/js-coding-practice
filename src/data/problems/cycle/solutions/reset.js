export default function cycle(...values) {
  let index = 0;

  return function nextValue() {
    const value = values[index];
    index += 1;

    if (index === values.length) {
      index = 0;
    }

    return value;
  };
}
