export default function* fibGenerator() {
  let previous = 0;
  let current = 1;

  while (true) {
    yield previous;

    const next = previous + current;
    previous = current;
    current = next;
  }
}
